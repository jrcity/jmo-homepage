import Link from "next/link";
import { routes, externalLinks } from "@/lib/routes";
import { homeContent } from "@/content/home";

/**
 * EPIC-001 Feature 4 — Footer Link Verification with Dark-Forward UI.
 * All internal links from routes.ts; all external/social links marked
 * external so they open in a new tab, matching CTA acceptance criteria.
 */
export function Footer() {
  return (
    <footer className="border-t border-[#6D508C]/40 bg-[#3E1A6E] text-[#F5E1FA]">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand Column */}
        <div className="flex flex-col gap-3">
          <Link href={routes.home} className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#915AD4] to-[#1D0548] text-white shadow-md">
              J
            </span>
            <span>JMO</span>
          </Link>
          <p className="text-sm text-[#F5E1FA]/80 leading-relaxed">
            {homeContent.footer.tagline}
          </p>
        </div>

        {/* Ecosystem Column */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-mono">
            Ecosystem
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-[#F5E1FA]/80">
            <li>
              <Link href={routes.media} className="hover:text-white transition-colors flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B959D4]" />
                JMO Media
              </Link>
            </li>
            <li>
              <Link href={routes.academy} className="hover:text-white transition-colors flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5E59D4]" />
                JMO Academy
              </Link>
            </li>
            <li>
              <Link href={routes.bizhub} className="hover:text-white transition-colors flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#CA4599]" />
                JMO BizHub
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-mono">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-[#F5E1FA]/80">
            <li><Link href={routes.about} className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href={routes.contact} className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href={routes.faq} className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal & Social Column */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-mono">
            Legal & Social
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-[#F5E1FA]/80">
            <li><Link href={routes.privacy} className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href={routes.terms} className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li>
              <a href={externalLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                Twitter ↗
              </a>
            </li>
            <li>
              <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={externalLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                Instagram ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-[#6D508C]/30 bg-[#1D0548]/40 py-6">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5E1FA]/60">
          <p>{homeContent.footer.copyright}</p>
          <p className="flex items-center gap-2">
            <span>Powered by JMO Pan-African Ecosystem</span>
            <span className="inline-block h-2 w-2 rounded-full bg-semantic-success animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
