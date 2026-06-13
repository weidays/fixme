import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { BRANDS, EQUIPMENT, SEVERITIES } from './config';

const errors = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/errors' }),
  schema: z.object({
    // The <title> tag, keyword-first. Hard SEO limit.
    title: z.string().max(60),
    // The code as users see/search it, e.g. "Code 33" or "3 red flashes".
    code: z.string().min(2),
    // The meta description. Hard SEO limit.
    description: z.string().min(50).max(160),
    brand: z.enum(BRANDS),
    equipment: z.enum(EQUIPMENT),
    // Drives which monetization rail leads the page:
    //   diy       → parts list first, quote CTA as fallback
    //   pro       → quote CTA prominent after causes/costs
    //   emergency → red safety banner on top + quote CTA immediately
    severity: z.enum(SEVERITIES),
    // Honest, broad repair-cost range in USD — info AI one-shots rarely give.
    costRange: z.string().min(3),
    // Which models/series this applies to. Accuracy boundary, not filler.
    appliesTo: z.string().min(10),
    tags: z.array(z.string()).min(1),
    // Rail A: parts the DIY fix needs; rendered as Amazon search links.
    parts: z
      .array(z.object({ name: z.string(), search: z.string() }))
      .default([]),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    // Left empty until a licensed reviewer joins — never fabricate credentials.
    reviewedBy: z.string().default(''),
    faq: z
      .array(z.object({ q: z.string(), a: z.string().min(40) }))
      .min(3),
  }),
});

export const collections = { errors };
