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
  bizhub: "/bizhub", // redirects to NEXT_PUBLIC_BIZHUB_URL
  media: "/media", // redirects to NEXT_PUBLIC_MEDIA_URL
  academy: "/academy", // redirects to NEXT_PUBLIC_ACADEMY_URL
  faq: "/faq",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type RouteKey = keyof typeof routes;

/** External links — must open in a new tab per CTA acceptance criteria. */
export const externalLinks = {
  twitter: "https://twitter.com/jmocareers",
  linkedin: "https://linkedin.com/company/jmo-ecosystem",
  instagram: "https://instagram.com/jmo.ecosystem",
} as const;

/** Shared Identity Service links for centralized auth across all 4 products. */
export const authLinks = {
  login: `${process.env.NEXT_PUBLIC_IDENTITY_SERVICE_URL || "https://auth.jmo.co"}/login`,
  register: `${process.env.NEXT_PUBLIC_IDENTITY_SERVICE_URL || "https://auth.jmo.co"}/register`,
} as const;
