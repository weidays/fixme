// Layer 1 — catch unmatched errors. Every miss becomes a topic-queue entry.
import { json, readErrorBody, upsertQueueEntry, type Env } from './_utils';

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const errorOrResponse = await readErrorBody(context.request);
  if (errorOrResponse instanceof Response) return errorOrResponse;

  const { entry } = await upsertQueueEntry(context.env.FIXME_KV, errorOrResponse);
  return json({ ok: true, seen: entry.count });
}
