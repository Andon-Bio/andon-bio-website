// Central brand / site config. Single source of truth for copy reused across pages.
export const SITE = {
  name: "Andon Bio",
  url: "https://andon.bio",
  email: "hello@andon.bio",
  location: "Aurora, Colorado",
  tagline:
    "Measuring the cellular supply chain to make protein expression predictable.",
  description:
    "Andon measures the cellular supply chain that governs protein expression during production — the missing layer for predicting whether, and how well, a sequence will express.",
} as const;

export const NAV = [
  { label: "Science", href: "/science" },
  { label: "About", href: "/about" },
] as const;

// The publication — single source of truth (Home provenance line + Science proof card).
// Verified open access: Nature Communications 16, 7781 (2025).
export const PAPER = {
  title: "Nanopore sequencing of intact aminoacylated tRNAs",
  authors:
    "White LK, Radakovic A, Sajek MP, Dobson K, Riemondy KA, del Pozo S, Szostak JW, Hesselberth JR.",
  citation: "Nature Communications 16, 7781 (2025).",
  journal: "Nature Communications",
  year: "2025",
  url: "https://www.nature.com/articles/s41467-025-62545-9",
} as const;

// Shared external link targets.
export const LINKS = {
  cuSom: "https://medschool.cuanschutz.edu/",
  rbi: "https://medschool.cuanschutz.edu/rbi",
  rnaClub:
    "https://medschool.cuanschutz.edu/rbi/events/evenings-with-rna/colorado-rna-club",
  londonCallingWatch: "https://www.youtube.com/watch?v=d8NISg6Yfbk&t=5s",
  londonCallingEmbed: "https://www.youtube.com/embed/d8NISg6Yfbk",
} as const;

// Support / backing. Rendered as tiered TEXT LINKS on About only ("Supported by").
// Two visual tiers; the top tier ranks by prominence.
//
// ACTIVATE EMBARGO (date-critical): the Activate Fellowship is CONFIDENTIAL and
// EMBARGOED until 2026-07-14. It must not render anywhere before then. When the
// embargo lifts, set SHOW_ACTIVATE = true and supply its announcement URL — it
// slots in at the FRONT of the top tier at max prominence, no redesign needed.
export const SHOW_ACTIVATE = false;

const ACTIVATE = {
  label: "Activate",
  href: "", // post-embargo announcement URL — Laura to supply
};

export const SUPPORTERS = {
  top: [
    ...(SHOW_ACTIVATE ? [ACTIVATE] : []),
    {
      label: "Colorado OEDIT",
      href: "https://oedit.colorado.gov/press-release/oedit-announces-grants-to-35-colorado-startups-and-researchers-in-the-advanced",
    },
    {
      label: "RNA Bioscience Initiative",
      href: "https://medschool.cuanschutz.edu/rbi",
    },
  ],
  second: [
    {
      label: "CU Innovations (HIE Initiative)",
      href: "https://www.cuanschutz.edu/innovations/campus-innovator/funding/toolbox-microgrants",
    },
    { label: "Nucleate", href: "https://nucleate.org" },
    { label: "Blueprint", href: "https://engine.xyz/blueprint" },
    { label: "Innosphere", href: "https://innosphere.org" },
  ],
};
