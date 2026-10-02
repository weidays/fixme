// Outbound partner redirect. Two entry points:
//   /api/go?l=<lead id>  — after our form ('handoff' mode): marks the lead handed_off
//   /api/go?src=<slug>   — straight from a page CTA ('direct' mode)
// The destination is always the admin-configured partner template, never a
// URL from the request, so this cannot be used as an open redirect.
import { getChannels, partnerLink, leadMeta, bump, type Env, type Lead } from './_utils';

export async function onRequestGet(context: {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}): Promise<Response> {
  const { request, env } = context;
  const url = new URL(request.url);
  const cfg = await getChannels(env);
  if (cfg.partnerMode === 'off' || !cfg.partnerUrl) return Response.redirect(new URL('/quote', url).toString(), 302);

  const leadId = url.searchParams.get('l') ?? '';
  const src = (url.searchParams.get('src') ?? '').replace(/[^a-z0-9-]/gi, '').slice(0, 100) || 'direct';
  const kv = env.FIXME_KV;

  if (leadId.startsWith('lead:')) {
    const raw = await kv.get(leadId);
    if (raw) {
      const lead = JSON.parse(raw) as Lead;
      const dest = partnerLink(cfg, { zip: lead.zip, subid: leadId.slice(5), src: lead.source });
      context.waitUntil(
        (async () => {
          if (!lead.status || lead.status === 'new') lead.status = 'handed_off';
          lead.routing = { ...lead.routing, partner: { clickedAt: new Date().toISOString(), name: cfg.partnerName } };
          lead.updatedAt = new Date().toISOString();
          await kv.put(leadId, JSON.stringify(lead), { metadata: leadMeta(lead) });
          await bump(kv, 'partner_click', lead.source);
        })().catch(() => {})
      );
      return Response.redirect(dest, 302);
    }
  }

  context.waitUntil(bump(kv, 'partner_click', src).catch(() => {}));
  return Response.redirect(partnerLink(cfg, { subid: src, src }), 302);
}
