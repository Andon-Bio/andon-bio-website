// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://andon.bio',
  integrations: [sitemap()],
  // Inline all CSS into each page's <head> instead of a linked stylesheet, so
  // there's no separate hashed CSS file that can 404 during a deploy-propagation
  // window (which showed up as a brief flash of unstyled content). CSS is ~5KB
  // gzipped and the site is a handful of pages, so the per-page duplication is
  // negligible and first paint loses a render-blocking round-trip.
  build: { inlineStylesheets: 'always' },
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
