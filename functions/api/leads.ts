// Admin read endpoint for captured leads. Auth: Authorization: Bearer <ADMIN_TOKEN>.
import { json, type Env } from './_utils';

export async function onRequestGet(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;
  if (!env.ADMIN_TOKEN) return json({ error: 'ADMIN_TOKEN is not configured on the server.' }, 503);
  const auth = request.headers.get('authorization') ?? '';
  if (auth !== `Bearer ${env.ADMIN_TOKEN}`) return json({ error: 'Unauthorized.' }, 401);

  // Lead keys are ISO-timestamped → lexicographic order == chronological.
  const SCAN_CAP = 2000;
  const HYDRATE = 200;

  const names: string[] = [];
  let cursor: string | undefined;
  let truncated = false;
  do {
    const page = await env.FIXME_KV.list({ prefix: 'lead:', limit: 1000, cursor });
    names.push(...page.keys.map((k) => k.name));
    cursor = page.list_complete ? undefined : page.cursor;
    if (names.length >= SCAN_CAP) {
      truncated = !page.list_complete;
      break;
    }
  } while (cursor);

  names.sort().reverse(); // newest first

  const items: unknown[] = [];
  for (const name of names.slice(0, HYDRATE)) {
    const value = await env.FIXME_KV.get(name);
    if (value) items.push({ key: name, ...JSON.parse(value) });
  }

  return json({ total: names.length, returned: items.length, truncated, items });
}
