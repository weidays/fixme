#!/usr/bin/env node
/**
 * Queue → backlog sync: turn real user demand into next drafts.
 *
 * Reads the topic queue (`GET /api/queue` — every error text a visitor typed
 * into /fix that no published page matched), parses each entry into
 * {brand, equipment, code, severity}, and inserts the new ones at the TOP of
 * content-backlog.json so the daily generator does them first.
 *
 * Usage:
 *   ADMIN_TOKEN=... npx tsx scripts/queue-to-backlog.ts              # sync
 *   ADMIN_TOKEN=... npx tsx scripts/queue-to-backlog.ts --dry-run    # show, don't write
 *   npx tsx scripts/queue-to-backlog.ts --from queue.json --dry-run  # offline, from a saved response
 *
 * Options:
 *   --site <url>       API origin (default https://fixme.vip, or SITE_URL env)
 *   --min-count <n>    only take entries seen at least n times (default 1)
 *   --from <file>      read a saved /api/queue JSON instead of fetching
 *   --dry-run          print the plan, leave the backlog untouched
 *
 * Entries whose brand or equipment can't be recognised are NOT guessed — they
 * are printed under "needs a human" so you can add them by hand (or ignore
 * the junk). Entries the 404 page logs ("404 /old/path") are split out into a
 * ranked "legacy 404 paths" list with ready-to-paste public/_redirects lines. Nothing here publishes anything: the backlog only feeds the
 * draft generator, and the PR is still the review gate.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Mirrors src/config.ts (kept literal so the script runs without Astro).
const BRANDS = ['carrier', 'goodman', 'trane', 'lennox', 'york', 'rheem', 'bryant', 'amana', 'honeywell', 'american-standard'] as const;
type Brand = (typeof BRANDS)[number];
type Equipment = 'furnace' | 'air-conditioner' | 'heat-pump' | 'mini-split' | 'thermostat';
type Severity = 'diy' | 'pro' | 'emergency';

interface QueueEntry {
  key: string;
  error: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
}
interface QueueResponse {
  total: number;
  returned: number;
  truncated: boolean;
  items: QueueEntry[];
}
interface BacklogItem {
  brand?: string;
  equipment?: string;
  code?: string;
  severity?: string;
}
interface Parsed {
  brand: Brand;
  equipment: Equipment;
  code: string;
  severity: Severity;
  slug: string;
  count: number;
  lastSeen: string;
  raw: string;
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ERRORS_DIR = join(root, 'src/content/errors');
const BACKLOG = join(root, 'content-backlog.json');

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
const DRY = process.argv.includes('--dry-run');
const FROM = arg('from');
const SITE = (arg('site') ?? process.env.SITE_URL ?? 'https://fixme.vip').replace(/\/+$/, '');
const MIN_COUNT = Number(arg('min-count') ?? '1');

// Same slug rule as generate-batch.ts — dedupe must agree with the generator.
export function slugify(brand: string, equipment: string, code: string): string {
  return `${brand}-${equipment}-${code}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

// ---------------------------------------------------------------- parsing

const BRAND_PATTERNS: [Brand, RegExp][] = [
  // Longer / multi-word names first so "american standard" wins over nothing,
  // and "carrier" doesn't false-match inside other words.
  ['american-standard', /\bamerican[\s-]*standard\b/i],
  ['carrier', /\bcarrier\b/i],
  ['goodman', /\bgoodman\b/i],
  ['trane', /\btrane\b/i],
  ['lennox', /\blennox\b/i],
  ['york', /\byork\b/i],
  ['rheem', /\b(rheem|ruud)\b/i],
  ['bryant', /\bbryant\b/i],
  ['amana', /\bamana\b/i],
  ['honeywell', /\bhoneywell\b/i],
];

const EQUIPMENT_PATTERNS: [Equipment, RegExp][] = [
  ['mini-split', /\b(mini[\s-]*split|ductless)\b/i],
  ['heat-pump', /\bheat[\s-]*pump\b/i],
  ['thermostat', /\b(thermostat|t[\s-]?stat)\b/i],
  ['furnace', /\b(furnace|gas heater|heater)\b/i],
  ['air-conditioner', /\b(air[\s-]*condition(er|ing)?|a\/?c|ac unit|condenser|central air)\b/i],
];

/** Extract the searchable "code" the way a homeowner would type it. */
function extractCode(text: string): string | null {
  const t = text.replace(/\s+/g, ' ').trim();
  let m: RegExpMatchArray | null;

  // "code 33", "error code 13", "fault code E5", "err 31"
  if ((m = t.match(/\b(?:error|fault|err)?\s*code\s*:?\s*#?([a-z]{0,2}[\s-]?\d{1,4}[a-z]?)\b/i))) {
    return `Code ${m[1].replace(/[\s-]/g, '').toUpperCase()}`;
  }
  // "error 33", "err E5"
  if ((m = t.match(/\b(?:error|err)\s*:?\s*#?([a-z]{0,2}[\s-]?\d{1,4}[a-z]?)\b/i))) {
    return `Code ${m[1].replace(/[\s-]/g, '').toUpperCase()}`;
  }
  // "3 flashes", "blinking 4 times", "4 red flashes", "flashing 2 blinks"
  if ((m = t.match(/\b(\d{1,2})\s*(?:red|amber|yellow|green|orange)?\s*(?:flash(?:es|ing)?|blink(?:s|ing)?)\b/i))) {
    return `${m[1]} flashes`;
  }
  if ((m = t.match(/\b(?:flash(?:es|ing)?|blink(?:s|ing)?)\s*(\d{1,2})\s*(?:times|x)?\b/i))) {
    return `${m[1]} flashes`;
  }
  // Bare alphanumeric codes: E5, F03, b0, EE, P1 (letter + 1-3 digits, or two letters)
  if ((m = t.match(/(?:^|\s)([a-z]{1,2}\d{1,3})(?=\s|$|[,.;])/i))) {
    return `Code ${m[1].toUpperCase()}`;
  }
  return null;
}

const SYMPTOMS: [RegExp, string][] = [
  [/\b(smell(s|ing)? (of |like )?gas|gas (smell|leak|odou?r)|rotten egg)/i, 'Gas smell'],
  [/\b(carbon monoxide|\bco\b.*(alarm|detector)|(alarm|detector).*\bco\b)/i, 'CO alarm going off'],
  [/\bnot (cooling|blowing cold|getting cold)|blow(s|ing)? (warm|hot) air\b/i, 'Not cooling'],
  [/\bblow(s|ing)? cold air|no heat|not heating|won'?t heat\b/i, 'Not heating'],
  [/\bwon'?t (turn|come|kick|switch) on|not turning on|no power|dead\b/i, "Won't turn on"],
  [/\bwon'?t ignite|no ignition|not igniting|ignit(er|or|ion) (fail|issue|problem)/i, "Won't ignite"],
  [/\bshort[\s-]*cycl/i, 'Short cycling'],
  [/\bkeeps? (shutting|turning) off|shuts off\b/i, 'Keeps shutting off'],
  [/\bnot defrost|defrost (issue|problem|cycle)\b/i, 'Frozen and not defrosting'],
  [/\b(frozen|ice(d)? (up|over)|freezing up)\b/i, 'Frozen coil'],
  [/\block(ed)?[\s-]*out\b/i, 'Lockout'],
  [/\b(fan|blower) (not|won'?t|isn'?t) (spin|run|work|turn)/i, 'Fan not spinning'],
  [/\bleak(s|ing)? water|water (leak|on the floor|pooling)|condensate\b/i, 'Leaking water'],
  [/\b(loud|noise|noisy|buzzing|rattling|squeal|grinding|banging)\b/i, 'Loud noise'],
  [/\bflashing light|blinking light|light (is )?(flashing|blinking)\b/i, 'Flashing light'],
  [/\bwi-?fi|won'?t connect|not connecting|offline\b/i, 'Wi-Fi not connecting'],
  [/\b(aux|auxiliary|emergency) heat\b/i, 'Auxiliary heat on constantly'],
];

function extractSymptom(text: string): string | null {
  for (const [re, label] of SYMPTOMS) if (re.test(text)) return label;
  return null;
}

function classifySeverity(text: string, equipment: Equipment, code: string): Severity {
  if (/gas smell|co alarm/i.test(code)) return 'emergency';
  if (equipment === 'thermostat') return 'diy';
  if (/\b(filter|batter(y|ies)|wi-?fi)\b/i.test(text)) return 'diy';
  return 'pro';
}

export function parseEntry(entry: QueueEntry): Parsed | { raw: string; count: number; why: string } {
  const text = entry.error;
  const brand = BRAND_PATTERNS.find(([, re]) => re.test(text))?.[0];
  const equipment = EQUIPMENT_PATTERNS.find(([, re]) => re.test(text))?.[0];
  if (!brand) return { raw: text, count: entry.count, why: 'no known brand' };
  if (!equipment) return { raw: text, count: entry.count, why: 'no equipment type' };
  const code = extractCode(text) ?? extractSymptom(text);
  if (!code) return { raw: text, count: entry.count, why: 'no code or recognisable symptom' };
  const severity = classifySeverity(text, equipment, code);
  return {
    brand,
    equipment,
    code,
    severity,
    slug: slugify(brand, equipment, code),
    count: entry.count,
    lastSeen: entry.lastSeen,
    raw: text,
  };
}

// ---------------------------------------------------------------- io

async function loadQueue(): Promise<QueueResponse> {
  if (FROM) return JSON.parse(readFileSync(FROM, 'utf-8')) as QueueResponse;
  const token = process.env.ADMIN_TOKEN;
  if (!token) {
    console.error('ADMIN_TOKEN is required to read /api/queue (or pass --from <saved.json>).');
    process.exit(1);
  }
  const res = await fetch(`${SITE}/api/queue`, { headers: { authorization: `Bearer ${token}` } });
  if (!res.ok) {
    console.error(`GET ${SITE}/api/queue → ${res.status}: ${(await res.text()).slice(0, 200)}`);
    process.exit(1);
  }
  return (await res.json()) as QueueResponse;
}

/**
 * Insert lines at the top of the backlog array without re-serialising the
 * file: the hand-grouped, one-object-per-line layout stays exactly as it was.
 * New entries go right after the leading `_comment` object (or after `[`).
 */
function insertAtTop(source: string, lines: string[]): string {
  const rows = source.split('\n');
  let at = rows.findIndex((l) => l.includes('"_comment"'));
  if (at < 0) at = rows.findIndex((l) => l.trim().startsWith('['));
  if (at < 0) throw new Error('content-backlog.json: could not find the array start');
  // If the `_comment` object ever spans several lines, walk to its closing brace.
  while (!rows[at].trimEnd().endsWith('},') && !rows[at].trimEnd().endsWith('[')) at++;
  rows.splice(at + 1, 0, '', ...lines);
  return rows.join('\n');
}

function formatRow(p: Parsed, syncedOn: string): string {
  const obj = {
    brand: p.brand,
    equipment: p.equipment,
    code: p.code,
    severity: p.severity,
    _source: 'queue',
    _count: p.count,
    _synced: syncedOn,
  };
  const inner = Object.entries(obj)
    .map(([k, v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)}`)
    .join(', ');
  return `  { ${inner} },`;
}

async function main(): Promise<void> {
  const queue = await loadQueue();
  console.log(`Queue: ${queue.total} entries (${queue.returned} returned${queue.truncated ? ', truncated' : ''}).`);

  const backlogSource = readFileSync(BACKLOG, 'utf-8');
  const backlog: BacklogItem[] = JSON.parse(backlogSource);
  const known = new Set<string>();
  for (const b of backlog) if (b.brand && b.equipment && b.code) known.add(slugify(b.brand, b.equipment, b.code));
  for (const f of readdirSync(ERRORS_DIR)) if (f.endsWith('.md')) known.add(f.replace(/\.md$/, ''));

  const fresh = new Map<string, Parsed>();
  const alreadyCovered: Parsed[] = [];
  const needsHuman: { raw: string; count: number; why: string }[] = [];
  const dead: { path: string; count: number }[] = [];
  let belowThreshold = 0;

  for (const entry of queue.items) {
    if (entry.count < MIN_COUNT) {
      belowThreshold++;
      continue;
    }
    const m404 = entry.error.match(/^404 (\/\S*)$/);
    if (m404) {
      dead.push({ path: m404[1], count: entry.count });
      continue;
    }
    const r = parseEntry(entry);
    if ('why' in r) {
      needsHuman.push(r);
      continue;
    }
    if (known.has(r.slug)) {
      alreadyCovered.push(r);
      continue;
    }
    // Several raw texts can collapse to one slug: keep the summed demand.
    const prev = fresh.get(r.slug);
    if (prev) prev.count += r.count;
    else fresh.set(r.slug, r);
  }

  const additions = [...fresh.values()].sort((a, b) => b.count - a.count);

  console.log(`\nNew backlog entries (${additions.length}), highest demand first:`);
  for (const p of additions) console.log(`  + ${p.slug}  [${p.severity}] ×${p.count}   ← "${p.raw.slice(0, 60)}"`);
  if (alreadyCovered.length) {
    console.log(`\nAlready published or queued (${alreadyCovered.length}) — demand signal only:`);
    for (const p of alreadyCovered) console.log(`  = ${p.slug} ×${p.count}`);
  }
  if (needsHuman.length) {
    console.log(`\nNeeds a human (${needsHuman.length}) — add by hand to content-backlog.json or ignore:`);
    for (const n of needsHuman.sort((a, b) => b.count - a.count))
      console.log(`  ? ×${n.count} (${n.why}): "${n.raw.replace(/\s+/g, ' ').slice(0, 90)}"`);
  }
  if (dead.length) {
    dead.sort((a, b) => b.count - a.count);
    console.log(`\nLegacy 404 paths (${dead.length}) — real visitors hitting dead URLs. Paste the ones that`);
    console.log('look like old content into public/_redirects (pointed at the closest live page):');
    for (const d of dead) {
      const words = d.path.replace(/\.(html?|php|aspx?)$/, '').split(/[^a-zA-Z0-9]+/).filter((w) => w.length > 1);
      const target = words.length ? `/fix?q=${encodeURIComponent(words.join(' '))}` : '/fix';
      console.log(`  ${d.path.padEnd(48)} ${target.padEnd(40)} 301   # ×${d.count}`);
    }
  }
  if (belowThreshold) console.log(`\n${belowThreshold} entr${belowThreshold === 1 ? 'y' : 'ies'} below --min-count ${MIN_COUNT} skipped.`);

  if (additions.length === 0) {
    console.log('\nNothing to add.');
    return;
  }
  if (DRY) {
    console.log('\n--dry-run: content-backlog.json not modified.');
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const next = insertAtTop(backlogSource, additions.map((p) => formatRow(p, today)));
  JSON.parse(next); // never write a backlog the generator can't read
  writeFileSync(BACKLOG, next);
  console.log(`\nWrote ${additions.length} entr${additions.length === 1 ? 'y' : 'ies'} to the top of content-backlog.json.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
