// Shared helpers for grouping and ordering error pages, used by the code-chart
// hub pages and the related-codes block on each error page.
import type { CollectionEntry } from 'astro:content';
import { BRAND_LABELS, EQUIPMENT_LABELS } from '../config';

type Entry = CollectionEntry<'errors'>;

/** Brands that share control boards, so the same code means the same thing. */
export const SISTER_BRANDS: Record<string, string> = {
  carrier: 'bryant',
  bryant: 'carrier',
  goodman: 'amana',
  amana: 'goodman',
  trane: 'american-standard',
  'american-standard': 'trane',
};

/** Numeric codes first in natural order (Code 12 < Code 31 < 2 flashes < 10 flashes), then symptoms A–Z. */
export function codeOrder(a: Entry, b: Entry): number {
  const num = (e: Entry) => {
    const m = e.data.code.match(/\d+/);
    return m ? Number(m[0]) : Number.POSITIVE_INFINITY;
  };
  const na = num(a);
  const nb = num(b);
  if (na !== nb) return na - nb;
  return a.data.code.localeCompare(b.data.code);
}

export function hubPath(brand: string, equipment: string): string {
  return `/brand/${brand}/${equipment}/`;
}

export function hubLabel(brand: string, equipment: string): string {
  return `${BRAND_LABELS[brand as keyof typeof BRAND_LABELS]} ${EQUIPMENT_LABELS[equipment as keyof typeof EQUIPMENT_LABELS]}`;
}

/** Group pages by brand + equipment. A hub is only worth a page with 2+ codes. */
export function hubGroups(all: Entry[]): Map<string, Entry[]> {
  const groups = new Map<string, Entry[]>();
  for (const e of all) {
    const key = `${e.data.brand}/${e.data.equipment}`;
    (groups.get(key) ?? groups.set(key, []).get(key)!).push(e);
  }
  for (const [key, list] of groups) {
    if (list.length < 2) groups.delete(key);
    else list.sort(codeOrder);
  }
  return groups;
}

/**
 * Related pages for one error page: the neighbouring codes on the same
 * brand + equipment (wrapping around the sorted list), then the same code on
 * the sister brand that shares its control boards.
 */
export function relatedFor(entry: Entry, all: Entry[], limit = 8): { siblings: Entry[]; sister: Entry | null } {
  const d = entry.data;
  const same = all.filter((e) => e.data.brand === d.brand && e.data.equipment === d.equipment).sort(codeOrder);
  const i = same.findIndex((e) => e.id === entry.id);
  const siblings: Entry[] = [];
  for (let step = 1; siblings.length < limit && step < same.length; step++) {
    // alternate after / before so the list is centred on this code
    for (const j of [i + step, i - step]) {
      const k = (j + same.length) % same.length;
      const e = same[k];
      if (e && e.id !== entry.id && !siblings.includes(e) && siblings.length < limit) siblings.push(e);
    }
  }
  siblings.sort(codeOrder);
  const sisterBrand = SISTER_BRANDS[d.brand];
  const sister = sisterBrand
    ? all.find((e) => e.data.brand === sisterBrand && e.data.equipment === d.equipment && e.data.code.toLowerCase() === d.code.toLowerCase()) ?? null
    : null;
  return { siblings, sister };
}
