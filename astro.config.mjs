// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ✅ ADD THIS:
const repoName = 'whistle-site'; 

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  output: 'static',
  base: `/${repoName}/`,
});
