// Single source of truth for all films/projects.
// Feeds: homepage Selected Work grid, /work index, category pages, and
// individual /project/[slug] case studies.
//
// To add a project: append an object below. To mark it "coming soon" (no
// video/thumbnail yet), set `placeholder: true` and omit youtubeId/thumbnail —
// cards and case-study pages render a "Coming Soon" state automatically.
//
// Homepage "Selected Work" shows ONLY projects with `selected: true`. A project
// with `selected: false` (or unset) is still fully available on /work, its
// category page, and its /project/[slug] case study — it is just curated out of
// the homepage grid.

export type LegacyCategory = 'viral' | 'travel' | 'commercial';

// The four client-facing categories used by /work, /category/[slug], and the
// homepage "Projects by Category" links. Titles/blurbs live in categories.ts.
export type Category4 =
  | 'hotels-resorts'
  | 'outdoor-brands'
  | 'commercials'
  | 'travel-films';

export interface Project {
  slug: string;
  title: string;
  category4: Category4;          // drives /work, category pages, case studies
  category?: LegacyCategory;     // drives the homepage "Selected Work" tabs (existing videos only)
  tag: string;                   // small label chip on the card
  description: string;
  youtubeId?: string;            // omit for placeholder/"coming soon" projects
  thumbnail?: string;            // path under /public; omit to render a placeholder tile
  alt?: string;
  featured?: boolean;            // reserved for a curated homepage grid later
  selected?: boolean;            // true = shown in the homepage "Selected Work" grid
  placeholder?: boolean;         // true = "coming soon" card, no real content yet

  // ── Case-study fields (optional; case-study page shows placeholder copy when absent) ──
  client?: string;
  overview?: string;
  challenge?: string;
  creativeDirection?: string;
  role?: string;
  gallery?: string[];
  bts?: string[];
  deliverables?: string[];
}

export const projects: Project[] = [
  // ── Hotels & Resorts ──
  // Ishwi Omakase — Mizata, El Salvador, 2026 (no `location`/`year` fields
  // exist in the schema yet, noting here so it isn't lost).
  { slug: 'ishwi-omakase', title: 'Ishwi Omakase', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'A cinematic portrait of Ishwi Omakase at Mizata by Antiresort, El Salvador.', youtubeId: 'nlnkIxBwEZc',
    thumbnail: '/thumbnails/ishwi-omakase.webp', alt: 'Ishwi Omakase', featured: true, selected: true,
    client: 'Ishwi Omakase / Mizata by Antiresort', role: 'Director, Cinematographer, Editor, Colorist.' },

  // Morning Ritual — El Salvador, 2026 (no `location`/`year` fields exist in
  // the schema yet, noting here so it isn't lost).
  { slug: 'morning-ritual', title: 'Morning Ritual', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'A cinematic portrait of a quiet morning at Mizata by Antiresort, where wellness, nature, and slow living come together.',
    youtubeId: 'JD0FFmJeDGM', thumbnail: '/thumbnails/Morning-Ritual.webp', alt: 'Morning Ritual', featured: true, selected: false,
    client: 'Mizata by Antiresort', role: 'Director, Cinematographer, Editor, Colorist.' },

  // The Westin Cozumel — Cozumel, Mexico, 2026 (no `location`/`year` fields
  // exist in the schema yet, noting here so it isn't lost).
  { slug: 'the-westin-cozumel', title: 'The Westin Cozumel', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'A cinematic film capturing the rooftop experience at The Westin Cozumel, where architecture, ocean views, and atmosphere come together.',
    youtubeId: 'UOiiDv3qbjs', thumbnail: '/thumbnails/the-westin.webp', alt: 'The Westin Cozumel', featured: true, selected: true,
    client: 'The Westin Cozumel', role: 'Director, Cinematographer, Editor, Colorist.' },

  // Ritual x Escape — OAKS Hotel, 2026 (no `location`/`year` fields exist in
  // the schema yet, noting here so it isn't lost).
  { slug: 'ritual-x-escape', title: 'Ritual x Escape', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'A cinematic portrait of Ritual x Escape at OAKS Hotel.', youtubeId: '9IV2a8Qxta0',
    thumbnail: '/thumbnails/oaks-resort-1440.webp', alt: 'Ritual x Escape', featured: true, selected: true,
    client: 'OAKS Hotel', role: 'Director, Cinematographer, Editor, Colorist.' },

  { slug: 'skideal-1', title: 'SKIDEAL', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Travel Agency Content', youtubeId: '9NpmeWyhrGI',
    thumbnail: '/thumbnails/Skideal1.webp', alt: 'Skideal', selected: false },

  { slug: 'skideal-2', title: 'SKIDEAL', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Travel Agency Content', youtubeId: 'vmwXxRr4lbM',
    thumbnail: '/thumbnails/Skideal2.webp', alt: 'Skideal', selected: false },

  // ── Short Travel Films ──
  { slug: 'the-big-trip', title: 'The Big Trip', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Short Film', youtubeId: 'vQZNnYF7PzM',
    thumbnail: '/thumbnails/The Big Trip.webp', alt: 'The Big Trip', selected: true },

  { slug: 'extreme-winter-georgia', title: 'EXTREME Winter Journey with Motorace.', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Short Travel film for a Travel Agency', youtubeId: 'PR7lMcs9gxY',
    thumbnail: '/thumbnails/Georgia Short-film.webp', alt: 'Georgia', selected: true },

  { slug: 'where-silence-speaks-mongolia', title: '"Where Silence Speaks"', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Cinematic Travel Film', youtubeId: '7FkayPsf1UU',
    thumbnail: '/thumbnails/Mongolia Short-film.jpeg', alt: 'Mongolia', selected: true },

  { slug: 'europe-motorace', title: '5 Days Journey across EUROPE', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Short Travel film for a Travel Agency', youtubeId: '2qDpO2YTKBc',
    thumbnail: '/thumbnails/motorace-5-days-europe.webp', alt: 'Motorace', selected: true },

  { slug: 'hakuba-japan', title: 'HAKUBA | JAPAN', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Unique Snowboard Experience', youtubeId: 'lVagyUuHFx8',
    thumbnail: '/thumbnails/Japan Snowboard update.webp', alt: 'Japan Snowboard', selected: false },

  // ── Commercials ──
  { slug: 'columbia-collection', title: 'COLUMBIA Collection content.', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'Content creation', youtubeId: 'd3XDuQyPynU',
    thumbnail: '/thumbnails/columbia-polo.webp', alt: 'Columbia Polo', selected: false },

  { slug: 'columbia-travel', title: 'COLUMBIA Travel Collection', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'Content creation', youtubeId: 'E0hv_Tgnp1Q',
    thumbnail: '/thumbnails/Columbia Horizontal.webp', alt: 'Columbia', selected: false },

  { slug: 'swift-optics', title: 'SWIFT OPTICS', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'An E-Commerce Commercial', youtubeId: 'xrxgmFpYzoQ',
    thumbnail: '/thumbnails/swift44.webp', alt: 'Swift', selected: true },

  { slug: 'landsman', title: 'Landsman', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Real Estate Aftermovie', youtubeId: 'mswaWP3gH9o',
    thumbnail: '/thumbnails/Landsman.webp', alt: 'Aftermovie', selected: false },

  { slug: 'bbq-more-1', title: 'BBQ & More', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Brand Film Vol. 1', youtubeId: 'bTVyNVup_-4',
    thumbnail: '/thumbnails/BBQ & More 1.webp', alt: 'BBQ & More', selected: false },

  { slug: 'bbq-more-2', title: 'BBQ & More', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Brand Film Vol. 2', youtubeId: '9hsPFhGGqoE',
    thumbnail: '/thumbnails/BBQ & More 2.webp', alt: 'BBQ & More', selected: false },

  // ── Viral Content ──
  { slug: 'passion-of-traveling', title: 'The Passion Of Traveling', category: 'viral', category4: 'travel-films', tag: 'Viral Content',
    description: 'Travel content', youtubeId: 'ziVMkr1RAJg',
    thumbnail: '/thumbnails/Viral travel.webp', alt: 'Viral Travel', selected: false },

  { slug: 'glimpse-mongolia', title: 'A Glimpse from MONGOLIA', category: 'viral', category4: 'travel-films', tag: 'Viral Content',
    description: 'Travel content', youtubeId: '5rKxFxnqDRs',
    thumbnail: '/thumbnails/mongolia-viral.jpg', alt: 'Mongolia Short', selected: false },

  { slug: 'beauty-of-kazbegi', title: 'The Beauty Of KAZBEGI, Georgia', category: 'viral', category4: 'travel-films', tag: 'Viral Content',
    description: 'A Video for a Travel Agency', youtubeId: 'sEuzJMAd26U',
    thumbnail: '/thumbnails/Travel agency.webp', alt: 'Travel Agency', selected: false },

  // ── OAKS Hotel → Hotels & Resorts (added 2026-08-13) ──
  // Vertical YouTube Shorts. Landscape card thumbnails are pending; kept out of
  // Selected Work (selected: false) until real cinematic frames are chosen.
  { slug: 'oaks-a-ride-through-summer', title: 'A Ride Through Summer', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Hospitality content for OAKS Hotel.', youtubeId: 'fhCBChG4_mU',
    thumbnail: '/thumbnails/oaks-a-ride-through-summer.webp', selected: false,
    client: 'OAKS Hotel' },

  { slug: 'oaks-beyond-the-stay', title: 'Beyond The Stay', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Hospitality content for OAKS Hotel.', youtubeId: 'P3RaOZFMnfo',
    thumbnail: '/thumbnails/oaks-beyond-the-stay.jpeg', selected: false,
    client: 'OAKS Hotel' },

  { slug: 'oaks-summer-by-the-pool', title: 'Summer by the Pool', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Hospitality content for OAKS Hotel.', youtubeId: '21iZA6JokbQ',
    thumbnail: '/thumbnails/oaks-summer-by-the-pool.webp', selected: false,
    client: 'OAKS Hotel' },

  { slug: 'oaks-sun-to-star', title: 'Sun To Star', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Hospitality content for OAKS Hotel.', youtubeId: 'aenusqAus3E',
    thumbnail: '/thumbnails/oaks-sun-to-star.webp', selected: false,
    client: 'OAKS Hotel' },

  // ── Columbia → Outdoor Brands (added 2026-08-13) ──
  // Landscape card thumbnails pending; kept out of Selected Work until chosen.
  { slug: 'columbia-summer-sale', title: 'Summer Sale', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'Content creation for Columbia.', youtubeId: 'd-ZhxgWYgWM',
    thumbnail: '/thumbnails/columbia-summer-sale.webp', selected: false,
    client: 'Columbia' },

  { slug: 'columbia-omni-freeze', title: 'Omni-Freeze', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'Content creation for Columbia.', youtubeId: 'Pb_nnuERlYg',
    thumbnail: '/thumbnails/columbia-omni-freeze.webp', selected: false,
    client: 'Columbia' },

  // ── Daniel Glasser → Other Work (category4 'commercials') (added 2026-08-13) ──
  // Working titles only; final titles, copy, and landscape thumbnails pending.
  // Kept out of Selected Work until curated.
  { slug: 'daniel-glasser-1', title: 'Daniel Glasser — Film 01', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Video for Daniel Glasser.', youtubeId: 'vFqEQ1r4K80',
    thumbnail: '/thumbnails/daniel-glasser-1.webp', selected: false,
    client: 'Daniel Glasser' },

  { slug: 'daniel-glasser-2', title: 'Daniel Glasser — Film 02', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Video for Daniel Glasser.', youtubeId: 'A9DjVCW1wEY',
    thumbnail: '/thumbnails/daniel-glasser-2.webp', selected: false,
    client: 'Daniel Glasser' },

  { slug: 'daniel-glasser-3', title: 'Daniel Glasser — Film 03', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Video for Daniel Glasser.', youtubeId: 'nouKqBcXmzM',
    thumbnail: '/thumbnails/daniel-glasser-3.webp', selected: false,
    client: 'Daniel Glasser' },

  // ── Added 2026-11-25 ──
  // Titles from the YouTube uploads. Thumbnails are YouTube's own frames
  // (Shorts scaled to 720 px wide); swap in chosen stills later. All kept out
  // of Selected Work until curated.

  // Columbia → Outdoor Brands
  { slug: 'columbia-grand-trek', title: 'GRAND TREK Coat', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'Content creation for Columbia.', youtubeId: 'mBz81f7KI-s',
    thumbnail: '/thumbnails/columbia-grand-trek.jpg', alt: 'Columbia Grand Trek Coat', selected: false,
    client: 'Columbia' },

  { slug: 'columbia-peakfreak', title: 'PeakFreak Titanium OutDry', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'Content creation for Columbia.', youtubeId: 'Yg7kmvIq_8w',
    thumbnail: '/thumbnails/columbia-peakfreak.jpg', alt: 'Columbia PeakFreak Titanium OutDry', selected: false,
    client: 'Columbia' },

  // ALMERA → Hotels & Resorts
  { slug: 'almera-spa', title: 'Spa', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Hospitality content for ALMERA.', youtubeId: 'j3naBSdKrd0',
    thumbnail: '/thumbnails/almera-spa.jpg', alt: 'ALMERA spa', selected: false,
    client: 'ALMERA' },

  { slug: 'almera-romantic-escape', title: 'A Romantic Escape', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Hospitality content for ALMERA.', youtubeId: 'IQ4jlJh9wxY',
    thumbnail: '/thumbnails/almera-romantic-escape.jpg', alt: 'A romantic escape at ALMERA', selected: false,
    client: 'ALMERA' },

  { slug: 'almera-a-stay', title: 'A Stay at ALMERA', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Hospitality content for ALMERA.', youtubeId: 'KV_9q9Rmob8',
    thumbnail: '/thumbnails/almera-a-stay.jpg', alt: 'A stay at ALMERA', selected: false,
    client: 'ALMERA' },

  // OAKS Hotel → Hotels & Resorts
  { slug: 'oaks-experience', title: 'Oaks Experience', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Hospitality content for OAKS Hotel.', youtubeId: 'l-dr1wmzryM',
    thumbnail: '/thumbnails/oaks-experience.jpg', alt: 'Oaks Experience', selected: false,
    client: 'OAKS Hotel' },

  // FLYING → Travel Films
  { slug: 'flying-personal-brand', title: 'FLYING', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A personal brand film.', youtubeId: '5HsGL4OWy28',
    thumbnail: '/thumbnails/flying-personal-brand.jpg', alt: 'FLYING', selected: false,
    client: 'Eliya Kapach' },

  // Beluga → Other Work
  { slug: 'beluga-event', title: 'BELUGA Event', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Event content for Beluga.', youtubeId: 'yT2qBZuDF2E',
    thumbnail: '/thumbnails/beluga-event.jpg', alt: 'Beluga event', selected: false,
    client: 'Beluga' },

  { slug: 'beluga-vibe', title: 'BELUGA Vibe', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Content creation for Beluga.', youtubeId: '-iB0NTYowqE',
    thumbnail: '/thumbnails/beluga-vibe.jpg', alt: 'Beluga vibe', selected: false,
    client: 'Beluga' },

  // Paulaner → Other Work
  { slug: 'paulaner-this-is-oktoberfest', title: 'This is Oktoberfest', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Content creation for Paulaner.', youtubeId: 'pJ-VS0JIk2I',
    thumbnail: '/thumbnails/paulaner-this-is-oktoberfest.jpg', alt: 'Paulaner, This is Oktoberfest', selected: false,
    client: 'Paulaner' },

  { slug: 'paulaner-oktoberfest-sound', title: 'Oktoberfest Sound', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Content creation for Paulaner.', youtubeId: '0YYIQikTxfE',
    thumbnail: '/thumbnails/paulaner-oktoberfest-sound.jpg', alt: 'Paulaner Oktoberfest sound', selected: false,
    client: 'Paulaner' },

  { slug: 'paulaner-everywhere', title: 'Paulaner Everywhere', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Content creation for Paulaner.', youtubeId: 'JV5MoYmHfrg',
    thumbnail: '/thumbnails/paulaner-everywhere.jpg', alt: 'Paulaner everywhere', selected: false,
    client: 'Paulaner' },

  // Aftermovies and short films → Other Work
  { slug: 'buskilaz-aftermovie', title: 'BUSKILAZ After Movie', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Aftermovie for DJ Buskilaz.', youtubeId: 'd9a3WHLR2aw',
    thumbnail: '/thumbnails/buskilaz-aftermovie.jpg', alt: 'Buskilaz aftermovie', selected: false,
    client: 'DJ Buskilaz' },

  { slug: 'dj-glasser-greece', title: 'DJ Glasser — Greece Aftermovie', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Aftermovie for DJ Glasser in Greece.', youtubeId: 'RtzD9AW-RsI',
    thumbnail: '/thumbnails/dj-glasser-greece.jpg', alt: 'DJ Glasser Greece aftermovie', selected: false,
    client: 'Daniel Glasser' },

  { slug: 'ella-fitness-coach', title: 'ELLA — A Fitness Coach Short Film', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'A short film about ELLA, a fitness coach.', youtubeId: 'oSXoyX-Uk-M',
    thumbnail: '/thumbnails/ella-fitness-coach.jpg', alt: 'ELLA, a fitness coach', selected: false,
    client: 'ELLA' },
];
