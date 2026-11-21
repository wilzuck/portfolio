// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Remplace par ton nom de domaine final
  site: 'https://etekawilfried.odacesoft.com',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
