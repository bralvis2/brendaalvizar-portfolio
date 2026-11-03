import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` is required for canonical URLs and the sitemap.
export default defineConfig({
  site: 'https://brendaalvizar.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
