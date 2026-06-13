// Admin-only diagnostics for lead email. Auth: Authorization: Bearer <ADMIN_TOKEN>.
// Reports which env vars are present (booleans, never the secret values) and
// performs ONE live Resend test send, returning Resend's actual HTTP status and
// body so failures (bad key, unverified domain, disallowed recipient) are
// visible instead of silently swallowed. Safe to delete once email works.
import { json, type Env } from './_utils';

export async function onRequestGet(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;
  if (!env.ADMIN_TOKEN) return json({ error: 'ADMIN_TOKEN not configured.' }, 503);
  if ((request.headers.get('authorization') ?? '') !== `Bearer ${env.ADMIN_TOKEN}`) {
    return json({ error: 'Unauthorized.' }, 401);
  }

  const fromEmail = env.LEAD_FROM_EMAIL || 'fixme.vip <onboarding@resend.dev>';
  const config = {
    hasResendKey: Boolean(env.RESEND_API_KEY),
    hasNotifyEmail: Boolean(env.LEAD_NOTIFY_EMAIL),
    notifyEmail: env.LEAD_NOTIFY_EMAIL ?? null,
    fromEmail,
    hasAnthropicKey: Boolean(env.ANTHROPIC_API_KEY),
  };

  let resend: unknown = 'skipped — RESEND_API_KEY and/or LEAD_NOTIFY_EMAIL not set';
  if (env.RESEND_API_KEY && env.LEAD_NOTIFY_EMAIL) {
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          authorization: `Bearer ${env.RESEND_API_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [env.LEAD_NOTIFY_EMAIL],
          subject: 'fixme.vip selftest — lead email check',
          text: 'If you received this, lead email notifications are working. You can delete the /api/selftest endpoint now.',
        }),
      });
      resend = { status: r.status, ok: r.ok, body: (await r.text()).slice(0, 600) };
    } catch (e) {
      resend = { error: String(e) };
    }
  }

  return json({ config, resend });
}
