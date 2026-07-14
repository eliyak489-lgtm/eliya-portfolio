// Single source of truth for all films/projects.
// Feeds: homepage Selected Work grid, /work index, category pages, and
// individual /project/[slug] case studies.
//
// To add a project: append an object below. To mark it "coming soon" (no
// video/thumbnail yet), set `placeholder: true` and omit youtubeId/thumbnail —
// cards and case-study pages render a "Coming Soon" state automatically.

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
    thumbnail: '/thumbnails/ishwi-omakase.png', alt: 'Ishwi Omakase', featured: true,
    client: 'Ishwi Omakase / Mizata by Antiresort', role: 'Director, Cinematographer, Editor, Colorist.' },

  // ── Short Travel Films ──
  { slug: 'the-big-trip', title: 'The Big Trip', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Short Film', youtubeId: 'vQZNnYF7PzM',
    thumbnail: '/thumbnails/The Big Trip.jpg', alt: 'The Big Trip' },

  { slug: 'extreme-winter-georgia', title: 'EXTREME Winter Journey with Motorace.', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Short Travel film for a Travel Agency', youtubeId: 'PR7lMcs9gxY',
    thumbnail: '/thumbnails/Georgia Short-film.jpeg', alt: 'Georgia' },

  { slug: 'where-silence-speaks-mongolia', title: '"Where Silence Speaks"', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Cinematic Travel Film', youtubeId: '7FkayPsf1UU',
    thumbnail: '/thumbnails/Mongolia Short-film.jpeg', alt: 'Mongolia' },

  { slug: 'europe-motorace', title: '5 Days Journey across EUROPE', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Short Travel film for a Travel Agency', youtubeId: '2qDpO2YTKBc',
    thumbnail: '/thumbnails/Motorace.jpeg', alt: 'Motorace' },

  { slug: 'hakuba-japan', title: 'HAKUBA | JAPAN', category: 'travel', category4: 'travel-films', tag: 'Travel Film',
    description: 'A Unique Snowboard Experience', youtubeId: 'lVagyUuHFx8',
    thumbnail: '/thumbnails/Japan Snowboard update.jpg', alt: 'Japan Snowboard' },

  // ── Commercials ──
  { slug: 'skideal-1', title: 'SKIDEAL', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Travel Agency Content', youtubeId: '9NpmeWyhrGI',
    thumbnail: '/thumbnails/Skideal1.jpg', alt: 'Skideal' },

  { slug: 'skideal-2', title: 'SKIDEAL', category: 'commercial', category4: 'hotels-resorts', tag: 'Commercial',
    description: 'Travel Agency Content', youtubeId: 'vmwXxRr4lbM',
    thumbnail: '/thumbnails/Skideal2.jpg', alt: 'Skideal' },

  { slug: 'columbia-collection', title: 'COLUMBIA Collection content.', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'Content creation', youtubeId: 'd3XDuQyPynU',
    thumbnail: '/thumbnails/columbia-polo.jpg', alt: 'Columbia Polo' },

  { slug: 'columbia-travel', title: 'COLUMBIA Travel Collection', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'Content creation', youtubeId: 'E0hv_Tgnp1Q',
    thumbnail: '/thumbnails/Columbia Horizontal.jpeg', alt: 'Columbia' },

  { slug: 'swift-optics', title: 'SWIFT OPTICS', category: 'commercial', category4: 'outdoor-brands', tag: 'Commercial',
    description: 'An E-Commerce Commercial', youtubeId: 'xrxgmFpYzoQ',
    thumbnail: '/thumbnails/swift44.jpg', alt: 'Swift' },

  { slug: 'landsman', title: 'Landsman', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Real Estate Aftermovie', youtubeId: 'mswaWP3gH9o',
    thumbnail: '/thumbnails/Landsman.jpeg', alt: 'Aftermovie' },

  { slug: 'bbq-more-1', title: 'BBQ & More', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Brand Film Vol. 1', youtubeId: 'bTVyNVup_-4',
    thumbnail: '/thumbnails/BBQ & More 1.jpeg', alt: 'BBQ & More' },

  { slug: 'bbq-more-2', title: 'BBQ & More', category: 'commercial', category4: 'commercials', tag: 'Commercial',
    description: 'Brand Film Vol. 2', youtubeId: '9hsPFhGGqoE',
    thumbnail: '/thumbnails/BBQ & More 2.jpeg', alt: 'BBQ & More' },

  // ── Viral Content ──
  { slug: 'passion-of-traveling', title: 'The Passion Of Traveling', category: 'viral', category4: 'travel-films', tag: 'Viral Content',
    description: 'Travel content', youtubeId: 'ziVMkr1RAJg',
    thumbnail: '/thumbnails/Viral travel.jpg', alt: 'Viral Travel' },

  { slug: 'glimpse-mongolia', title: 'A Glimpse from MONGOLIA', category: 'viral', category4: 'travel-films', tag: 'Viral Content',
    description: 'Travel content', youtubeId: '5rKxFxnqDRs',
    thumbnail: '/thumbnails/mongolia-viral.jpg', alt: 'Mongolia Short' },

  { slug: 'beauty-of-kazbegi', title: 'The Beauty Of KAZBEGI, Georgia', category: 'viral', category4: 'travel-films', tag: 'Viral Content',
    description: 'A Video for a Travel Agency', youtubeId: 'sEuzJMAd26U',
    thumbnail: '/thumbnails/Travel agency.jpg', alt: 'Travel Agency' },

  // ── Hotels & Resorts — placeholders, awaiting the remaining "Luxury" videos ──
  // Replace each entry below (title, youtubeId, thumbnail, case-study fields)
  // once the real project details are provided; remove `placeholder: true`.
  { slug: 'luxury-placeholder-2', title: 'Luxury Hospitality Film', category4: 'hotels-resorts',
    tag: 'Hotels & Resorts', description: 'Case study coming soon.', placeholder: true },
  { slug: 'luxury-placeholder-3', title: 'Luxury Hospitality Film', category4: 'hotels-resorts',
    tag: 'Hotels & Resorts', description: 'Case study coming soon.', placeholder: true },
  { slug: 'luxury-placeholder-4', title: 'Luxury Hospitality Film', category4: 'hotels-resorts',
    tag: 'Hotels & Resorts', description: 'Case study coming soon.', placeholder: true },
  { slug: 'luxury-placeholder-5', title: 'Luxury Hospitality Film', category4: 'hotels-resorts',
    tag: 'Hotels & Resorts', description: 'Case study coming soon.', placeholder: true },
];
