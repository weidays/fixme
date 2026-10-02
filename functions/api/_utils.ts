// Shared helpers for fixme.vip Pages Functions.
// Files starting with "_" are not routed by Cloudflare Pages.

export interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(
    key: string,
    value: string,
    opts?: { expirationTtl?: number; metadata?: Record<string, unknown> }
  ): Promise<void>;
  list(opts?: { prefix?: string; limit?: number; cursor?: string }): Promise<{
    keys: { name: string; metadata?: Record<string, unknown> }[];
    list_complete: boolean;
    cursor?: string;
  }>;
}

export interface Env {
  FIXME_KV: KVNamespaceLike;
  ANTHROPIC_API_KEY?: string;
  ADMIN_TOKEN?: string;
  CLAUDE_MODEL?: string;
  // Lead email notifications (Resend). All optional — if RESEND_API_KEY or
  // LEAD_NOTIFY_EMAIL is unset, lead capture still works, just no email fires.
  RESEND_API_KEY?: string;
  LEAD_NOTIFY_EMAIL?: string;
  LEAD_FROM_EMAIL?: string;
  // Lead channel defaults (overridden by the config saved from /admin).
  QUOTE_PHONE?: string;
  PARTNER_NAME?: string;
  PARTNER_URL?: string;
  PARTNER_MODE?: string;
  LEAD_WEBHOOK_URL?: string;
  LEAD_WEBHOOK_SECRET?: string;
}

export interface QueueEntry {
  error: string; // raw error text as first pasted (capped)
  count: number; // how many distinct submissions matched this hash
  firstSeen: string;
  lastSeen: string;
  diagnosis?: string; // filled by /api/diagnose — feeds the draft pipeline
  diagnosedAt?: string;
}

export const MAX_BODY_BYTES = 10_000;
export const MAX_ERROR_CHARS = 4_000;
export const FREE_DIAGNOSES_PER_DAY = 3;
export const GLOBAL_DIAGNOSES_PER_DAY = 200; // hard cost ceiling for the whole site

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

/** Normalize an error message so line numbers, paths and quotes don't split the dedupe. */
export function normalizeError(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/['"`’]/g, '')
    .replace(/\d+/g, 'N')
    .replace(/(\/[\w.-]+)+/g, '/PATH')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function hashError(raw: string): Promise<string> {
  const data = new TextEncoder().encode(normalizeError(raw));
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 16);
}

export function todayUTC(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Rate-limit bucket key for a client. IPv6 is bucketed to its /64 prefix —
 * a single host is handed an entire /64, so keying on the full address lets
 * one attacker mint unlimited free buckets. cf-connecting-ip is set by
 * Cloudflare's edge and cannot be spoofed by the client.
 */
export function clientBucket(ip: string): string {
  if (ip.includes(':')) {
    const groups = ip.split(':');
    return groups.slice(0, 4).join(':') + '::/64';
  }
  return ip;
}

/**
 * Read and validate the {error} POST body shared by /api/report and /api/diagnose.
 * Returns the trimmed error string, or a ready-to-return error Response.
 */
export async function readErrorBody(request: Request): Promise<string | Response> {
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) {
    return json({ error: 'Request body too large.' }, 413);
  }
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }
  const error =
    typeof (body as { error?: unknown }).error === 'string'
      ? ((body as { error: string }).error as string).trim()
      : '';
  if (error.length < 8) {
    return json({ error: 'Field "error" must be a string of at least 8 characters.' }, 400);
  }
  return error.slice(0, MAX_ERROR_CHARS);
}

/** Read-only lookup of an existing queue entry (no write). Used for cache hits. */
export async function readQueueEntry(
  kv: KVNamespaceLike,
  error: string
): Promise<{ key: string; entry: QueueEntry | null }> {
  const key = `q:${await hashError(error)}`;
  const existing = await kv.get(key);
  return { key, entry: existing ? (JSON.parse(existing) as QueueEntry) : null };
}

/** Upsert a queue entry for this error; returns the (possibly existing) entry and its KV key. */
export async function upsertQueueEntry(
  kv: KVNamespaceLike,
  error: string
): Promise<{ key: string; entry: QueueEntry }> {
  const { key, entry: existing } = await readQueueEntry(kv, error);
  const now = new Date().toISOString();
  let entry: QueueEntry;
  if (existing) {
    entry = existing;
    entry.count += 1;
    entry.lastSeen = now;
  } else {
    entry = { error, count: 1, firstSeen: now, lastSeen: now };
  }
  // Mirror count into KV metadata so /api/queue can sort without a get-per-key.
  await kv.put(key, JSON.stringify(entry), { metadata: { count: entry.count } });
  return { key, entry };
}

// ---------------------------------------------------------------------------
// Admin auth, lead records, channel config, counters
// ---------------------------------------------------------------------------

/** Returns a 401/503 Response if the request is not an authenticated admin call, else null. */
export function requireAdmin(request: Request, env: Env): Response | null {
  if (!env.ADMIN_TOKEN) return json({ error: 'ADMIN_TOKEN is not configured on the server.' }, 503);
  const got = request.headers.get('authorization') ?? '';
  const want = `Bearer ${env.ADMIN_TOKEN}`;
  // Length-independent comparison so response time doesn't leak the prefix match.
  let diff = got.length ^ want.length;
  for (let i = 0; i < want.length; i++) diff |= (got.charCodeAt(i) || 0) ^ want.charCodeAt(i);
  return diff === 0 ? null : json({ error: 'Unauthorized.' }, 401);
}

export const LEAD_STATUSES = ['new', 'contacted', 'handed_off', 'sold', 'dead'] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export interface Lead {
  zip: string;
  name: string;
  contact: string;
  issue: string;
  source: string;
  createdAt: string;
  userAgent: string;
  status?: LeadStatus; // missing on leads captured before the admin panel existed → treat as 'new'
  note?: string;
  updatedAt?: string;
  routing?: {
    webhook?: { status: number | 'error'; at: string; detail?: string };
    partner?: { clickedAt: string; name: string };
    autoReply?: { status: number | 'error'; at: string };
  };
}

/** KV metadata mirrored on every lead key so stats never need a get-per-lead. */
export function leadMeta(lead: Lead): Record<string, unknown> {
  return { source: lead.source, zip: lead.zip, status: lead.status ?? 'new' };
}

/**
 * Where leads go. Stored in KV (`cfg:channels`) so it is edited from /admin
 * without a redeploy; each field falls back to a Pages env var of the same
 * meaning, so it can also be set from the Cloudflare dashboard.
 *
 *   phone        pay-per-call tracking number (Service Direct, eLocal, …) — shown on every CTA
 *   partnerUrl   affiliate tracking link template (Modernize, Networx, …). Placeholders:
 *                {zip} {subid} {src} — subid is the lead id or page slug, for reconciliation
 *   partnerMode  'off'     — never send visitors to the partner
 *                'handoff' — our form first (lead stored here), then a button to the partner
 *                'direct'  — CTAs skip our form and go straight to the partner's form
 *   webhookUrl   every new lead is POSTed here as JSON (Zapier/Make → Sheets/CRM, or a
 *                network's posting endpoint); signed with webhookSecret (HMAC-SHA256)
 *   autoReply    email the homeowner a confirmation when they left an email address
 */
export interface ChannelConfig {
  phone: string;
  partnerName: string;
  partnerUrl: string;
  partnerMode: 'off' | 'handoff' | 'direct';
  webhookUrl: string;
  webhookSecret: string;
  autoReply: boolean;
}

export interface EnvChannels {
  QUOTE_PHONE?: string;
  PARTNER_NAME?: string;
  PARTNER_URL?: string;
  PARTNER_MODE?: string;
  LEAD_WEBHOOK_URL?: string;
  LEAD_WEBHOOK_SECRET?: string;
}

const CHANNELS_KEY = 'cfg:channels';

export async function getChannels(env: Env & EnvChannels): Promise<ChannelConfig> {
  let stored: Partial<ChannelConfig> = {};
  try {
    const raw = await env.FIXME_KV.get(CHANNELS_KEY);
    if (raw) stored = JSON.parse(raw) as Partial<ChannelConfig>;
  } catch {
    /* corrupt config → env defaults */
  }
  const mode = stored.partnerMode ?? env.PARTNER_MODE;
  return {
    phone: stored.phone ?? env.QUOTE_PHONE ?? '',
    partnerName: stored.partnerName ?? env.PARTNER_NAME ?? '',
    partnerUrl: stored.partnerUrl ?? env.PARTNER_URL ?? '',
    partnerMode: mode === 'handoff' || mode === 'direct' ? mode : 'off',
    webhookUrl: stored.webhookUrl ?? env.LEAD_WEBHOOK_URL ?? '',
    webhookSecret: stored.webhookSecret ?? env.LEAD_WEBHOOK_SECRET ?? '',
    autoReply: stored.autoReply ?? false,
  };
}

export async function saveChannels(kv: KVNamespaceLike, cfg: ChannelConfig): Promise<void> {
  await kv.put(CHANNELS_KEY, JSON.stringify(cfg));
}

/** Validate an admin-submitted channel config. Returns an error string or the clean config. */
export function cleanChannels(input: unknown, current: ChannelConfig): ChannelConfig | string {
  if (!input || typeof input !== 'object') return 'Body must be a JSON object.';
  const i = input as Record<string, unknown>;
  const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
  const cfg: ChannelConfig = {
    phone: str(i.phone, 30),
    partnerName: str(i.partnerName, 60),
    partnerUrl: str(i.partnerUrl, 1000),
    partnerMode: i.partnerMode === 'handoff' || i.partnerMode === 'direct' ? i.partnerMode : 'off',
    webhookUrl: str(i.webhookUrl, 1000),
    // An empty/masked secret in the form means "keep the current one".
    webhookSecret: typeof i.webhookSecret === 'string' && i.webhookSecret && !i.webhookSecret.startsWith('••')
      ? i.webhookSecret.slice(0, 200)
      : current.webhookSecret,
    autoReply: i.autoReply === true,
  };
  if (cfg.phone && !/^[+\d][\d\s().-]{6,}$/.test(cfg.phone)) return 'Phone must be digits, e.g. +1 (855) 555-0100.';
  for (const [name, url] of [['partnerUrl', cfg.partnerUrl], ['webhookUrl', cfg.webhookUrl]] as const) {
    if (url && !/^https:\/\/[^\s]+$/.test(url)) return `${name} must be an https:// URL.`;
  }
  if (cfg.partnerMode !== 'off' && !cfg.partnerUrl) return 'Partner mode needs a partner URL.';
  return cfg;
}

/** Build the outbound partner URL. Only ever the admin-configured template — never user input. */
export function partnerLink(cfg: ChannelConfig, v: { zip?: string; subid: string; src?: string }): string {
  return cfg.partnerUrl
    .replace(/\{zip\}/g, encodeURIComponent(v.zip ?? ''))
    .replace(/\{subid\}/g, encodeURIComponent(v.subid))
    .replace(/\{src\}/g, encodeURIComponent(v.src ?? ''));
}

export const EVENT_TYPES = ['call_click', 'quote_click', 'partner_click', 'lead'] as const;
export type EventType = (typeof EVENT_TYPES)[number];

/**
 * Best-effort counters: `ev:<day>:<type>` per day and `evs:<type>:<src>` per
 * source page. KV has no atomic increment, so concurrent hits can undercount
 * slightly — fine for a funnel dashboard, never used for billing.
 */
export async function bump(kv: KVNamespaceLike, type: EventType, src?: string): Promise<void> {
  const inc = async (key: string, ttl?: number) => {
    const n = Number((await kv.get(key)) ?? '0') + 1;
    await kv.put(key, String(n), { ...(ttl ? { expirationTtl: ttl } : {}), metadata: { count: n } });
  };
  await inc(`ev:${todayUTC()}:${type}`, 60 * 60 * 24 * 400);
  if (src) await inc(`evs:${type}:${src.slice(0, 100)}`);
}

export async function hmacHex(secret: string, body: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** POST a lead to the configured webhook. Returns the HTTP status (or 'error') for the routing log. */
export async function sendWebhook(cfg: ChannelConfig, id: string, lead: Lead): Promise<{ status: number | 'error'; detail?: string }> {
  if (!cfg.webhookUrl) return { status: 'error', detail: 'no webhook configured' };
  const body = JSON.stringify({
    event: 'lead.created',
    site: 'fixme.vip',
    id,
    zip: lead.zip,
    name: lead.name,
    contact: lead.contact,
    contactType: lead.contact.includes('@') ? 'email' : 'phone',
    issue: lead.issue,
    source: lead.source,
    sourceUrl: lead.source && lead.source !== 'direct' ? `https://fixme.vip/error/${lead.source}` : 'https://fixme.vip/quote',
    createdAt: lead.createdAt,
  });
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (cfg.webhookSecret) headers['x-fixme-signature'] = `sha256=${await hmacHex(cfg.webhookSecret, body)}`;
  try {
    const res = await fetch(cfg.webhookUrl, { method: 'POST', headers, body });
    return { status: res.status, detail: res.ok ? undefined : (await res.text()).slice(0, 200) };
  } catch (e) {
    return { status: 'error', detail: String(e).slice(0, 200) };
  }
}
