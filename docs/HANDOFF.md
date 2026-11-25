# HANDOFF — context from earlier Claude sessions

Read after the root `CLAUDE.md`, which is the operating protocol and wins on any conflict.
This file records state and decisions that aren't visible in the code. Update it at the end
of any task that changes them.

## Current state (as of 2026-11-25, end-of-page merge)

- Production = GitHub `main` → Cloudflare Pages → eliyakapach.com.
- Recent commits:
  - `a57b692` feat: integrate ELIYA brand identity across site (pushed).
  - `c7c9fce` docs: align brand protocol with ELIYA identity.
  - `549994e` docs: add HANDOFF.
  - `86c240d` feat(a11y): Phase 01.2 keyboard, focus and hero pause control.
  - `b71aaf6` docs: record Phase 01.2 in HANDOFF.
  - `c71850a` feat(work): add 15 videos.
  - `45b5d3c` docs: record video additions in HANDOFF.
  - `8fbded7` feat(logos): add Crazy Line and JR/Duty Free.
  - `cf9e536`, `2bc6423` docs: HANDOFF updates (logos, logo curation rule).
  - `a2e43f5` perf(images): serve 30 heavy images as resized WebP.
  - `b4d3d61` fix(a11y): polish; `dd0dc48` docs: design review in HANDOFF.
  - `3f8cd7d` feat(work): Eliya's own frame for the BUSKILAZ thumbnail (old YouTube
    `.jpg` left in `public/thumbnails`, unreferenced).
  - `c9b361f` feat(home): merge final CTA into contact section. Everything up to here
    is pushed.
  - Run `git log origin/main..main` to see anything newer that is still unpushed.
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
- **Accessibility (Phase 01.2, done):**
  - Selected Work cards (`role="button"` divs) open on Enter/Space. Keyboard focus shows an
    olive ring plus the hover reveal; on mobile the titles stay hidden even on focus.
  - Video modal is a dialog. Focus goes to Close on open, the rest of the page is `inert`,
    Esc closes, and focus returns to the card.
  - Hero reel has a small round pause/play button, bottom-right (28 px inset desktop,
    16 px mobile). `prefers-reduced-motion` starts the reel paused.
  - Known limit: Esc pressed while focus is inside the YouTube iframe doesn't reach the
    page (cross-origin). Close button and backdrop still work.

- **Videos added 2026-11-25 (15, all `selected: false`):** Columbia GRAND TREK Coat and
  PeakFreak (Outdoor Brands); ALMERA Spa, A Romantic Escape, A Stay at ALMERA and Oaks
  Experience (Hotels & Resorts); FLYING personal brand film (Travel Films); Beluga x2,
  Paulaner x3, BUSKILAZ After Movie, DJ Glasser Greece and ELLA (Other Work).
  - Titles come from the YouTube uploads; descriptions are short placeholders in the
    same style as the August additions; no `role` set.
  - DJ Glasser Greece uses client "Daniel Glasser", assumed to be the same person as the
    existing Daniel Glasser films. Not confirmed.
  - A second Columbia "Summer Sale" upload (`dz6N1HgItCI`) was deliberately NOT added.
    The site keeps the original `columbia-summer-sale` (`d-ZhxgWYgWM`).
- **Adding videos:** every video must be on YouTube as Public or Unlisted (Private won't
  embed). The player is YouTube-only; adding Vimeo would be a video-player change and
  needs approval.

- **Logo ticker additions 2026-11-25:** Crazy Line (`public/logos/crazy-line.png`,
  350×102) and JR/Duty Free James Richardson (`public/logos/jr-duty-free.webp`), both
  white artwork (no invert), appended after Tempo. Heights: 32 / 34 px desktop,
  17 / 18 px mobile. A larger Crazy Line file would render sharper if one exists.

- **Logos are curated, videos are not.** The ticker shows only brands Eliya is proud
  to be associated with. Having a video for a client does NOT mean their logo belongs
  in the ticker. Never suggest or chase logos to match the video list; add one only
  when Eliya supplies it. Videos, by contrast, go on the site whenever Eliya is proud of
  the work, whoever the client is.
  - Landsman and Swift files exist in `public/logos` but were removed from the ticker on
    purpose; don't re-add them unasked.

- **Images are WebP (2026-11-25):** every image over 300 KB the site uses was re-encoded
  with `cwebp -q 80` to 1920 px wide (landscape), 1440 px (portrait), 1200 px (About
  portrait) or 192 px tall (logos). Homepage image weight went from ~34 MB to ~2 MB.
  New images should follow the same sizes; never add multi-MB originals to `public/`.
  - The 30 original JPEG/PNG files are still in `public/` and no longer referenced.
    Deleting them needs Eliya's explicit approval.
- **Polish (2026-11-25):** form controls inherit Inter (they fell back to Arial); the nav
  logo, menu button, hero buttons and hero pause button have an invisible `::after`
  tap area of at least 44x44 px, so their look is unchanged; "Behind the Lens" is an h2.

## Design review (2026-11-25, design-taste-frontend + brand docs)

Ranked findings Eliya has seen; each still needs approval before work starts.

1. **Selected Work thumbnails are inconsistent:** some are clean frames, others are
   YouTube thumbnails with titles and camera branding baked in (Mongolia "A Short Film
   α7 III", Georgia "EXTREME WINTER α7"). Needs clean 16:9 stills from Eliya, Selected
   Work first.
2. ~~Image weight~~ done (`a2e43f5`).
3. **Desktop hero** is 630 px of a 900 px screen, so "Selected Work" shows on the first
   screen, and a 45% black overlay dims the reel. Proposal: full-screen desktop hero,
   darkening only behind the text. Mobile hero stays as tuned.
4. **Typography:** Inter 800 at 48 px headings clash with the thin geometric wordmark.
   Proposal: lighter weight with tracking, or a refined display face; show two options.
5. ~~End of page reads backwards~~ done (`c9b361f`): one contact section, the "Let's make
   something worth remembering." headline above the form, one Send action.
   `src/components/FinalCTA.astro` and its `.final-cta-*` CSS (except `.final-cta-title`,
   now used by the form) are unused; deleting them needs Eliya's approval.
6. **Project pages are thin:** title, role, video, related only. Proposal: 2–3 sentences
   of story per Selected Work project, facts from Eliya.
7. ~~Polish~~ done (fonts, tap areas, About heading). Logo ticker pause is open item 6.

## Working preferences

- Phased workflow: inspect → plan → implement → validate → report → wait for approval.
- Within an approved task, make the routine decisions yourself. Ask only when design,
  content or architecture could be materially affected.
- Verification is proportional to the change (see `CLAUDE.md` §5):
  - Visual changes need before and after screenshots at 1440 px and 375 px (plus 390 px
    when mobile matters).
- Reports should be concise: files changed, results, screenshots, concerns.

## Open items (not approved, don't start unprompted)

1. **Docs conflicts** listed at the end of `CLAUDE.md`, including the stale "omits Akira
   Expanded" note about `docs/DESIGN_SYSTEM.md`. `docs/BRAND.md`, `docs/CLAUDE.md` and
   `docs/CONTENT_STRATEGY.md` still say "director".
2. **Project title clean-up** in `src/data/projects.ts`.
3. **Unused original images** in `public/` (30 files, see "Images are WebP" above).
4. **SEO:** no structured data (JSON-LD) and no per-project share images yet.
5. **Thumbnails for the 2026-11-25 videos** are YouTube's auto frames. Swap in chosen
   stills when Eliya provides them. Priority: Oaks Experience, whose YouTube frame is a
   vertical image with blurred side fill.
6. **Logo ticker motion:** it scrolls indefinitely with no pause control or
   reduced-motion handling (same WCAG 2.2.2 concern as the hero had). Not yet approved.
7. **Local tooling:** the desktop app's preview launcher points at a stale node path, so
   `preview_start` with `.claude/launch.json` fails. Workaround used: run `npm run preview`
   in the background and open `http://localhost:4322` by URL.
