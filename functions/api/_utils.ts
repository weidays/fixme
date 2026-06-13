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
