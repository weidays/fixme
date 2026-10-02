import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// lastmod for every error page from its frontmatter dateModified, so search
// engines recrawl pages that actually changed instead of guessing.
const ERRORS_DIR = './src/content/errors';
const lastmod = new Map();
for (const f of readdirSync(ERRORS_DIR).filter((n) => n.endsWith('.md'))) {
  const m = readFileSync(`${ERRORS_DIR}/${f}`, 'utf-8').match(/^dateModified:\s*["']?(\d{4}-\d{2}-\d{2})/m);
  if (m) lastmod.set(`https://fixme.vip/error/${f.replace(/\.md$/, '')}/`, m[1]);
}

export default defineConfig({
  site: 'https://fixme.vip',
  // Cloudflare Pages serves every page at a trailing-slash URL; generate links
  // (pagination included) that match, so crawlers never hit a redirect.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
      serialize(item) {
        const d = lastmod.get(item.url);
        return d ? { ...item, lastmod: d } : item;
      },
    }),
  ],
});
