#!/usr/bin/env bun
/**
 * Daily batch generator for the semi-auto content pipeline.
 *
 * Picks up to COUNT not-yet-covered entries from content-backlog.json, generates
 * a draft HVAC error-code page for each via Anthropic, and writes them into
 * src/content/errors/. In CI this runs on a branch and the resulting Pull
 * Request is the human review gate — nothing publishes without a merge.
 *
 * Run locally / in CI:
 *   ANTHROPIC_API_KEY=sk-... COUNT=10 npx tsx scripts/generate-batch.ts
 *   npx tsx scripts/generate-batch.ts --dry-run   # list selections, no API calls
 *
 * Env: ANTHROPIC_API_KEY (required unless --dry-run), COUNT (default 10),
 *      CLAUDE_MODEL (default claude-opus-4-8).
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

interface BacklogItem {
  brand?: string;
  equipment?: string;
  code?: string;
  severity?: string;
  _comment?: string;
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ERRORS_DIR = join(root, 'src/content/errors');
const BACKLOG = join(root, 'content-backlog.json');

const COUNT = Number(process.env.COUNT ?? '10');
const DRY = process.argv.includes('--dry-run');
const apiKey = process.env.ANTHROPIC_API_KEY;
const model = process.env.CLAUDE_MODEL ?? 'claude-opus-4-8';

function slugify(brand: string, equipment: string, code: string): string {
  return `${brand}-${equipment}-${code}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

const backlog: BacklogItem[] = JSON.parse(readFileSync(BACKLOG, 'utf-8')).filter(
  (e: BacklogItem) => e.brand && e.equipment && e.code && e.severity
);
const covered = new Set(
  readdirSync(ERRORS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
);

interface PendingItem {
  brand: string;
  equipment: string;
  code: string;
  severity: string;
  slug: string;
}

const pending: PendingItem[] = [];

for (const item of backlog) {
  const slug = slugify(item.brand!, item.equipment!, item.code!);
  if (covered.has(slug)) continue;
  pending.push({ brand: item.brand!, equipment: item.equipment!, code: item.code!, severity: item.severity!, slug });
  if (pending.length >= COUNT) break;
}

if (pending.length === 0) {
  console.log('Backlog exhausted — every entry is already published. Add new entries to content-backlog.json (pull high-demand codes from GET /api/queue).');
  process.exit(0);
}

console.log(`Selected ${pending.length} of ${backlog.length} backlog entries (COUNT=${COUNT}):`);
for (const p of pending) console.log(`  - ${p.slug}  [${p.severity}]`);

if (DRY) {
  console.log('\n--dry-run: no API calls, no files written.');
  process.exit(0);
}
if (!apiKey) {
  console.error('\nANTHROPIC_API_KEY is required (unless --dry-run).');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

function buildPrompt(item: { brand: string; equipment: string; code: string; severity: string }): string {
  return `You write expert HVAC error-code pages for fixme.vip, aimed at US homeowners. Produce ONE markdown file body (frontmatter + content) and nothing else — no preamble, no code fence around the whole file.

Brand: ${item.brand} · Equipment: ${item.equipment} · Code/Problem: ${item.code} · Severity: ${item.severity} · Date: ${today}

Frontmatter schema (YAML, zod-enforced — violations break the build):
title: max 60 chars, keyword-first, e.g. "Carrier Furnace Code 13: Meaning, Causes & Fixes"
code: "${item.code}"
description: 50-160 chars mentioning causes + fixes + cost
brand: ${item.brand}
equipment: ${item.equipment}
severity: ${item.severity}
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

ACCURACY RULES: Only state what is well-documented for this brand. Where behavior varies by model/board, SAY SO explicitly rather than guessing. Never instruct bypassing safety switches, opening gas valves, handling refrigerant, or repeated resets of locked-out units. If severity is emergency (e.g. gas smell), the FIRST guidance must be to shut down, ventilate, and call the gas utility's emergency line / 911 — not DIY. Quote YAML strings containing colons.`;
}

let written = 0;
for (const item of pending) {
  const outPath = join(ERRORS_DIR, `${item.slug}.md`);
  if (existsSync(outPath)) {
    console.log(`skip (exists): ${item.slug}`);
    continue;
  }
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 5000,
      messages: [{ role: 'user', content: buildPrompt(item) }],
    }),
  });
  if (!res.ok) {
    console.error(`FAILED ${item.slug}: ${res.status} ${await res.text()}`);
    continue;
  }
  const data = (await res.json()) as { content: { type: string; text?: string }[] };
  const md = data.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
    .trim();
  if (!md) {
    console.error(`FAILED ${item.slug}: empty response`);
    continue;
  }
  writeFileSync(outPath, md + '\n');
  written++;
  console.log(`generated: ${item.slug}`);
}

console.log(`\nDone. ${written} draft(s) written to src/content/errors/.`);
console.log('Next: the build step validates them against the schema; the PR is the review gate.');
