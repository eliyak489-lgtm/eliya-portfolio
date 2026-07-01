# Website Architecture

## Stack

Astro 5, static site with directory-style URLs (see `astro.config.mjs`). No server runtime, no client-side framework.

## Content Source (corrected)

This project does **not** use Astro Content Collections. Content lives in typed TypeScript modules under `src/data/`:

- `projects.ts` — every project/film; single source of truth for the homepage grid, `/work`, category pages, and case studies
- `categories.ts` — the 4 portfolio categories
- `faq.ts` — homepage FAQ copy
- `testimonials.ts` — homepage testimonials
- `instagram.ts` — Instagram preview tiles
- `logos.ts` — client logos for the ticker
- `site.ts` — site-wide config (Web3Forms key, Instagram handle)
- `placeholders.ts` — fallback copy for case studies missing real content

Pages consume this data directly via `getStaticPaths()`. Earlier project notes incorrectly claimed this project uses Content Collections — that migration has not happened and is not currently planned. See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for the full file layout.

## Page Routes

- `/` — homepage (`src/pages/index.astro`)
- `/work/` — all-projects overview (`src/pages/work/index.astro`)
- `/category/[slug]/` — one page per category: `hotels-resorts`, `outdoor-brands`, `commercials`, `travel-films` (`src/pages/category/[slug].astro`)
- `/project/[slug]/` — one case-study page per project, generated from `projects.ts` (`src/pages/project/[slug].astro`)

**Correction:** earlier notes described "About", "Contact", and "Instagram" as separate pages in the site hierarchy. In the actual implementation these are homepage sections/anchors (`#about`, `#contact`, `#instagram`), not standalone routes.

## Homepage Composition (current)

Hero → About → LogoTicker → FilmGrid ("Selected Work") → CategoryLinks ("Projects by Category") → Stats → Testimonials → FAQ → InstagramPreview → ContactForm → Contact → FinalCTA

## Homepage Composition (original target, not fully built)

Hero → Featured Reel → Selected Work → Featured Clients → Why Work With Me → Projects by Category → Behind the Scenes → Testimonials → FAQ → Instagram → Contact → Final CTA

Gaps versus current: no separate Featured Reel section, no "Featured Clients" section distinct from the logo ticker, no "Why Work With Me" section, no Behind the Scenes as a homepage section. Testimonials has since been implemented.

## Case-Study Page Template

Hero → Overview → Challenge → Creative Direction → My Role → Film → Gallery → Behind the Scenes → Deliverables → Related Projects → CTA

Every field above is optional per project; missing fields fall back to copy in `src/data/placeholders.ts` (see `src/pages/project/[slug].astro`).
