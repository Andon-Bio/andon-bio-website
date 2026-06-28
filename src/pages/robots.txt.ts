import type { APIRoute } from "astro";

const sitemapURL = new URL("sitemap-index.xml", import.meta.env.SITE);

const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
