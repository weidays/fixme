#!/usr/bin/env node
/**
 * AI second-pass review for generated draft pages ("the critic").
 *
 * The human review gate stalled at 0 pages published in 3 months, so this
 * script applies the README quality checklist to every draft before it goes
 * anywhere, and writes a machine-readable report the workflow uses to route
 * each page:
 *
 *   pass + severity diy/pro   → auto-published to main
 *   pass + severity emergency → human review PR (gas / CO pages always get a human)
 *   fail                      → dropped with reasons (regenerated another day)
 *
 * Usage:
 *   ANTHROPIC_API_KEY=... npx tsx scripts/review-draft.ts --out review-report.json src/content/errors/a.md [b.md ...]
 *   npx tsx scripts/review-draft.ts --mock pass --out report.json a.md    # no API call (tests)
 *
 * Env: ANTHROPIC_API_KEY, REVIEW_MODEL (default claude-opus-5).
 * Exit code is 0 even when drafts fail review — the report carries verdicts.
 * Non-zero only for configuration or API errors.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import { z } from 'zod';
import yaml from 'js-yaml';

const Verdict = z.object({
  verdict: z.enum(['pass', 'fail']),
  code_exists_for_brand: z.enum(['yes', 'unsure', 'no']),
  issues: z.array(
    z.object({
      severity: z.enum(['block', 'minor']),
      section: z.string(),
      text: z.string(),
    })
  ),
  summary: z.string(),
});
type VerdictT = z.infer<typeof Verdict>;

export interface ReviewResult {
  file: string;
  slug: string;
  severity: string; // page severity from frontmatter
  verdict: 'pass' | 'fail';
  route: 'publish' | 'review' | 'drop';
  code_exists_for_brand: string;
  issues: { severity: string; section: string; text: string }[];
  summary: string;
}

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
const OUT = arg('out') ?? 'review-report.json';
const MOCK = arg('mock'); // 'pass' | 'fail' — test hook, never set in CI
const files = process.argv.slice(2).filter((a, i, all) => !a.startsWith('--') && all[i - 1] !== '--out' && all[i - 1] !== '--mock');
const model = process.env.REVIEW_MODEL ?? 'claude-opus-5';

const SYSTEM = `You are the senior technical editor for fixme.vip, a US HVAC error-code knowledge base for homeowners. Pages are monetized through repair-lead networks that audit content quality, and ranked by Google, which penalizes thin or fabricated AI content. A page that misleads a homeowner about a gas appliance can hurt someone. Review strictly. When in doubt about a factual claim, FAIL the page and say why.

Apply this checklist. Any failed item is a "block" issue and fails the page:

1. CODE ACCURACY — Does this code/symptom actually exist for this brand and equipment, with the meaning the page gives it? Compare against manufacturer documentation as you know it (Carrier/Bryant LED status codes, Goodman/Amana flash codes, Lennox E-codes, Trane/American Standard flash codes, York/Rheem/Ruud codes, Honeywell thermostat messages). Set code_exists_for_brand to "no" and fail if the page invents a code or assigns a wrong meaning. If the manufacturer meaning varies by control board, the page must say so rather than guess.
2. NO FABRICATED SPECIFICS — No invented part numbers, model-specific voltages, tolerances, wire colors, or board revisions unless well documented. Vague-but-honest beats precise-but-invented.
3. APPLIES-TO HONESTY — The appliesTo frontmatter and body must state which model series / boards it covers and what varies.
4. SAFETY BOUNDARY — Never: bypassing or jumping limit, rollout, or pressure switches; opening or adjusting gas valves; working inside the burner compartment; handling refrigerant; repeatedly resetting a locked-out unit; DIY on flame rollout or gas smell. "Safe checks" must be genuinely safe (thermostat, filter, breaker, batteries, visible vents, condensate line, exterior panels only).
5. EMERGENCY HANDLING — If the page concerns gas smell, CO, flame rollout, or burning odors, the FIRST guidance must be shut down / leave / call the gas utility or 911, and it must not encourage DIY.
6. COST REALISM — US price ranges must be plausible for 2026 (e.g. flame sensor cleaning $80–250, igniter $150–400, inducer motor $400–1,200, control board $400–1,200, blower motor $450–1,800, compressor $1,500–3,500+). Flag absurdly low or high figures.
7. CAUSE RANKING — Causes ordered most-likely-first; the ordering must be defensible for this code.
8. NO FAKE CREDENTIALS — No claims of "reviewed by a licensed technician", "EPA-certified author", or similar. The byline is editorial only.
9. NOT THIN — The page must actually help: specific to this brand/code, not generic HVAC filler that would read the same on any code page.

Minor issues (style, small redundancies, weak FAQ answers) do not fail a page; list them as "minor".`;

function frontmatter(md: string): Record<string, unknown> {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  try {
    return (yaml.load(m[1]) as Record<string, unknown>) ?? {};
  } catch {
    return {};
  }
}

function route(pageSeverity: string, v: VerdictT): ReviewResult['route'] {
  if (v.verdict === 'fail') return 'drop';
  if (pageSeverity === 'emergency') return 'review';
  return 'publish';
}

async function reviewOne(client: Anthropic | null, file: string): Promise<ReviewResult> {
  const md = readFileSync(file, 'utf-8');
  const fm = frontmatter(md);
  const slug = basename(file).replace(/\.md$/, '');
  const pageSeverity = String(fm.severity ?? 'pro');

  let v: VerdictT;
  if (MOCK) {
    v = {
      verdict: MOCK === 'fail' ? 'fail' : 'pass',
      code_exists_for_brand: 'yes',
      issues: MOCK === 'fail' ? [{ severity: 'block', section: 'mock', text: 'mock failure' }] : [],
      summary: `mock ${MOCK}`,
    };
  } else {
    const response = await client!.messages.parse({
      model,
      max_tokens: 16000,
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: [
        {
          role: 'user',
          content: `Review this draft page. Brand: ${String(fm.brand)} · Equipment: ${String(fm.equipment)} · Code: ${String(fm.code)} · Declared severity: ${pageSeverity}\n\n<draft>\n${md}\n</draft>`,
        },
      ],
      output_config: { format: zodOutputFormat(Verdict) },
    });
    if (response.stop_reason === 'refusal' || !response.parsed_output) {
      v = {
        verdict: 'fail',
        code_exists_for_brand: 'unsure',
        issues: [{ severity: 'block', section: 'review', text: `Reviewer returned no verdict (stop_reason=${response.stop_reason}).` }],
        summary: 'No verdict — treated as fail so nothing unreviewed is published.',
      };
    } else {
      v = response.parsed_output;
      // Belt and braces: a "pass" with a block issue, or a code the reviewer
      // believes doesn't exist, is a fail regardless of the top-level verdict.
      if (v.issues.some((i) => i.severity === 'block') || v.code_exists_for_brand === 'no') v.verdict = 'fail';
    }
  }

  return {
    file,
    slug,
    severity: pageSeverity,
    verdict: v.verdict,
    route: route(pageSeverity, v),
    code_exists_for_brand: v.code_exists_for_brand,
    issues: v.issues,
    summary: v.summary,
  };
}

async function main(): Promise<void> {
  if (files.length === 0) {
    writeFileSync(OUT, JSON.stringify({ model, results: [] }, null, 2) + '\n');
    console.log('No drafts to review.');
    return;
  }
  let client: Anthropic | null = null;
  if (!MOCK) {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY is required (or --mock pass|fail for tests).');
      process.exit(1);
    }
    client = new Anthropic();
  }

  const results: ReviewResult[] = [];
  for (const file of files) {
    try {
      const r = await reviewOne(client, file);
      results.push(r);
      const flag = r.route === 'publish' ? '✅ publish' : r.route === 'review' ? '👀 review' : '❌ drop';
      console.log(`${flag}  ${r.slug}  — ${r.summary}`);
      for (const i of r.issues) console.log(`      [${i.severity}] ${i.section}: ${i.text}`);
    } catch (e) {
      // An API failure on one page must not publish it by accident: record as drop.
      const msg = e instanceof Anthropic.APIError ? `API ${e.status}: ${e.message}` : String(e);
      console.error(`❌ drop  ${basename(file)}  — reviewer error: ${msg}`);
      results.push({
        file,
        slug: basename(file).replace(/\.md$/, ''),
        severity: 'unknown',
        verdict: 'fail',
        route: 'drop',
        code_exists_for_brand: 'unsure',
        issues: [{ severity: 'block', section: 'review', text: msg }],
        summary: 'Reviewer error',
      });
    }
  }
  writeFileSync(OUT, JSON.stringify({ model, results }, null, 2) + '\n');
  const n = (r: ReviewResult['route']) => results.filter((x) => x.route === r).length;
  console.log(`\n${results.length} reviewed: ${n('publish')} publish, ${n('review')} to human review, ${n('drop')} dropped. Report: ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
