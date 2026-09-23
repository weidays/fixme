// Admin: read / save the lead channel config, and send a test webhook.
//   GET  /api/admin/channels
//   PUT  /api/admin/channels   { phone, partnerName, partnerUrl, partnerMode, webhookUrl, webhookSecret, autoReply }
//   POST /api/admin/channels   { action: "test-webhook" }
import {
  json,
  requireAdmin,
  getChannels,
  saveChannels,
  cleanChannels,
  sendWebhook,
  partnerLink,
  MAX_BODY_BYTES,
  type Env,
  type Lead,
} from '../_utils';

function view(cfg: Awaited<ReturnType<typeof getChannels>>, env: Env) {
  return {
    ...cfg,
    webhookSecret: cfg.webhookSecret ? '••••••' + cfg.webhookSecret.slice(-4) : '',
    // Read-only facts the panel shows next to the form.
    email: { resend: Boolean(env.RESEND_API_KEY), notifyTo: env.LEAD_NOTIFY_EMAIL ?? null },
    partnerPreview: cfg.partnerUrl ? partnerLink(cfg, { zip: '75201', subid: 'TEST', src: 'carrier-furnace-code-33' }) : null,
  };
}

async function readBody(request: Request): Promise<unknown | Response> {
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return json({ error: 'Too large.' }, 413);
  try {
    return JSON.parse(text);
  } catch {
    return json({ error: 'Invalid JSON.' }, 400);
  }
}

export async function onRequestGet(context: { request: Request; env: Env }): Promise<Response> {
  const denied = requireAdmin(context.request, context.env);
  if (denied) return denied;
  return json(view(await getChannels(context.env), context.env));
}

export async function onRequestPut(context: { request: Request; env: Env }): Promise<Response> {
  const denied = requireAdmin(context.request, context.env);
  if (denied) return denied;
  const body = await readBody(context.request);
  if (body instanceof Response) return body;
  const next = cleanChannels(body, await getChannels(context.env));
  if (typeof next === 'string') return json({ error: next }, 400);
  await saveChannels(context.env.FIXME_KV, next);
  return json({ ok: true, channels: view(next, context.env) });
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const denied = requireAdmin(context.request, context.env);
  if (denied) return denied;
  const body = await readBody(context.request);
  if (body instanceof Response) return body;
  if ((body as { action?: string }).action !== 'test-webhook') return json({ error: 'Unknown action.' }, 400);
  const cfg = await getChannels(context.env);
  if (!cfg.webhookUrl) return json({ error: 'Save a webhook URL first.' }, 400);
  const sample: Lead = {
    zip: '75201',
    name: 'Test Lead',
    contact: 'test@example.com',
    issue: 'TEST — Carrier furnace flashing code 33, no heat. Sent from the fixme.vip admin panel.',
    source: 'carrier-furnace-code-33',
    createdAt: new Date().toISOString(),
    userAgent: 'fixme-admin-test',
  };
  const r = await sendWebhook(cfg, 'lead:TEST', sample);
  return json({ ok: typeof r.status === 'number' && r.status < 300, ...r });
}
