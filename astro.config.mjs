import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/whistle-site/',
  output: 'static',
  integrations: [tailwind()],
});
