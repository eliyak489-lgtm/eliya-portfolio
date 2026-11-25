# HANDOFF — context from earlier Claude sessions

Read after the root `CLAUDE.md`, which is the operating protocol and wins on any conflict.
This file records state and decisions that aren't visible in the code. Update it at the end
of any task that changes them.

## Current state (as of the ELIYA identity work)

- Production = GitHub `main` → Cloudflare Pages → eliyakapach.com.
- Recent commits:
  - `a57b692` feat: integrate ELIYA brand identity across site (pushed).
  - `c7c9fce` docs: align brand protocol with ELIYA identity. Check `git log origin/main..main`
    to confirm whether it has been pushed.
- Remote is the clean HTTPS URL with no embedded token. Eliya pushes from his Mac.
- Pre-existing working-tree items. Never stage, revert or delete them:
  - `logos/.DS_Store` (deleted)
  - `public/thumbnails/oaks-beyond-the-stay.png` (untracked)

## Decisions already made (don't reopen without being asked)

- **Positioning:** Filmmaker first. Never "Director" or "Content Creator" in titles,
  headings or positioning copy. Factual role credits on project pages stay.
- **Philosophy line:** "The film ends. The feeling doesn't." guides decisions. It is not on
  the site; don't add it unless asked.
- **Identity (Option A, approved and live):**
  - Nav: the original geometric ELIYA wordmark PNG `public/brand/eliya-wordmark.png`
    (1240×243), shown at 20 px tall on desktop and 17 px on mobile.
  - Hero: the same wordmark replaces the old Akira "ELIYA KAPACH".
    - Width is `clamp(290px, 36vw, 560px)` on desktop and `min(240px, 64vw)` on mobile.
    - The H1 keeps a visually hidden "Eliya Kapach".
  - Footer: the original handwritten signature `public/brand/eliya-signature.png` (498×177),
    64 px tall on desktop and 46 px on mobile, centred above the social icons.
  - Keep these sizes. Never recreate the marks in type.
  - The Akira Expanded font was removed from the site; it was a "Demo" licence from cdnfonts.
- **Selected Work:** no visible film titles or captions on thumbnails on mobile. Explicitly
  rejected.
- **Featured clients:** Beluga, Paulaner and Tempo logos are tuned in size. Leave them.
- **Mobile hero:** the separate `hero-reel-mobile.mp4`, the framing and crop, and the 73 px
  nav offset are tuned. Leave them.

## Working preferences

- Phased workflow: inspect → plan → implement → validate → report → wait for approval.
- Within an approved task, make the routine decisions yourself. Ask only when design,
  content or architecture could be materially affected.
- Verification is proportional to the change (see `CLAUDE.md` §5):
  - Visual changes need before and after screenshots at 1440 px and 375 px (plus 390 px
    when mobile matters).
- Reports should be concise: files changed, results, screenshots, concerns.

## Open items (not approved, don't start unprompted)

1. **Phase 01.2 accessibility** (proposed earlier):
   - Keyboard operability and visible focus on Selected Work cards.
   - Video modal focus trap and focus return.
   - Esc to close.
   - A pause control for the autoplaying hero (WCAG 2.2.2).
2. **Docs conflicts** listed at the end of `CLAUDE.md`, including the stale "omits Akira
   Expanded" note about `docs/DESIGN_SYSTEM.md`. `docs/BRAND.md`, `docs/CLAUDE.md` and
   `docs/CONTENT_STRATEGY.md` still say "director".
3. **Project title clean-up** in `src/data/projects.ts`.
4. **Known performance debt:** large unoptimised thumbnails.
5. **SEO:** no structured data (JSON-LD) and no per-project share images yet.
