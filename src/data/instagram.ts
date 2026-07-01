// Homepage Instagram preview strip. Real IG embeds need API review + tokens
// and break often — instead this renders a curated set of tiles that link out
// to the profile. Add a `thumbnail` (path under /public) once you have real
// post exports; tiles without one render a placeholder tile.

export interface InstagramTile {
  thumbnail?: string;
  alt: string;
}

export const instagramTiles: InstagramTile[] = [
  { alt: 'Instagram post' },
  { alt: 'Instagram post' },
  { alt: 'Instagram post' },
  { alt: 'Instagram post' },
  { alt: 'Instagram post' },
  { alt: 'Instagram post' },
];
