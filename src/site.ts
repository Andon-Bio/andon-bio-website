// Central brand / site config. Single source of truth for copy reused across pages.
export const SITE = {
  name: "Andon Bio",
  url: "https://andon.bio",
  email: "hello@andon.bio",
  location: "Denver, Colorado",
  tagline:
    "Making translation measurable — direct tRNA-charging data for predictive protein expression.",
  description:
    "Andon measures charged tRNAs directly — revealing what limits protein expression and powering predictive sequence design.",
} as const;

export const NAV = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "The science", href: "/science" },
  { label: "About", href: "/about" },
] as const;

export const AFFILIATIONS = [
  "University of Colorado Anschutz",
  "Nucleate",
  "Blueprint by The Engine",
  "Innosphere Ventures",
] as const;
