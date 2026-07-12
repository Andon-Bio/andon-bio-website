// Central brand / site config. Single source of truth for copy reused across pages.
export const SITE = {
  name: "Andon Bio",
  url: "https://andon.bio",
  email: "hello@andon.bio",
  linkedin: "https://www.linkedin.com/company/111482901/",
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
  // Privacy-enhanced domain; only requested after the user clicks the facade.
  londonCallingEmbed: "https://www.youtube-nocookie.com/embed/d8NISg6Yfbk",
} as const;

// Support / backing. Rendered as tiered TEXT LINKS on About only ("Supported by").
// Two visual tiers; the top tier ranks by prominence.
export const SUPPORTERS = {
  top: [
    {
      label: "Activate",
      href: "https://activate.org/the-fellowship",
    },
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
    {
      label: "Innosphere Life Sciences Incubator",
      href: "https://innosphere.org/life-sciences-accelerator",
    },
  ],
};
