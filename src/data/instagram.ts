// Homepage Instagram strip. Renders real, locally-hosted images (no embed
// iframe, no Instagram chrome/branding) that link out to the actual post.
// The only upkeep is dropping an image in /public/instagram/ and pointing
// each entry at its post URL.
//
// A card only renders if its `image` file exists; if none of the three
// images are present, the whole section is hidden.

export interface InstagramPost {
  /** Path under /public, e.g. '/instagram/post-01.webp'. */
  image: string;
  /** Accessible description of the image. */
  alt: string;
  /** Link to the Instagram post. */
  postUrl: string;
}

export const instagramPosts: InstagramPost[] = [
  { image: '/instagram/post-01.webp', alt: 'Instagram post', postUrl: 'https://www.instagram.com/p/DUQpXBiiNpZ/?img_index=1' },
  { image: '/instagram/post-02.webp', alt: 'Instagram post', postUrl: 'https://www.instagram.com/p/Daz2uxElT5W/?img_index=1' },
  { image: '/instagram/post-03.webp', alt: 'Instagram post', postUrl: 'https://www.instagram.com/p/DSxd6DqD01C/' },
];
