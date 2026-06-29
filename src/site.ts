// Central brand / site config. Single source of truth for copy reused across pages.
export const SITE = {
  name: "Andon Bio",
  url: "https://andon.bio",
  email: "hello@andon.bio",
  location: "Aurora, Colorado",
  tagline:
    "Measuring the cellular supply chain to make protein expression predictable.",
  description:
    "Andon measures the charged-tRNA supply that governs protein expression during production — the missing layer for predicting whether, and how well, a sequence will express.",
} as const;

export const NAV = [
  { label: "Science", href: "/science" },
  { label: "About", href: "/about" },
] as const;

export const AFFILIATIONS = [
  "CU Innovations",
  "RNA Bioscience Initiative",
  "Nucleate",
  "Blueprint (Built by MIT / The Engine)",
  "Innosphere",
  "Colorado OEDIT",
  // "Activate Fellowship", // add on 2026-07-14
] as const;
