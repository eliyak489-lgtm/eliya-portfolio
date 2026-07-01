# Project Structure

Current repository layout for `~/eliya-portfolio-astro` (documentation only — nothing here should be treated as an instruction to reorganize the code).

```
eliya-portfolio-astro/
├── docs/                        Project documentation (this folder)
├── public/                      Static assets served as-is
│   ├── logos/                     Client logo images (LogoTicker)
│   ├── thumbnails/                 Project thumbnail images
│   ├── projects/                  Reserved for project media (currently empty)
│   ├── HERO-REELcomp.mp4          Homepage hero video
│   └── profile.jpg, New Profile.jpg   About-section photos
├── src/
│   ├── components/               Reusable Astro components
│   │   ├── casestudy/               Components used only on /project/[slug]
│   │   │   ├── BTS.astro
│   │   │   ├── Deliverables.astro
│   │   │   ├── Gallery.astro
│   │   │   └── RelatedProjects.astro
│   │   ├── About.astro
│   │   ├── CategoryLinks.astro
│   │   ├── Contact.astro
│   │   ├── ContactForm.astro
│   │   ├── FAQ.astro
│   │   ├── FilmCard.astro
│   │   ├── FilmGrid.astro
│   │   ├── FinalCTA.astro
│   │   ├── Hero.astro
│   │   ├── InstagramPreview.astro
│   │   ├── LogoTicker.astro
│   │   ├── Nav.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── Stats.astro
│   │   ├── Testimonials.astro
│   │   └── VideoModal.astro
│   ├── data/                     Typed TS data files — the site's content source of truth
│   │   ├── categories.ts
│   │   ├── faq.ts
│   │   ├── instagram.ts
│   │   ├── logos.ts
│   │   ├── placeholders.ts
│   │   ├── projects.ts
│   │   ├── site.ts
│   │   └── testimonials.ts
│   ├── layouts/
│   │   └── BaseLayout.astro      Shared <head>, Nav, VideoModal wrapper
│   ├── pages/
│   │   ├── index.astro             Homepage (/)
│   │   ├── work/index.astro        All-projects overview (/work)
│   │   ├── category/[slug].astro   Category pages (/category/hotels-resorts, etc.)
│   │   └── project/[slug].astro    Case-study pages (/project/the-big-trip, etc.)
│   └── styles/
│       └── global.css            Single global stylesheet (design tokens + all component styles)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

See [WEBSITE_ARCHITECTURE.md](WEBSITE_ARCHITECTURE.md) for how these pieces fit together (routing, data flow, page composition).
