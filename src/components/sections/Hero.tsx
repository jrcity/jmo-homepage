import Image from "next/image";
import { Button } from "@jmo/ui-kit";
import { routes } from "@/lib/routes";
import { homeContent } from "@/content/home";

/**
 * Enhanced Hero Section with Dark-Forward UI, Full-Screen 3D Holographic Ecosystem Background, & Rich Aesthetics.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Full Display Background Image spanning the entire Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ecosystem.png"
          alt="JMO 3D Holographic Ecosystem Loop"
          fill
          className="object-cover object-center scale-105 animate-pulse-slow"
          sizes="100vw"
          priority
        />
        {/* Multi-layered dark gradients for readability and seamless section blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#150336]/85 via-[#1D0548]/70 to-[#150336]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#150336]/60 to-[#150336]" />
      </div>

      {/* Hero Content layered on top of the image */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#DBA0F7]/40 bg-[#3E1A6E]/70 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#F5E1FA] shadow-lg backdrop-blur-md mb-8 hover:border-[#DBA0F7] transition-all">
          <span className="h-2 w-2 rounded-full bg-[#DBA0F7] animate-ping" />
          <span>Pan-African Professional Ecosystem</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl lg:leading-tight">
          <span className="block text-white drop-shadow-md">One Ecosystem.</span>
          <span className="block bg-gradient-to-r from-[#DBA0F7] via-[#F5E1FA] to-[#915AD4] bg-clip-text text-transparent drop-shadow">
            Three Powerhouse Engines.
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl text-[#F5E1FA]/90 leading-relaxed font-normal drop-shadow-sm">
          {homeContent.hero.subhead}
        </p>

        {/* Loop Visual Indicator */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium font-mono text-[#F5E1FA]/90 bg-[#1D0548]/90 border border-[#DBA0F7]/30 rounded-2xl px-6 py-3.5 shadow-2xl backdrop-blur-md">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#B959D4]/30 text-[#DBA0F7] border border-[#B959D4]/50">
            <span className="h-2 w-2 rounded-full bg-[#B959D4]" />
            Media (Attract)
          </span>
          <span className="text-[#DBA0F7] font-bold">→</span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#5E59D4]/30 text-[#DBA0F7] border border-[#5E59D4]/50">
            <span className="h-2 w-2 rounded-full bg-[#5E59D4]" />
            Academy (Develop)
          </span>
          <span className="text-[#DBA0F7] font-bold">→</span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#CA4599]/30 text-[#DBA0F7] border border-[#CA4599]/50">
            <span className="h-2 w-2 rounded-full bg-[#CA4599]" />
            BizHub (Monetize)
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            href={routes.bizhub}
            variant="primary"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-gradient-to-r from-[#915AD4] to-[#6D508C] hover:from-[#DBA0F7] hover:to-[#915AD4] hover:text-[#1D0548] shadow-xl shadow-[#915AD4]/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {homeContent.hero.primaryCta}
          </Button>
          <Button
            href={routes.about}
            variant="secondary"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-[#3E1A6E]/80 text-[#F5E1FA] border border-[#6D508C]/60 hover:bg-[#6D508C]/80 hover:text-white hover:border-[#DBA0F7] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {homeContent.hero.secondaryCta}
          </Button>
        </div>

        {/* Floating Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-white/15 w-full max-w-3xl">
          <div className="bg-[#150336]/90 border border-[#B959D4]/50 px-4 py-2.5 rounded-xl text-xs font-mono text-white shadow-xl flex items-center gap-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#B959D4] animate-pulse" />
            <span>Cryptographic Identity Sync</span>
          </div>
          <div className="bg-[#150336]/90 border border-[#CA4599]/50 px-4 py-2.5 rounded-xl text-xs font-mono text-white shadow-xl flex items-center gap-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#CA4599] animate-pulse" />
            <span>Multi-Currency African Escrow</span>
          </div>
          <div className="bg-[#150336]/90 border border-[#915AD4]/50 px-4 py-2.5 rounded-xl text-xs font-mono text-white shadow-xl flex items-center gap-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#DBA0F7] animate-pulse" />
            <span>Unified Pan-African Passport</span>
          </div>
        </div>
      </div>
    </section>
  );
}
