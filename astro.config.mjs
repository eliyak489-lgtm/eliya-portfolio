// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://eliyakapach.com',
  integrations: [sitemap()],
  build: {
    // Emit clean directory-style URLs: /work/, /project/skideal/
    format: 'directory',
  },
});
