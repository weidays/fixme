// Admin: list leads (newest first) and update a lead's status / note.
//   GET  /api/admin/leads?status=new&limit=200
//   POST /api/admin/leads  { key, status?, note? }
import { json, requireAdmin, leadMeta, LEAD_STATUSES, MAX_BODY_BYTES, type Env, type Lead, type LeadStatus } from '../_utils';

export async function onRequestGet(context: { request: Request; env: Env }): Promise<Response> {
  const denied = requireAdmin(context.request, context.env);
  if (denied) return denied;
  const kv = context.env.FIXME_KV;
  const url = new URL(context.request.url);
  const wantStatus = url.searchParams.get('status');
  const limit = Math.min(Number(url.searchParams.get('limit') ?? '200') || 200, 500);

  // List with metadata so the status filter doesn't need a get per lead.
  const keys: { name: string; status: string }[] = [];
  let cursor: string | undefined;
  do {
    const page = await kv.list({ prefix: 'lead:', limit: 1000, cursor });
    for (const k of page.keys) keys.push({ name: k.name, status: String((k.metadata as { status?: string })?.status ?? 'new') });
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor && keys.length < 5000);

  keys.sort((a, b) => (a.name < b.name ? 1 : -1)); // ISO keys → newest first
  const counts: Record<string, number> = {};
  for (const k of keys) counts[k.status] = (counts[k.status] ?? 0) + 1;

  const selected = (wantStatus ? keys.filter((k) => k.status === wantStatus) : keys).slice(0, limit);
  const items: (Lead & { key: string })[] = [];
  for (const k of selected) {
    const raw = await kv.get(k.name);
    if (raw) items.push({ key: k.name, ...(JSON.parse(raw) as Lead) });
  }
  return json({ total: keys.length, counts, returned: items.length, items });
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const denied = requireAdmin(context.request, context.env);
  if (denied) return denied;
  const text = await context.request.text();
  if (text.length > MAX_BODY_BYTES) return json({ error: 'Too large.' }, 413);
  let body: { key?: unknown; status?: unknown; note?: unknown };
  try {
    body = JSON.parse(text);
  } catch {
    return json({ error: 'Invalid JSON.' }, 400);
  }
  const key = String(body.key ?? '');
  if (!key.startsWith('lead:')) return json({ error: 'Unknown lead.' }, 400);
  const kv = context.env.FIXME_KV;
  const raw = await kv.get(key);
  if (!raw) return json({ error: 'Lead not found.' }, 404);

  const lead = JSON.parse(raw) as Lead;
  if (body.status !== undefined) {
    if (!LEAD_STATUSES.includes(body.status as LeadStatus)) return json({ error: `status must be one of ${LEAD_STATUSES.join(', ')}` }, 400);
    lead.status = body.status as LeadStatus;
  }
  if (body.note !== undefined) lead.note = String(body.note).slice(0, 2000);
  lead.updatedAt = new Date().toISOString();
  await kv.put(key, JSON.stringify(lead), { metadata: leadMeta(lead) });
  return json({ ok: true, lead: { key, ...lead } });
}
