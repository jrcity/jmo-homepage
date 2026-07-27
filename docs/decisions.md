# JMO Homepage Rebuild — Architectural Decision Records

## ADR 001: Adoption of Dark-Forward UI
**Date**: 2026-07-26
**Status**: Accepted

### Context
The `@jmo/design-token` package provides both `surface.dark` and `surface.light` themes. The official JMO logo mark was extracted via k-means clustering and region sampling, revealing that Deep Violet (`#3E1A6E`) comprises 87% of the logo's pixel composition. 

### Decision
We have adopted the **Dark-Forward UI** (`surface.dark`) as the default for the JMO Homepage. Deep Violet (`#3E1A6E`) serves as the primary surface and container background, while Void Purple (`#1D0548`) is used for deep background sections and high-contrast accents. Text is styled in White (`#FFFFFF`) and Pale Lavender (`#F5E1FA`), with Dusty Mauve (`#6D508C`) for subtle borders and muted text.

### Consequences
- Delivers a state-of-the-art, premium aesthetic that wows at first glance and honors the brand identity.
- Consistent visual branding across all landing sections.
- High color contrast ratios ensuring Lighthouse accessibility score ≥ 90.

---

## ADR 002: Decoupled Structured Content Data Layer
**Date**: 2026-07-26
**Status**: Accepted

### Context
Landing page copy evolves rapidly during marketing and product launches. Hardcoding text inside React components creates unnecessary engineering friction and PR overhead.

### Decision
All marketing copy, product descriptions, stats metrics, and navigation labels are extracted into a structured TypeScript data file (`src/content/home.ts`). React components import this data directly.

### Consequences
- Non-engineers (e.g., content editors, marketing team) can modify copywriting in a single file without risking structural JSX breaks.
- Clean separation of presentation logic from content data.
- Easy future migration to an external headless CMS or internationalization (i18n) layer if required.

---

## ADR 003: Subdomain Redirect Pattern for Product Pillars
**Date**: 2026-07-26
**Status**: Accepted

### Context
JMO Media, JMO Academy, and JMO BizHub are deployed as standalone applications on independent Vercel subdomains, not as subroutes within a monorepo.

### Decision
In `src/lib/routes.ts`, internal route keys (`routes.bizhub`, `routes.media`, `routes.academy`) map to internal Next.js pages (`/bizhub`, `/media`, `/academy`). Each of these page components executes a server-side `redirect()` to the respective environment variable (`NEXT_PUBLIC_BIZHUB_URL`, `NEXT_PUBLIC_MEDIA_URL`, `NEXT_PUBLIC_ACADEMY_URL`).

### Consequences
- Internal links in `<Link href={routes.media}>` work seamlessly without client-side external link warnings.
- The destination domains can be swapped dynamically between local dev (`localhost:3001`), staging, and production without code changes.
