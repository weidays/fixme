// Rail B — quote-request capture and routing.
//
// Every lead is stored in our own KV first (the evidence file for lead-network
// applications and the source of truth for /admin). Then, depending on the
// channel config saved in /admin:
//   - webhookUrl  → the lead is POSTed there (Zapier/Make → Sheets/CRM, or a network API)
//   - partnerMode 'handoff' → the response carries a link to the partner's form
//   - autoReply   → the homeowner gets a confirmation email
// plus the existing operator alert email. Routing never blocks or loses a lead.
import {
  json,
  MAX_BODY_BYTES,
  getChannels,
  sendWebhook,
  leadMeta,
  bump,
  type Env,
  type Lead,
  type ChannelConfig,
} from './_utils';

interface LeadBody {
  zip?: string;
  name?: string;
  contact?: string;
  issue?: string;
  source?: string;
  website?: string; // honeypot
}

async function resendSend(env: Env, payload: Record<string, unknown>): Promise<number | 'error'> {
  if (!env.RESEND_API_KEY) return 'error';
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({ from: env.LEAD_FROM_EMAIL || 'fixme.vip <onboarding@resend.dev>', ...payload }),
    });
    return res.status;
  } catch {
    return 'error';
  }
}

/** Operator alert. Best-effort: the lead is already in KV. */
async function notifyOperator(env: Env, id: string, lead: Lead, cfg: ChannelConfig): Promise<void> {
  if (!env.LEAD_NOTIFY_EMAIL) return;
  const routed = [
    cfg.webhookUrl ? 'forwarded to your webhook' : null,
    cfg.partnerMode === 'handoff' ? `offered a link to ${cfg.partnerName || 'your partner'}` : null,
  ].filter(Boolean);
  const text = [
    `New HVAC quote request from fixme.vip`,
    ``,
    `ZIP:       ${lead.zip}`,
    `Name:      ${lead.name || '(not given)'}`,
    `Contact:   ${lead.contact}`,
    `From page: ${lead.source}`,
    `When:      ${lead.createdAt}`,
    ``,
    `Issue:`,
    lead.issue,
    ``,
    routed.length ? `Routing: ${routed.join('; ')}.` : `Routing: no channel configured — this lead needs you to act on it.`,
    `Manage it at https://fixme.vip/admin (lead ${id}).`,
  ].join('\n');
  await resendSend(env, {
    to: [env.LEAD_NOTIFY_EMAIL],
    reply_to: lead.contact.includes('@') ? lead.contact : undefined,
    subject: `🔧 New HVAC lead — ${lead.zip} (${lead.source})`,
    text,
  });
}

/** Homeowner confirmation — only when they gave an email and the operator enabled it. */
async function confirmHomeowner(env: Env, lead: Lead, cfg: ChannelConfig, handoffUrl: string | null): Promise<number | 'error'> {
  const text = [
    `Hi${lead.name ? ` ${lead.name}` : ''},`,
    ``,
    `Thanks for your HVAC repair request on fixme.vip (ZIP ${lead.zip}). Here's what you told us:`,
    ``,
    `  "${lead.issue.slice(0, 400)}"`,
    ``,
    handoffUrl
      ? `To see licensed technicians available in your area right away, continue here:\n${handoffUrl}`
      : `We'll follow up to connect you with a licensed local HVAC technician for a free estimate.`,
    ``,
    `Safety first: if you smell gas or a CO alarm is sounding, leave the building now and call your gas utility or 911 from outside.`,
    ``,
    `— fixme.vip`,
    `You're receiving this one-time email because you requested a quote. We don't send marketing email.`,
  ].join('\n');
  return resendSend(env, { to: [lead.contact], subject: 'We received your HVAC repair request', text });
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}): Promise<Response> {
  const { request, env } = context;

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return json({ error: 'Request too large.' }, 413);

  let body: LeadBody;
  try {
    body = JSON.parse(text) as LeadBody;
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  // Honeypot tripped → pretend success, store nothing.
  if (body.website) return json({ ok: true });

  const zip = String(body.zip ?? '').trim();
  const contact = String(body.contact ?? '').trim();
  const issue = String(body.issue ?? '').trim();

  if (!/^\d{5}$/.test(zip)) return json({ error: 'A valid 5-digit US ZIP code is required.' }, 400);
  if (contact.length < 5) return json({ error: 'An email or phone number is required.' }, 400);
  if (issue.length < 10) return json({ error: 'Please describe the problem (at least 10 characters).' }, 400);

  const now = new Date();
  const id = `lead:${now.toISOString()}:${crypto.randomUUID().slice(0, 8)}`;
  const lead: Lead = {
    zip,
    name: String(body.name ?? '').slice(0, 80),
    contact: contact.slice(0, 120),
    issue: issue.slice(0, 1000),
    source: String(body.source ?? 'direct').slice(0, 120), // which code page produced this lead
    createdAt: now.toISOString(),
    userAgent: request.headers.get('user-agent') ?? '',
    status: 'new',
    routing: {},
  };

  // Durable record first — must succeed before we tell the user "ok".
  const kv = env.FIXME_KV;
  await kv.put(id, JSON.stringify(lead), { metadata: leadMeta(lead) });

  const cfg = await getChannels(env);
  const handoff = cfg.partnerMode !== 'off' && cfg.partnerUrl ? `/api/go?l=${encodeURIComponent(id)}` : null;

  // Everything below is best-effort and runs after the response.
  context.waitUntil(
    (async () => {
      const routing: NonNullable<Lead['routing']> = {};
      if (cfg.webhookUrl) {
        const r = await sendWebhook(cfg, id, lead);
        routing.webhook = { status: r.status, at: new Date().toISOString(), ...(r.detail ? { detail: r.detail } : {}) };
      }
      if (cfg.autoReply && lead.contact.includes('@')) {
        const status = await confirmHomeowner(env, lead, cfg, handoff ? `https://fixme.vip${handoff}` : null);
        routing.autoReply = { status, at: new Date().toISOString() };
      }
      if (Object.keys(routing).length) {
        // Re-read so a partner click that raced us isn't overwritten.
        const latest = JSON.parse((await kv.get(id)) ?? JSON.stringify(lead)) as Lead;
        latest.routing = { ...latest.routing, ...routing };
        await kv.put(id, JSON.stringify(latest), { metadata: leadMeta(latest) });
      }
      await notifyOperator(env, id, lead, cfg);
      await bump(kv, 'lead', lead.source);
    })().catch(() => {})
  );

  return json({
    ok: true,
    ...(handoff ? { next: handoff, partner: cfg.partnerName || 'our partner network' } : {}),
  });
}
