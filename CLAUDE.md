# CLAUDE.md — eliyakapach.com

Operating protocol for Claude Code in this repository. It governs **how** to work; the
docs in `docs/` hold **what** the brand, design and architecture are. Read the relevant
doc before changing anything in its area. Where a doc conflicts with this file, this file
wins until the doc is updated (open conflicts are listed at the end).

## 1. Project at a glance

- Portfolio of Eliya Kapach, filmmaker. Astro 5 static site, no client-side framework,
  directory-style URLs (`astro.config.mjs`), sitemap via `@astrojs/sitemap`.
- Deployed by **Cloudflare Pages from GitHub `main`** (build `npm run build`, output
  `dist`). Pushing to `main` publishes to production.
- Content lives in typed modules in `src/data/` (not Content Collections). Pages read
  them through `getStaticPaths()`. Keep that pattern for new content.
- One stylesheet: `src/styles/global.css` (tokens + all component styles; mobile
  overrides sit in the `@media (max-width: 768px)` blocks).
- Detail: `docs/WEBSITE_ARCHITECTURE.md`, `docs/PROJECT_STRUCTURE.md`.

### Commands

```bash
npm ci              # install exactly from package-lock.json
npm run dev         # dev server, http://localhost:4321
npm run build       # production build -> dist/
npm run preview     # serve dist/ locally
```

There are no lint, test or type-check scripts; the production build is the automated
check. Do not add tooling or dependencies without approval.

### Conventions that are easy to break

- Homepage **Selected Work** = projects with `selected: true` in `src/data/projects.ts`,
  ordered by `selectedOrder` in `src/pages/index.astro`. The grid composition is intentional.
- Category slug `commercials` is titled **"Other Work"** (`src/data/categories.ts`);
  slugs stay stable for routes.
- Testimonials and the Instagram section are disabled on purpose (commented out in
  `src/pages/index.astro`). `src/components/Stats.astro` is unused. Do not re-enable
  any of them without approval.
- The hero video source is chosen in JS in `src/components/Hero.astro` (mobile gets
  `public/hero-reel-mobile.mp4`). Mobile hero framing and the 73 px mobile nav offset
  (`scroll-padding-top`) are tuned — keep them.

## 2. Brand: filmmaker first

- **Eliya Kapach is a Filmmaker** — the primary public title — with a distinct cinematic
  point of view across commercial, travel, hospitality, outdoor and personal work.
- Do not present him as a Director or Content Creator in titles, headings or
  positioning copy. Factual credits on project pages (e.g. "Director, Cinematographer,
  Editor, Colorist.") are roles, not positioning — keep them.
- Philosophy: *"The film ends. The feeling doesn't."* It guides creative decisions.
  Do not add it to the site unless asked.
- Copy follows `docs/VOICE.md`. Brand values and clients: `docs/BRAND.md`.
- Visual language: `docs/DESIGN_SYSTEM.md`. Preserve the warm charcoal + olive palette
  (token names `--blue*` hold the olive accent), the single Akira Expanded moment on the
  hero name, the light "Behind the Lens" band, and the curated Selected Work rhythm.
- No redesigns, new sections, placeholder content or "coming soon" states unless the
  approved task calls for them.

## 3. Skills, agents, plugins and tools

- Check what is actually available in the session before relying on it; never assume a
  skill, plugin, MCP server or browser tool is installed.
- Read a skill's instructions before using it. Use skills only when they fit the task
  (e.g. front-end design, accessibility, browser testing); don't invoke unrelated ones.
- This repo enables the `impeccable` plugin in `.claude/settings.json` (local, untracked).
  Use its design guidance when it is loaded and relevant.
- Prefer browser tools for visual checks. Use MCP integrations only when the task needs
  that service. Use subagents for independent review or parallel research, not by default.
- In every report, state which skills/tools were used and why, and any that were unavailable.

## 4. Code quality, performance, accessibility

- Follow the existing Astro patterns: small focused components, data in `src/data/`,
  plain scoped `<script>` blocks, no framework islands, no duplicated markup or styles.
- Smallest change that solves the problem; match the surrounding code style and naming.
- Performance: lazy-load below-the-fold media, don't ship oversized images or new heavy
  scripts, keep motion to opacity/transform. Large unoptimised thumbnails are known debt —
  don't add to it.
- Accessibility: semantic HTML, meaningful `alt` text, keyboard-operable controls,
  visible focus, sufficient contrast, respect `prefers-reduced-motion`; autoplaying
  motion over 5 s needs a pause control (WCAG 2.2.2).

## 5. Verification (proportional to the change)

| Change | Required checks |
| --- | --- |
| Any code change (`src/`, config, dependencies) | `npm run build` passes; `git diff` reviewed for scope |
| Anything that affects the visual interface | The above, plus a browser check of the built site at desktop (≈1440 px) and mobile (375 px), with before/after screenshots |
| Documentation only | `git diff` review; no build or browser testing needed |

- For visual checks, look at the area touched plus its neighbours (hero, Selected Work,
  About, contact, nav as relevant): wrapping, overflow, spacing, typography, and that
  nothing outside the scope moved.
- If screenshots can't be produced, say so. Never claim visual verification you didn't do.
  Note render limitations (e.g. offline fonts falling back from Akira Expanded/Inter;
  headless browsers without H.264 not playing the hero video).

## 6. Git safety and scope

- **Never commit or push without explicit approval.** Pushing `main` deploys production.
- Stage files by explicit path. Never `git add -A` / `git add .`, never `git commit -a`.
- Preserve unrelated working-tree changes: don't stage, revert, delete or "tidy" them.
  Report them instead.
- No force-push, `reset --hard`, history rewrites, branch deletion or file deletion without
  explicit approval.
- Never put credentials or tokens in remote URLs, files or commit messages.
- After an approved push, confirm the remote with `git ls-remote origin refs/heads/main`.
- Stay inside the approved scope. Anything else you notice goes in the report as a
  finding, not into the diff.

## 7. Workflow

1. **Inspect** — read the relevant docs, components, data and current `git status`.
2. **Plan** — say what will change, which files, and any risks or judgement calls.
3. **Implement** — the in-scope edits.
4. **Validate** — the checks in §5 that match the change.
5. **Report** — tools used, files changed, what changed, validation results,
   screenshots (for visual changes), open issues, and anything that needs a decision.
6. **Await approval** — before committing, pushing, or starting the next task.

Within an approved task, make routine implementation decisions yourself (structure,
naming, small layout adjustments the requirements imply) and note notable ones in the
report. Ask for clarification only when ambiguity could materially affect design,
content, architecture or behaviour.

## 8. Approval boundaries

An explicitly approved task authorises all the in-scope edits it describes, across
whatever files they require — no separate approval per file or per small detail.

Explicit approval is still required for:

- Commits and pushes (including deploys to Cloudflare Pages via `main`)
- Destructive operations: deleting, renaming or moving files; force-push, resets,
  history rewrites
- New dependencies or tooling
- Material changes outside the approved scope — e.g. design or layout changes, brand
  positioning copy, project data, categories, navigation, the video player, or `docs/`
  edits that the task did not include

## Known documentation conflicts

Resolving these is a separate future task. Don't edit these docs as a side effect of
other work; until they are updated, follow this file.

- `docs/BRAND.md`, `docs/CLAUDE.md`: describe Eliya as "director" — superseded by §2.
- `docs/CONTENT_STRATEGY.md`: goal "Position Eliya as a director"; SEO note says the
  sitemap and Open Graph tags aren't implemented (both now are; structured data and
  per-project share images still aren't).
- `docs/DESIGN_SYSTEM.md`: says Inter only and a dark, monochromatic UI — omits Akira
  Expanded, the olive accent and the light About band.
- `docs/WEBSITE_ARCHITECTURE.md`: homepage order and case-study fallback behaviour are outdated.
- `docs/PROJECT_STRUCTURE.md`: lists a non-existent `Contact.astro`; omits newer assets.
