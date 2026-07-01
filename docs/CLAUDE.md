# CLAUDE.md

Master index for the creative and technical context behind Eliya Kapach's portfolio site. Read this first — it links out to the full detail in each doc below.

## Who / What

Eliya Kapach is a filmmaker, director, and visual storyteller based in Israel, working internationally, specializing in cinematic films for hotels & resorts, outdoor brands, commercial campaigns, and travel films. Full background in [site-overview.md](site-overview.md).

## Docs Index

- [site-overview.md](site-overview.md) — who Eliya is, creative philosophy, website goals, homepage section flow, portfolio categories, project-page structure, UX principles.
- [brand.md](brand.md) — brand position, mission, core values, personality, reference brands (A24, Apple, Patagonia...), keywords.
- [tone-of-voice.md](tone-of-voice.md) — how to write: words to avoid, words to prefer, good vs. bad examples.
- [copy-guidelines.md](copy-guidelines.md) — headline examples, banned marketing-speak.
- [design-philosophy.md](design-philosophy.md) — dark UI, motion rules, color palette, button style.
- [animation-guidelines.md](animation-guidelines.md) — section-by-section motion behavior (reveals, card lifts, ticker, autoplay).
- [ideal-clients.md](ideal-clients.md) — target client types, their goals, why they hire Eliya.
- [services.md](services.md) — service list and project types offered.
- [target-keywords.md](target-keywords.md) — SEO keyword targets and per-page SEO checklist.
- [project-page-questions.md](project-page-questions.md) — the questions every case study should answer.
- [site-map.md](site-map.md) — top-level page hierarchy.
- [future-features.md](future-features.md) — parked ideas, not scheduled work (blog, journal, gear page, travel map, etc).
- [development-rules.md](development-rules.md) — how to approach changes to this codebase (inspect first, preserve design, ask before deleting, workflow for major features).

## Architecture (corrected)

This project is an **Astro 5** static site. Content is **not** stored in Astro Content Collections — it lives in typed TypeScript data modules under `src/data/` (`projects.ts`, `categories.ts`, `faq.ts`, `testimonials.ts`, `instagram.ts`, `logos.ts`, `site.ts`, `placeholders.ts`), consumed by pages via `getStaticPaths()`. Earlier notes in this repo incorrectly described the project as using Content Collections — that migration has not happened and is not currently planned. Keep using the data-file pattern for any new content.

## Development Rules (summary)

Inspect existing code before changing it. Preserve the current design language. Reuse components, don't duplicate. Ask before deleting anything. Full detail in [development-rules.md](development-rules.md).
