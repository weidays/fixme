// One-off + reusable: apply normalizeLinks to every published page.
//   npx tsx scripts/fix-content-links.ts
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeLinks } from './_draft-schema';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src/content/errors');
const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
const slugs = new Set(files.map((f) => f.replace(/\.md$/, '')));
let changed = 0;
for (const f of files) {
  const md = readFileSync(join(dir, f), 'utf-8');
  const next = normalizeLinks(md, slugs);
  if (next !== md) {
    writeFileSync(join(dir, f), next);
    changed++;
    console.log(`fixed links: ${f}`);
  }
}
console.log(`${changed} file(s) changed.`);
