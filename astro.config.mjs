// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://eliyakapach.com',
  build: {
    // Emit clean directory-style URLs: /work/, /project/skideal/
    format: 'directory',
  },
});
