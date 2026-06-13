// Static search index built once at build time and fetched by /fix on demand.
// This keeps the /fix page HTML tiny no matter how many articles exist —
// the index does not get inlined into every page load.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { BRAND_LABELS, EQUIPMENT_LABELS } from '../config';

export const GET: APIRoute = async () => {
  const errors = await getCollection('errors');
  const index = errors.map((e) => ({
    slug: e.id,
    title: e.data.title,
    error: `${BRAND_LABELS[e.data.brand]} ${EQUIPMENT_LABELS[e.data.equipment]} — ${e.data.code}`,
    search:
      `${BRAND_LABELS[e.data.brand]} ${EQUIPMENT_LABELS[e.data.equipment]} ${e.data.code} ${e.data.title} ${e.data.tags.join(' ')}`.toLowerCase(),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
