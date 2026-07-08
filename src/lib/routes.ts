/**
 * Central route map — EPIC-001 Feature 2 (Route Verification).
 *
 * Every internal link in Navbar, Footer, CTAs, and page content must be
 * built from this object, never as a raw string literal. That way "no
 * broken links" and "no 404s" become a property of the codebase instead of
 * something QA has to click through manually every sprint.
 *
 * When you add a new page under src/app/, add its route here in the same PR.
 */
export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  bizhub: "/bizhub", // links out to the JMO BizHub app
  media: "/media", // placeholder until Media PRD/app exists
  academy: "/academy", // placeholder until Academy PRD/app exists
  faq: "/faq",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type RouteKey = keyof typeof routes;

/** External links — must open in a new tab per CTA acceptance criteria. */
export const externalLinks = {
  twitter: "https://twitter.com/", // TODO: real handle
  linkedin: "https://linkedin.com/", // TODO: real handle
  instagram: "https://instagram.com/", // TODO: real handle
} as const;
