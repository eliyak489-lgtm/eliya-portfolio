// The four portfolio categories. Edit title/blurb here — every category page,
// the homepage "Projects by Category" links, and the contact form's project
// type dropdown all read from this single list. `image`/`alt` are used only by
// the homepage image-led category cards (CategoryLinks.astro).
import type { Category4 } from './projects.ts';

export interface CategoryDef {
  slug: Category4;
  title: string;
  blurb: string;
  image: string;   // path under /public, shown on the homepage category card
  alt: string;     // accessible description of the image
}

export const categories: CategoryDef[] = [
  {
    slug: 'hotels-resorts',
    title: 'Hotels & Resorts',
    blurb: 'Luxury hospitality and destinations, captured with a cinematic eye.',
    image: '/thumbnails/oaks-a-ride-through-summer.jpg',
    alt: 'A rider on horseback in a field at golden hour',
  },
  {
    slug: 'outdoor-brands',
    title: 'Outdoor Brands',
    blurb: 'Adventure, equipment, and apparel, told through real movement.',
    image: '/thumbnails/columbia-summer-sale.jpg',
    alt: 'Close-up of a Columbia running shoe on rocky ground under a blue sky',
  },
  {
    // Public title is "Other Work"; the internal slug stays `commercials` so
    // existing routes (/category/commercials) and project relationships hold.
    slug: 'commercials',
    title: 'Other Work',
    blurb: 'Commercial and brand work across clients and formats.',
    image: '/thumbnails/daniel-glasser-3.jpg',
    alt: 'A person with arms open at a beachside ceremony at dusk',
  },
  {
    slug: 'travel-films',
    title: 'Travel Films',
    blurb: 'Personal films and cinematic documentaries from the road.',
    image: '/thumbnails/mongolia-viral.jpg',
    alt: 'A child standing beside a horse on the Mongolian steppe',
  },
];
