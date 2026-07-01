// The four portfolio categories. Edit title/blurb here — every category page,
// the homepage "Projects by Category" links, and the contact form's project
// type dropdown all read from this single list.
import type { Category4 } from './projects.ts';

export interface CategoryDef {
  slug: Category4;
  title: string;
  blurb: string;
}

export const categories: CategoryDef[] = [
  {
    slug: 'hotels-resorts',
    title: 'Hotels & Resorts',
    blurb: 'Luxury hospitality, experiences, and destinations, captured with a cinematic eye.',
  },
  {
    slug: 'outdoor-brands',
    title: 'Outdoor Brands',
    blurb: 'Adventure, equipment, and apparel, told through real movement.',
  },
  {
    slug: 'commercials',
    title: 'Commercials',
    blurb: 'Brand campaigns and product films built around a clear idea.',
  },
  {
    slug: 'travel-films',
    title: 'Travel Films',
    blurb: 'Personal films and cinematic documentaries from the road.',
  },
];
