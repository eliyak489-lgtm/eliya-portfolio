# CLAUDE.md

Master index for the creative and technical context behind Eliya Kapach's portfolio site. Read this first — it links out to the full detail in each doc below.

## Who / What

Eliya Kapach is a filmmaker, director, cinematographer, editor, and storyteller based in Israel, working internationally, specializing in cinematic films for hotels & resorts, outdoor brands, commercial campaigns, and travel films.

Every project begins with emotion, story, and experience — the goal is films people remember. Every frame should have intention; prefer authentic moments over staged perfection. The audience should feel something. Avoid visual trends that feel temporary or gimmicky.

## Docs Index

- [BRAND.md](BRAND.md) — brand position, mission, core values, personality, reference brands, keywords, ideal clients, services.
- [VOICE.md](VOICE.md) — tone of voice and copywriting rules: words to avoid/prefer, good vs. bad headline examples.
- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — visual design language: dark UI, color palette, typography, buttons, motion rules.
- [INSTRUCTIONS.md](INSTRUCTIONS.md) — how to approach changes to this codebase: development rules, feature workflow, UX principles.
- [WEBSITE_ARCHITECTURE.md](WEBSITE_ARCHITECTURE.md) — tech stack, content source, page routes, homepage and case-study composition (corrected to match the real implementation).
- [CONTENT_STRATEGY.md](CONTENT_STRATEGY.md) — website goals, portfolio categories, project-page content questions, target keywords/SEO, parked future content ideas.
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) — the actual repository folder/file layout.

## Architecture (corrected)

This project is an **Astro 5** static site. Content is **not** stored in Astro Content Collections — it lives in typed TypeScript data modules under `src/data/` (`projects.ts`, `categories.ts`, `faq.ts`, `testimonials.ts`, `instagram.ts`, `logos.ts`, `site.ts`, `placeholders.ts`), consumed by pages via `getStaticPaths()`. Earlier project notes incorrectly described this project as using Content Collections — that migration has not happened and is not currently planned. Keep using the data-file pattern for any new content. Full detail in [WEBSITE_ARCHITECTURE.md](WEBSITE_ARCHITECTURE.md).

## Development Rules (summary)

Inspect existing code before changing it. Preserve the current design language. Reuse components, don't duplicate. Ask before deleting anything. Full detail in [INSTRUCTIONS.md](INSTRUCTIONS.md).
