#!/usr/bin/env node
/**
 * Tell Bing (and the other IndexNow engines: Yandex, Seznam, Naver) which
 * pages changed, so new code pages are crawled within hours instead of weeks.
 * Google does not use IndexNow; it relies on the sitemap lastmod instead.
 *
 * Usage (CI, after deploy):  npx tsx scripts/indexnow.ts <base-sha> [head-sha]
 * Changed content files between the two commits become page URLs, plus the
 * homepage and the affected brand / code-chart pages.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'fixme.vip';
const keyFile = readdirSync(join(root, 'public')).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) {
  console.log('No IndexNow key file in public/ — skipping.');
  process.exit(0);
}
const key = readFileSync(join(root, 'public', keyFile), 'utf-8').trim();

const [base, head = 'HEAD'] = process.argv.slice(2);
let changed: string[] = [];
try {
  changed = execFileSync('git', ['diff', '--name-only', '--diff-filter=AM', base, head, '--', 'src/content/errors'], { cwd: root })
    .toString()
    .split('\n')
    .filter((f) => f.endsWith('.md'));
} catch {
  console.log(`Could not diff ${base}..${head} — skipping.`);
  process.exit(0);
}
if (!changed.length) {
  console.log('No content pages changed — nothing to submit.');
  process.exit(0);
}

const urls = new Set<string>([`https://${HOST}/`]);
for (const f of changed) {
  const slug = f.split('/').pop()!.replace(/\.md$/, '');
  urls.add(`https://${HOST}/error/${slug}/`);
  const fm = readFileSync(join(root, f), 'utf-8');
  const brand = fm.match(/^brand:\s*(\S+)/m)?.[1];
  const equipment = fm.match(/^equipment:\s*(\S+)/m)?.[1];
  if (brand) urls.add(`https://${HOST}/brand/${brand}/`);
  if (brand && equipment) urls.add(`https://${HOST}/brand/${brand}/${equipment}/`);
}

const body = { host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: [...urls].slice(0, 10000) };
if (process.env.DRY_RUN) {
  console.log(`DRY_RUN — would submit ${body.urlList.length} URL(s) with key file ${body.keyLocation}:`);
  for (const u of body.urlList) console.log(`  ${u}`);
  process.exit(0);
}
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});
console.log(`IndexNow: submitted ${body.urlList.length} URL(s) → HTTP ${res.status}`);
for (const u of body.urlList) console.log(`  ${u}`);
// 200/202 = accepted. Never fail the deploy over this.
