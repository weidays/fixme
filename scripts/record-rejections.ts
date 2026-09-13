#!/usr/bin/env node
/**
 * Record drafts the AI reviewer dropped, so the generator stops retrying pages
 * that fail twice. Appends to content-rejected.json:
 *   { "<slug>": { "count": 2, "last": "2026-09-14", "reasons": ["..."] } }
 * A human clears an entry (or the file) to let the generator try again.
 *
 * Usage: npx tsx scripts/record-rejections.ts review-report.json
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILE = join(root, 'content-rejected.json');
const report = JSON.parse(readFileSync(process.argv[2] ?? 'review-report.json', 'utf-8')) as {
  results: { slug: string; route: string; issues: { severity: string; text: string }[] }[];
};

type Rejected = Record<string, { count: number; last: string; reasons: string[] }>;
const rejected: Rejected = existsSync(FILE) ? (JSON.parse(readFileSync(FILE, 'utf-8')) as Rejected) : {};
const today = new Date().toISOString().slice(0, 10);
let n = 0;
for (const r of report.results) {
  if (r.route !== 'drop') continue;
  const prev = rejected[r.slug] ?? { count: 0, last: today, reasons: [] };
  const reasons = r.issues.filter((i) => i.severity === 'block').map((i) => i.text.slice(0, 200));
  rejected[r.slug] = { count: prev.count + 1, last: today, reasons: reasons.length ? reasons : prev.reasons };
  n++;
}
if (n) writeFileSync(FILE, JSON.stringify(rejected, null, 2) + '\n');
console.log(`${n} rejection(s) recorded in content-rejected.json.`);
