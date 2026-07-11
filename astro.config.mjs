// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://andon.bio',
  integrations: [sitemap()],
  // Self-hosted fonts (first-party woff2, auto-subset + preload). Replaces the
  // render-blocking Google Fonts <link>; no third-party request, no visitor IP
  // sent to Google. Only the weights actually used are fetched.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      weights: [700, 800],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
