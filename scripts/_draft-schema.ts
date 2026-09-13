// Shared frontmatter validation for generated drafts. Mirrors the zod schema in
// src/content.config.ts so a malformed AI response is caught before the build.
import yaml from 'js-yaml';

export const BRANDS = ['carrier', 'goodman', 'trane', 'lennox', 'york', 'rheem', 'bryant', 'amana', 'honeywell', 'american-standard'];
export const EQUIPMENT = ['furnace', 'air-conditioner', 'heat-pump', 'mini-split', 'thermostat'];
export const SEVERITIES = ['diy', 'pro', 'emergency'];

/** Returns an error reason, or null if the draft is valid. */
export function validateDraft(md: string): string | null {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return 'no frontmatter block';
  let fm: unknown;
  try {
    fm = yaml.load(m[1]);
  } catch (e) {
    return 'YAML parse error: ' + String((e as Error).message).split('\n')[0];
  }
  if (!fm || typeof fm !== 'object') return 'frontmatter is not an object';
  const f = fm as Record<string, unknown>;
  if (typeof f.title !== 'string' || f.title.length > 60) return 'title missing or >60 chars';
  if (typeof f.description !== 'string' || f.description.length < 50 || f.description.length > 160) return 'description not 50-160 chars';
  if (typeof f.code !== 'string' || f.code.length < 2) return 'code missing';
  if (!BRANDS.includes(f.brand as string)) return `brand invalid: ${String(f.brand)}`;
  if (!EQUIPMENT.includes(f.equipment as string)) return `equipment invalid: ${String(f.equipment)}`;
  if (!SEVERITIES.includes(f.severity as string)) return `severity invalid: ${String(f.severity)}`;
  if (typeof f.costRange !== 'string' || f.costRange.length < 3) return 'costRange missing';
  if (typeof f.appliesTo !== 'string' || f.appliesTo.length < 10) return 'appliesTo too short';
  if (!Array.isArray(f.tags) || f.tags.length < 1) return 'tags missing';
  if (!Array.isArray(f.faq) || f.faq.length < 3) return 'faq needs >=3 items';
  for (const item of f.faq) {
    const q = item as { q?: unknown; a?: unknown };
    if (typeof q?.q !== 'string' || typeof q?.a !== 'string' || q.a.length < 40) return 'faq item invalid (answer >=40 chars)';
  }
  return null;
}
