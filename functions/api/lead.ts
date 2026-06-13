// Rail B — quote-request capture. Leads are stored in our own KV with source
// attribution from day one: the evidence file for future lead-network deals.
// A best-effort email notification fires after the KV write so the operator
// can act on the lead manually until a lead network is wired in.
import { json, MAX_BODY_BYTES, type Env } from './_utils';

interface LeadBody {
  zip?: string;
  name?: string;
  contact?: string;
  issue?: string;
  source?: string;
  website?: string; // honeypot
}

interface Lead {
  zip: string;
  name: string;
  contact: string;
  issue: string;
  source: string;
  createdAt: string;
  userAgent: string;
}

/**
 * Notify the operator of a new lead via Resend. Best-effort: the lead is
 * already safe in KV before this runs, so a mail failure never loses data and
 * never blocks the user's response (called via waitUntil).
 */
async function sendLeadEmail(env: Env, lead: Lead): Promise<void> {
  if (!env.RESEND_API_KEY || !env.LEAD_NOTIFY_EMAIL) return;
  const from = env.LEAD_FROM_EMAIL || 'fixme.vip <onboarding@resend.dev>';
  const text = [
    `New HVAC quote request from fixme.vip`,
    ``,
    `ZIP:      ${lead.zip}`,
    `Name:     ${lead.name || '(not given)'}`,
    `Contact:  ${lead.contact}`,
    `From page: ${lead.source}`,
    `When:     ${lead.createdAt}`,
    ``,
    `Issue:`,
    lead.issue,
    ``,
    `— Act on this lead (call/email the customer, or pass to a contractor).`,
    `All leads are also retrievable via GET /api/leads with your admin token.`,
  ].join('\n');

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [env.LEAD_NOTIFY_EMAIL],
        reply_to: lead.contact.includes('@') ? lead.contact : undefined,
        subject: `🔧 New HVAC lead — ${lead.zip} (${lead.source})`,
        text,
      }),
    });
  } catch {
    // Swallow — the lead is already in KV; a failed notification is recoverable
    // via /api/leads. Never surface this to the user.
  }
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
  const key = `lead:${now.toISOString()}:${crypto.randomUUID().slice(0, 8)}`;
  const lead: Lead = {
    zip,
    name: String(body.name ?? '').slice(0, 80),
    contact: contact.slice(0, 120),
    issue: issue.slice(0, 1000),
    // Attribution — which code page produced this lead.
    source: String(body.source ?? 'direct').slice(0, 120),
    createdAt: now.toISOString(),
    userAgent: request.headers.get('user-agent') ?? '',
  };

  // Durable record first — must succeed before we tell the user "ok".
  await env.FIXME_KV.put(key, JSON.stringify(lead), {
    metadata: { source: lead.source, zip },
  });

  // Then notify the operator, without blocking the response or risking the lead.
  context.waitUntil(sendLeadEmail(env, lead));

  return json({ ok: true });
}
