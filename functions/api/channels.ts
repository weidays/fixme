// Public, cacheable view of the lead channels — what page CTAs need to render.
// Never exposes webhook URLs, secrets, or the partner template.
import { json, getChannels, type Env } from './_utils';

export async function onRequestGet(context: { env: Env }): Promise<Response> {
  const cfg = await getChannels(context.env);
  const res = json({
    phone: cfg.phone || null,
    partner: cfg.partnerMode !== 'off' && cfg.partnerUrl ? { mode: cfg.partnerMode, name: cfg.partnerName || null } : null,
  });
  res.headers.set('cache-control', 'public, max-age=60');
  return res;
}
