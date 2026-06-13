// Layer 3 (read side) — the topic queue, for scripts/queue-to-draft.ts.
// Auth: Authorization: Bearer <ADMIN_TOKEN>.
import { json, type Env, type QueueEntry } from './_utils';

export async function onRequestGet(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;
  if (!env.ADMIN_TOKEN) {
    return json({ error: 'ADMIN_TOKEN is not configured on the server.' }, 503);
  }
  const auth = request.headers.get('authorization') ?? '';
  if (auth !== `Bearer ${env.ADMIN_TOKEN}`) {
    return json({ error: 'Unauthorized.' }, 401);
  }

  // Two-pass to stay under the Workers subrequest limit and avoid a
  // get-per-key DoS: (1) list keys with their `count` metadata, sort by demand,
  // (2) fetch full entries for only the top N. SCAN_CAP bounds the listing so a
  // KV flood can't make this endpoint time out.
  const SCAN_CAP = 5000;
  const HYDRATE = 200;

  const listed: { name: string; count: number }[] = [];
  let cursor: string | undefined;
  let truncated = false;
  do {
    const page = await env.FIXME_KV.list({ prefix: 'q:', limit: 1000, cursor });
    for (const k of page.keys) {
      listed.push({ name: k.name, count: Number((k.metadata as { count?: number })?.count ?? 0) });
    }
    cursor = page.list_complete ? undefined : page.cursor;
    if (listed.length >= SCAN_CAP) {
      truncated = !page.list_complete;
      break;
    }
  } while (cursor);

  listed.sort((a, b) => b.count - a.count);

  const items: ({ key: string } & QueueEntry)[] = [];
  for (const k of listed.slice(0, HYDRATE)) {
    const value = await env.FIXME_KV.get(k.name);
    if (value) items.push({ key: k.name, ...(JSON.parse(value) as QueueEntry) });
  }

  return json({ total: listed.length, returned: items.length, truncated, items });
}
