// Layer 2 — live AI diagnosis. One paid call serves the user AND seeds the
// content pipeline: the result is cached on the queue entry, so repeat asks
// of the same error are free, and queue-to-draft.ts reuses it as source.
import {
  json,
  readErrorBody,
  readQueueEntry,
  upsertQueueEntry,
  todayUTC,
  clientBucket,
  FREE_DIAGNOSES_PER_DAY,
  GLOBAL_DIAGNOSES_PER_DAY,
  type Env,
} from './_utils';

const RATE_TTL_SECONDS = 60 * 60 * 48; // rate keys self-expire after 2 days

function diagnosisPrompt(error: string): string {
  return `You are the diagnosis engine of fixme.vip, an HVAC error-code knowledge base for US homeowners. A homeowner described this:

${error}

Diagnose it. Respond in plain markdown with exactly these sections:

## What this likely means
(2-3 sentences; if the brand/model matters, say what varies)

## Most likely causes
(numbered, ranked by probability, max 4)

## Safe checks you can do yourself
(ONLY genuinely safe steps: thermostat settings, air filter, breaker, batteries, visible vent blockage, condensate line. Number them.)

## When to call a licensed technician
(be specific about which symptoms mean stop-DIY; include a realistic US repair cost range)

SAFETY RULES (non-negotiable): Never instruct opening gas valves, bypassing safety switches (limit, rollout, pressure), working inside the burner compartment, handling refrigerant, or repeated resets of a locked-out unit. If the description suggests a gas smell or CO alarm, your FIRST line must tell them to leave the building and call the gas utility emergency line. Be honest when a fault is not DIY-able. No preamble, no closing remarks.`;
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;

  const errorOrResponse = await readErrorBody(request);
  if (errorOrResponse instanceof Response) return errorOrResponse;
  const error = errorOrResponse;

  if (!env.ANTHROPIC_API_KEY) {
    return json(
      { error: 'AI diagnosis is not configured yet. The error was recorded for our team.' },
      503
    );
  }

  const kv = env.FIXME_KV;
  const day = todayUTC();
  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const ipKey = `rl:${clientBucket(ip)}:${day}`;
  const globalKey = `rl:global:${day}`;

  // Cache hit: same (normalized) error already diagnosed — free, no quota spent,
  // and NO queue write (so exhausted-quota traffic can't flood KV from here).
  const { key, entry: cached } = await readQueueEntry(kv, error);
  const used = Number((await kv.get(ipKey)) ?? '0');
  if (cached?.diagnosis) {
    return json({
      diagnosis: cached.diagnosis,
      cached: true,
      remaining: Math.max(0, FREE_DIAGNOSES_PER_DAY - used),
    });
  }

  // Per-IP daily quota — caps API spend; overflow is nudged to the free
  // quote page (rail B), not to a paywall. Users never pay us.
  if (used >= FREE_DIAGNOSES_PER_DAY) {
    return json(
      {
        error: `You've used today's ${FREE_DIAGNOSES_PER_DAY} free diagnoses. Try again tomorrow — or get a licensed local pro to look at it for free via the quotes page.`,
        remaining: 0,
      },
      429
    );
  }

  // Global daily ceiling — hard cap on worst-case API spend.
  const globalUsed = Number((await kv.get(globalKey)) ?? '0');
  if (globalUsed >= GLOBAL_DIAGNOSES_PER_DAY) {
    return json(
      { error: 'Daily diagnosis capacity reached. Please try again tomorrow.' },
      429
    );
  }

  // Reserve-then-call: increment counters BEFORE the paid call so concurrent
  // requests can't all read a stale low value and stampede. KV is eventually
  // consistent, so this shrinks the race window but does not close it — a
  // Cloudflare WAF rate-limit rule on this route is required before launch
  // (see README "部署" + SECURITY.md). The reservation is intentionally not
  // rolled back on API failure: failing closed protects spend.
  await kv.put(ipKey, String(used + 1), { expirationTtl: RATE_TTL_SECONDS });
  await kv.put(globalKey, String(globalUsed + 1), { expirationTtl: RATE_TTL_SECONDS });

  const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: env.CLAUDE_MODEL ?? 'claude-opus-4-8',
      max_tokens: 2500,
      thinking: { type: 'adaptive' },
      output_config: { effort: 'medium' },
      messages: [{ role: 'user', content: diagnosisPrompt(error) }],
    }),
  });

  if (!apiResponse.ok) {
    return json({ error: 'Diagnosis engine is temporarily unavailable. Please retry shortly.' }, 502);
  }

  const data = (await apiResponse.json()) as {
    content: { type: string; text?: string }[];
  };
  const diagnosis = data.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
    .trim();

  if (!diagnosis) {
    return json({ error: 'Diagnosis came back empty. Please retry.' }, 502);
  }

  // Persist the diagnosis onto the queue entry (layer 3 feed). Write happens
  // only after a successful paid call — counters were already reserved above.
  const { entry } = await upsertQueueEntry(kv, error);
  entry.diagnosis = diagnosis;
  entry.diagnosedAt = new Date().toISOString();
  await kv.put(key, JSON.stringify(entry), { metadata: { count: entry.count } });

  return json({
    diagnosis,
    cached: false,
    remaining: FREE_DIAGNOSES_PER_DAY - used - 1,
  });
}
