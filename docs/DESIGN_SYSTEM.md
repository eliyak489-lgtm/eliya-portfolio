# Design System

Dark interface. Large imagery. Minimal UI. Lots of spacing. Elegant typography. Subtle animation.

The content should always be the hero.

## Color Palette

Mostly monochromatic. Accent colors should be subtle. Never use saturated colors unless media requires it.

Implemented tokens (see `--dark`, `--dark2`, `--dark3`, `--blue`, `--blue-light`, `--gray`, `--white` in `src/styles/global.css`).

## Typography

Elegant, minimal. Implemented with the Inter typeface (see `src/layouts/BaseLayout.astro`).

## Buttons

Rounded. Minimal. Simple. High contrast.

## Motion

Slow. Smooth. Natural. Never distracting.

**Preferred:** fade, reveal, parallax, soft hover.

**Avoid:** bounce, spin, elastic, flashy transitions.

Section-by-section behavior:

- Sections reveal slowly.
- Cards lift subtly.
- Logo carousel scrolls continuously.
- Videos autoplay muted.
- Hover interactions are subtle.
- Everything should remain performant.
