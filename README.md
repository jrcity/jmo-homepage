# JMO Homepage (`jmo-homepage`)

The primary landing page and front door for the **JMO Pan-African professional ecosystem**, explaining the growth loop across our three core product engines:
- **JMO Media** (Attract — content, storytelling, audience acquisition)
- **JMO Academy** (Develop — learning, assessment, verifiable credentials)
- **JMO BizHub** (Enable Income — marketplace, professional services, escrow payments)

## Current Phase: Release 1 (Website Stabilization & Feature Expansion)
- **Design System**: Fully integrated with `@jmo/design-token` and `@jmo/ui-kit` using a **Dark-Forward UI** (Deep Violet `#3E1A6E` as dominant surface color and Void Purple `#1D0548` for deep contrast backgrounds).
- **Content Data Layer**: Marketing copy and section text are decoupled into `src/content/home.ts` for swappable, structured data management by non-engineers.
- **Wayfinding & Redirects**: Product nav links (`/bizhub`, `/media`, `/academy`) dynamically redirect to standalone subdomain environments defined via environment variables.
- **Stubbed vs. Real**:
  - **Real**: Layouts, responsive mobile navigation, interactive UI components, stats & trust strip, and client-side form validation.
  - **Stubbed**: `/api/newsletter` endpoint returns a simulated server success response. Centralized authentication calls are stubbed against the shared identity service base URL (`NEXT_PUBLIC_IDENTITY_SERVICE_URL`).

## Local Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Modify subdomains as needed for local development or staging testing.

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to view the homepage.
