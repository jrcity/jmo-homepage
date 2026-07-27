"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@jmo/ui-kit";
import { routes, authLinks } from "@/lib/routes";
import { homeContent } from "@/content/home";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems: { label: string; href: string }[] = [
  { label: "About", href: routes.about },
  { label: "BizHub", href: routes.bizhub },
  { label: "Media", href: routes.media },
  { label: "Academy", href: routes.academy },
  { label: "Contact", href: routes.contact },
];

/**
 * EPIC-001 Feature 1 — Navigation Verification with Dark-Forward UI & Rich Aesthetics.
 * - Logo redirects home (acceptance criterion 5)
 * - Active state via usePathname (acceptance criterion 6)
 * - Structural link mapping via routes.ts
 * - "Get started" CTA button linking to shared identity service
 * - Responsive mobile menu drawer with interactive disclosure
 */
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#6D508C]/30 bg-[#1D0548]/85 backdrop-blur-md transition-all">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href={routes.home}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#915AD4] to-[#3E1A6E] text-white shadow-md shadow-[#915AD4]/20">
            J
          </span>
          <span>JMO</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#DBA0F7] font-semibold drop-shadow-[0_0_8px_rgba(219,160,247,0.4)]"
                      : "text-[#F5E1FA]/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Link
            href={authLinks.login}
            className="text-sm font-medium text-[#F5E1FA]/90 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Button
            href={authLinks.register}
            variant="primary"
            className="bg-gradient-to-r from-[#915AD4] to-[#6D508C] hover:from-[#DBA0F7] hover:to-[#915AD4] hover:text-[#1D0548] font-semibold shadow-lg shadow-[#915AD4]/25 transition-all duration-300"
          >
            {homeContent.nav.ctaLabel}
          </Button>
        </div>

        {/* Mobile nav disclosure & theme switcher */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-[#6D508C]/50 p-2 text-[#F5E1FA] hover:bg-[#3E1A6E]/50 focus:outline-none focus:ring-2 focus:ring-[#915AD4]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-[#6D508C]/30 bg-[#1D0548] px-6 py-6 md:hidden animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block py-1 text-base font-medium transition-colors ${
                      isActive ? "text-[#DBA0F7] font-semibold" : "text-[#F5E1FA]/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4 border-t border-[#6D508C]/30 flex flex-col gap-3">
              <Link
                href={authLinks.login}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2 text-sm font-medium text-[#F5E1FA] hover:text-white rounded-lg border border-[#6D508C]/50"
              >
                Sign in
              </Link>
              <Button
                href={authLinks.register}
                variant="primary"
                className="w-full justify-center bg-gradient-to-r from-[#915AD4] to-[#6D508C] text-white font-semibold"
              >
                {homeContent.nav.ctaLabel}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
