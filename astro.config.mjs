import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { MIN_INDEXABLE_LISTING } from './src/config.ts';
import remarkKeywordHeadings from './src/lib/remark-keyword-headings.mjs';

const SITE = 'https://fixme.vip';

// lastmod for every page from the error guides' frontmatter dateModified, so
// search engines recrawl pages that actually changed instead of guessing. A
// listing page (brand, equipment, code chart, home) takes its newest guide's date.
const ERRORS_DIR = './src/content/errors';
const lastmod = new Map();
const listingSize = new Map();
const touch = (path, date) => {
  const url = SITE + path;
  if (!lastmod.has(url) || lastmod.get(url) < date) lastmod.set(url, date);
};
for (const f of readdirSync(ERRORS_DIR).filter((n) => n.endsWith('.md'))) {
  const md = readFileSync(`${ERRORS_DIR}/${f}`, 'utf-8');
  const field = (k) => md.match(new RegExp(`^${k}:\\s*["']?([^"'\\n]+)`, 'm'))?.[1].trim();
  const date = field('dateModified')?.slice(0, 10);
  const brand = field('brand');
  const equipment = field('equipment');
  for (const p of [`/brand/${brand}/`, `/equipment/${equipment}/`]) listingSize.set(p, (listingSize.get(p) ?? 0) + 1);
  if (!date) continue;
  touch(`/error/${f.replace(/\.md$/, '')}/`, date);
  for (const p of ['/', `/brand/${brand}/`, `/equipment/${equipment}/`, `/brand/${brand}/${equipment}/`]) touch(p, date);
}

// Pages that carry noindex stay out of the sitemap: the quote form, and
// brand/equipment listings too thin to index yet (see MIN_INDEXABLE_LISTING).
const thin = [...listingSize].filter(([, n]) => n < MIN_INDEXABLE_LISTING).map(([p]) => SITE + p);
const isListingPage = (page, base) => page.startsWith(base) && /^(\d+\/)?$/.test(page.slice(base.length));
const excluded = (page) =>
  page.includes('/admin') || page === `${SITE}/quote/` || thin.some((base) => isListingPage(page, base));

export default defineConfig({
  site: SITE,
  // Cloudflare Pages serves every page at a trailing-slash URL; generate links
  // (pagination included) that match, so crawlers never hit a redirect.
  trailingSlash: 'always',
  markdown: { remarkPlugins: [remarkKeywordHeadings] },
  integrations: [
    sitemap({
      filter: (page) => !excluded(page),
      serialize(item) {
        const d = lastmod.get(item.url);
        return d ? { ...item, lastmod: d } : item;
      },
    }),
  ],
});
