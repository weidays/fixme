#!/usr/bin/env bun
/**
 * Content flywheel: generate a draft HVAC error-code page.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... bun scripts/generate-code.ts \
 *     --brand carrier --equipment furnace --code "Code 13" \
 *     [--severity pro] [--publish-dir drafts]
 *
 * Output: a draft .md in drafts/ matching the zod schema in
 * src/content.config.ts. ALWAYS hand-review before moving into
 * src/content/errors/ — quality is both the SEO moat and what lead networks
 * audit. Thin pages kill the site twice.
 */

import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

const BRANDS = [
  'carrier', 'goodman', 'trane', 'lennox', 'york',
  'rheem', 'bryant', 'amana', 'honeywell', 'american-standard',
];
const EQUIPMENT = ['furnace', 'air-conditioner', 'heat-pump', 'mini-split', 'thermostat'];
const SEVERITIES = ['diy', 'pro', 'emergency'];

function arg(name: string, fallback?: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

const brand = arg('brand');
const equipment = arg('equipment');
const code = arg('code');
const severity = arg('severity', 'pro')!;

if (
  !brand || !BRANDS.includes(brand) ||
  !equipment || !EQUIPMENT.includes(equipment) ||
  !code || !SEVERITIES.includes(severity)
) {
  console.error(
    'Usage: bun scripts/generate-code.ts --brand <brand> --equipment <type> --code "<code>" [--severity diy|pro|emergency]'
  );
  process.exit(1);
}

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('Set ANTHROPIC_API_KEY in your environment first.');
  process.exit(1);
}

const slug = `${brand}-${equipment}-${code}`
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 80);

const today = new Date().toISOString().slice(0, 10);

const prompt = `You write expert HVAC error-code pages for fixme.vip, aimed at US homeowners. Produce ONE markdown file body (frontmatter + content) and nothing else — no preamble, no code fence around the whole file.

Brand: ${brand} · Equipment: ${equipment} · Code: ${code} · Severity: ${severity} · Date: ${today}

Frontmatter schema (YAML, zod-enforced):
title: max 60 chars, keyword-first, e.g. "Carrier Furnace Code 13: Meaning, Causes & Fixes"
code: "${code}"
description: 50-160 chars mentioning causes + fixes + cost
brand: ${brand}
equipment: ${equipment}
severity: ${severity}
costRange: honest broad US range, e.g. "$0 DIY – $450 if the inducer needs replacement"
appliesTo: >=10 chars — which model series/boards this applies to, and what varies
tags: array of >=1 lowercase kebab tags
parts: array of {name, search} — parts a DIY fix needs (search = good Amazon query); [] if none
datePublished: ${today}
dateModified: ${today}
reviewedBy: ""
faq: >=3 {q, a}, answers >=40 chars

Body structure, exactly these sections:
## What this code means
## Common causes, ranked by probability   (numbered, most likely first)
## Safe checks before you call anyone     (ONLY genuinely safe: filter, thermostat, breaker, batteries, visible vents, condensate)
## How a technician will diagnose it      (so readers can sanity-check a quote)
## Symptom, cause and what to do          (markdown table: Symptom | Likely cause | DIY action | Technician job)
## Repair costs                           (honest US ranges per component)
## Related codes

ACCURACY RULES: Only state what is well-documented for this brand. Where behavior varies by model/board, SAY SO explicitly rather than guessing. Never instruct bypassing safety switches, opening gas valves, or repeated resets of locked-out units. If severity is emergency, the page must tell readers to shut down and call a pro early.`;

const res = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: process.env.CLAUDE_MODEL ?? 'claude-opus-4-8',
    max_tokens: 5000,
    messages: [{ role: 'user', content: prompt }],
  }),
});

if (!res.ok) {
  console.error(`Anthropic API error ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const data = (await res.json()) as { content: { type: string; text?: string }[] };
const markdown = data.content
  .filter((b) => b.type === 'text')
  .map((b) => b.text)
  .join('')
  .trim();

const root = join(dirname(new URL(import.meta.url).pathname), '..');
const outDir = join(root, arg('publish-dir', 'drafts')!);
const outPath = join(outDir, `${slug}.md`);

if (existsSync(outPath) || existsSync(join(root, 'src/content/errors', `${slug}.md`))) {
  console.error(`Refusing to overwrite existing page: ${slug}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, markdown + '\n');

console.log(`Draft written: ${outPath}`);
console.log('Review by hand (verify against the manual/installer docs!), then move into src/content/errors/ and run npm run build.');
