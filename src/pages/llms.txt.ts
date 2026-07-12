import type { APIRoute } from "astro";
import { SITE, PAPER } from "../site";

// Curated ground-truth summary for LLMs / AI crawlers (see llmstxt.org).
// Plain-language, accurate, and kept in sync with the locked site copy.
const base = new URL(import.meta.env.SITE ?? SITE.url);
const url = (path: string) => new URL(path, base).href;

const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a biotechnology company in ${SITE.location}. Protein production depends on a cellular supply chain: as a ribosome builds a protein, it draws on a supply of charged tRNAs — the molecules that carry amino acids to the ribosome. Production moves only as fast as the right ones arrive. Andon measures that supply directly, so protein expression can be understood today and, in time, predicted rather than guessed at.

The measurement is single-molecule. A charged tRNA carries its amino acid; an empty one does not — and that signal is easily lost, both on its own and during standard sample prep. Andon's chemistry holds the amino acid in place so each tRNA is read individually by nanopore with its charge intact. A single read reports the tRNA's sequence, its modifications, and the amino acid it carries. The method is published, patent-pending, and validated from microbial to mammalian systems.

## Pages
- [Home](${url("/")}): What Andon builds — the measurement layer for protein production.
- [The science](${url("/science")}): How the measurement works, from the chemistry to the nanopore read.
- [About](${url("/about")}): The team, and Andon's roots in the RNA science community at the University of Colorado School of Medicine.

## Publication
- [${PAPER.title}](${PAPER.url}): ${PAPER.authors} ${PAPER.citation} Open access.

## Contact
- Email: ${SITE.email}
- Location: ${SITE.location}, USA
- LinkedIn: ${SITE.linkedin}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
