import Link from "next/link";
import { routes, externalLinks } from "@/lib/routes";

/**
 * EPIC-001 Feature 4 — Footer Link Verification.
 * All internal links from routes.ts; all external/social links marked
 * external so they open in a new tab, matching CTA acceptance criteria.
 */
export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-semibold text-neutral-900">JMO</p>
          <p className="mt-2 text-sm text-neutral-500">
            Media, BizHub, and Academy — one ecosystem.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-neutral-900">Company</p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            <li><Link href={routes.about}>About</Link></li>
            <li><Link href={routes.contact}>Contact</Link></li>
            <li><Link href={routes.faq}>FAQ</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-neutral-900">Legal & Social</p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            <li><Link href={routes.privacy}>Privacy</Link></li>
            <li><Link href={routes.terms}>Terms</Link></li>
            <li>
              <a href={externalLinks.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
