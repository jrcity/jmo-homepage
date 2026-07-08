"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";

const navItems: { label: string; href: string }[] = [
  { label: "About", href: routes.about },
  { label: "BizHub", href: routes.bizhub },
  { label: "Media", href: routes.media },
  { label: "Academy", href: routes.academy },
  { label: "Contact", href: routes.contact },
];

/**
 * EPIC-001 Feature 1 — Navigation Verification.
 * - Logo redirects home (acceptance criterion 5)
 * - Active state via usePathname (acceptance criterion 6)
 * - All links come from routes.ts, so "no broken links" is structural
 */
export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-100 bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link href={routes.home} className="text-lg font-semibold text-neutral-900">
          JMO
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium ${
                    isActive ? "text-brand-primary" : "text-neutral-700 hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile nav — TODO: wire to a disclosure/menu component during
            Feature 1 mobile testing task, not before */}
        <button
          className="md:hidden rounded-md border border-neutral-300 px-3 py-1.5 text-sm"
          aria-label="Open menu"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
