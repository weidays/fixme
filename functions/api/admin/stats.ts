// Admin: funnel numbers for the dashboard.
//   daily  — last 30 days of quote_click / call_click / partner_click / lead counts
//   leads  — totals by status and by source page
//   topSources — per-page CTA clicks and leads (all time)
import { json, requireAdmin, EVENT_TYPES, type Env } from '../_utils';

export async function onRequestGet(context: { request: Request; env: Env }): Promise<Response> {
  const denied = requireAdmin(context.request, context.env);
  if (denied) return denied;
  const kv = context.env.FIXME_KV;

  const days: string[] = [];
  for (let i = 29; i >= 0; i--) days.push(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
  const daily: Record<string, Record<string, number>> = {};
  for (const d of days) daily[d] = {};
  // One list per day-prefix would be 30 calls; list the whole ev: space once instead.
  let cursor: string | undefined;
  do {
    const page = await kv.list({ prefix: 'ev:', limit: 1000, cursor });
    for (const k of page.keys) {
      const [, day, type] = k.name.split(':');
      if (daily[day]) daily[day][type] = Number((k.metadata as { count?: number })?.count ?? 0);
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  const bySource: Record<string, Record<string, number>> = {};
  cursor = undefined;
  do {
    const page = await kv.list({ prefix: 'evs:', limit: 1000, cursor });
    for (const k of page.keys) {
      const [, type, src] = k.name.split(':');
      (bySource[src] ??= {})[type] = Number((k.metadata as { count?: number })?.count ?? 0);
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  const topSources = Object.entries(bySource)
    .map(([src, c]) => ({ src, ...c, total: EVENT_TYPES.reduce((n, t) => n + (c[t] ?? 0), 0) }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 50);

  const byStatus: Record<string, number> = {};
  cursor = undefined;
  let leads = 0;
  do {
    const page = await kv.list({ prefix: 'lead:', limit: 1000, cursor });
    for (const k of page.keys) {
      const s = String((k.metadata as { status?: string })?.status ?? 'new');
      byStatus[s] = (byStatus[s] ?? 0) + 1;
      leads++;
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  return json({ days, daily, leads: { total: leads, byStatus }, topSources });
}
