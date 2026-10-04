// Every guide uses the same section headings ("Safe checks before you call
// anyone", "Repair costs"), so none of them carry the words people search
// for. At render time, rewrite the stock headings to name the page's own
// brand, equipment and code — "How to fix Carrier furnace code 33: safe checks
// first" — so the page matches "how to fix …" and "… repair cost" searches.
// Source markdown and the generator stay unchanged; headings that aren't in
// the list below are left alone.
import { BRAND_LABELS, EQUIPMENT_LABELS } from '../config.ts';

const REWRITES = {
  'what this code means': (s) => `${s}: what it means`,
  'what this symptom means': (s) => `${s}: what it means`,
  'common causes, ranked by probability': (s) => `${s}: common causes, ranked by probability`,
  'safe checks before you call anyone': (s) => `How to fix ${s}: safe checks first`,
  'repair costs': (s) => `${s} repair cost`,
};

// "Code 33" → "code 33", "Won't ignite" → "won't ignite", but "CO alarm" stays.
const lowerFirst = (t) => (/^[A-Z][a-z]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t);

export function subjectFor({ brand, equipment, code }) {
  const b = BRAND_LABELS[brand];
  const e = EQUIPMENT_LABELS[equipment];
  if (!b || !e || !code) return null;
  return `${b} ${e.toLowerCase()} ${lowerFirst(code)}`;
}

export default function remarkKeywordHeadings() {
  return (tree, file) => {
    const subject = subjectFor(file.data?.astro?.frontmatter ?? {});
    if (!subject) return;
    for (const node of tree.children) {
      if (node.type !== 'heading' || node.depth !== 2) continue;
      if (node.children.length !== 1 || node.children[0].type !== 'text') continue;
      const rewrite = REWRITES[node.children[0].value.trim().toLowerCase()];
      if (rewrite) node.children[0].value = rewrite(subject);
    }
  };
}
