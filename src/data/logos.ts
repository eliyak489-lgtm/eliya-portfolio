// Client logos shown in the homepage ticker (feature #2).
// `class` carries per-logo sizing + `dark-logo` inversion, matching global.css.
// Add a new client by dropping the file in /public/logos and appending an entry.

export interface Logo {
  src: string;
  alt: string;
  class?: string;
}

export const logos: Logo[] = [
  { src: '/logos/michelin_cropped.png',  alt: 'Michelin',        class: 'logo-michelin dark-logo' },
  { src: '/logos/motorace logo.png',     alt: 'Motorace Israel', class: 'dark-logo' },
  { src: '/logos/swift_cropped.png',     alt: 'Swift',           class: 'logo-swift' },
  { src: '/logos/BBQ.png',               alt: 'BBQ N More',      class: 'dark-logo' },
  { src: '/logos/columbia.png',          alt: 'Columbia',        class: 'logo-columbia' },
  { src: '/logos/landsman_cropped.png',  alt: 'Landsman',        class: 'logo-landsman' },
  { src: '/logos/SKIDEAL.png',           alt: 'Skideal',         class: 'logo-skideal' },
];
