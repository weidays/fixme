// CTA click beacons from page components (navigator.sendBeacon). Counts only —
// no personal data. Types are allowlisted; anything else is ignored.
import { json, bump, type Env } from './_utils';

const PUBLIC_TYPES = new Set(['call_click', 'quote_click']);

export async function onRequestPost(context: {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}): Promise<Response> {
  const text = (await context.request.text()).slice(0, 500);
  let body: { type?: unknown; src?: unknown } = {};
  try {
    body = JSON.parse(text);
  } catch {
    return json({ ok: false }, 400);
  }
  const type = String(body.type ?? '');
  if (!PUBLIC_TYPES.has(type)) return json({ ok: false }, 400);
  const src = String(body.src ?? '').replace(/[^a-z0-9-]/gi, '').slice(0, 100) || 'direct';
  context.waitUntil(bump(context.env.FIXME_KV, type as 'call_click' | 'quote_click', src).catch(() => {}));
  return json({ ok: true });
}
