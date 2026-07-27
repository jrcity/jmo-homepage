import Image from "next/image";
import { Button } from "@jmo/ui-kit";
import { routes } from "@/lib/routes";
import { homeContent } from "@/content/home";

const pillarImages = [
  "/images/engine-media.png",
  "/images/engine-academy.png",
  "/images/engine-bizhub.png",
];

const milestones = [
  {
    year: "2023",
    title: "The Visionary Foundation",
    desc: "Established the JMO unified identity protocol and forged core institutional partnerships across East, West, and Southern Africa.",
    accent: "#915AD4",
  },
  {
    year: "2024",
    title: "Media & Academy Rollout",
    desc: "Launched our storytelling engine across 9 socio-economic sectors alongside peer-reviewed career certification tracks.",
    accent: "#5E59D4",
  },
  {
    year: "2025",
    title: "BizHub Multi-Currency Escrow",
    desc: "Empowered thousands of verified African entrepreneurs to monetize skills and services across borders in NGN, KES, GHS, ZAR, and USD.",
    accent: "#CA4599",
  },
  {
    year: "2026+",
    title: "Pan-African Global Scale",
    desc: "Scaling verifiable credentials and cross-border commerce to connect over 100,000 active creators, developers, and founders.",
    accent: "#DBA0F7",
  },
];

const coreValues = [
  {
    icon: "⚡",
    title: "Pan-African Excellence",
    desc: "We build world-class technology tailored specifically for the continent's fastest-growing economies and talent pools.",
    color: "#915AD4",
  },
  {
    icon: "🔒",
    title: "Verifiable Trust",
    desc: "From blockchain-backed credentials to escrowed milestone payments, trust is hardcoded into every transaction.",
    color: "#5E59D4",
  },
  {
    icon: "🌱",
    title: "Knowledge to Income",
    desc: "We bridge the gap between learning a valuable skill and directly monetizing it in a professional marketplace.",
    color: "#CA4599",
  },
  {
    icon: "🤝",
    title: "Radical Collaboration",
    desc: "Breaking down regional silos to connect creators in Lagos, engineers in Nairobi, and founders in Johannesburg.",
    color: "#B959D4",
  },
];

export default function AboutPage() {
  const { heroTitle, heroSubtitle, communityImage, storyTitle, storyParagraphs, pillars } =
    homeContent.aboutContent;

  return (
    <div className="flex flex-col gap-24 pb-28 pt-12">
      {/* 1. Hero & Community Imagery */}
      <section className="mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#3E1A6E]/70 border border-[#DBA0F7]/40 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#DBA0F7] mb-6 shadow-md backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Our Brand & Mission
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          {heroTitle}
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#F5E1FA]/80 max-w-3xl mx-auto leading-relaxed">
          {heroSubtitle}
        </p>

        {/* Hero Image Showcase with floating stats badge */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-[#6D508C]/50 shadow-2xl relative aspect-[16/9] max-w-5xl mx-auto bg-[#1D0548]">
          <Image
            src={communityImage}
            alt="JMO Pan-African Community Hub"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1100px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#150336] via-[#150336]/20 to-transparent opacity-85" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-left">
            <div>
              <span className="text-xs font-mono text-[#DBA0F7] uppercase tracking-wider block font-semibold">
                Pan-African Collaborative Hub
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-1">
                Where Creators, Engineers, and Founders Connect
              </h3>
            </div>
            <div className="flex items-center gap-2.5 bg-[#1D0548]/95 border border-white/20 px-5 py-2.5 rounded-2xl backdrop-blur-md text-xs sm:text-sm font-mono text-white shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span>54 African Nations Connected</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Story & Key Metrics Section */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-[#6D508C]/50 bg-gradient-to-br from-[#3E1A6E]/60 via-[#2A0E52]/60 to-[#1D0548]/80 p-8 sm:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle background glowing orb */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#915AD4]/15 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 tracking-tight">
              {storyTitle}
            </h2>
            <div className="space-y-6 text-base sm:text-lg lg:text-xl text-[#F5E1FA]/85 leading-relaxed">
              {storyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Vibrant Metrics Grid */}
            <div className="mt-12 pt-10 border-t border-[#6D508C]/40 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div className="rounded-2xl bg-[#1D0548]/60 p-4 border border-[#6D508C]/30 transform hover:scale-105 transition-transform">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#DBA0F7] font-mono">100%</p>
                <p className="text-xs text-[#F5E1FA]/80 mt-1.5 uppercase tracking-wider font-semibold">Pan-African</p>
              </div>
              <div className="rounded-2xl bg-[#1D0548]/60 p-4 border border-[#6D508C]/30 transform hover:scale-105 transition-transform">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#B959D4] font-mono">1 ID</p>
                <p className="text-xs text-[#F5E1FA]/80 mt-1.5 uppercase tracking-wider font-semibold">Unified Account</p>
              </div>
              <div className="rounded-2xl bg-[#1D0548]/60 p-4 border border-[#6D508C]/30 transform hover:scale-105 transition-transform">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#5E59D4] font-mono">3</p>
                <p className="text-xs text-[#F5E1FA]/80 mt-1.5 uppercase tracking-wider font-semibold">Core Engines</p>
              </div>
              <div className="rounded-2xl bg-[#1D0548]/60 p-4 border border-[#6D508C]/30 transform hover:scale-105 transition-transform">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#CA4599] font-mono">0</p>
                <p className="text-xs text-[#F5E1FA]/80 mt-1.5 uppercase tracking-wider font-semibold">Border Barriers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Principles & Values Grid */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#DBA0F7] block mb-2 font-semibold">
            Our DNA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            The Principles That Drive Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#F5E1FA]/80">
            Every feature we ship and every community we support is guided by these foundational commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => (
            <div
              key={val.title}
              className="rounded-3xl border bg-[#3E1A6E]/40 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden group"
              style={{ borderColor: `${val.color}40` }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: val.color }}
              />
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-[#1D0548]/80 border border-white/10 shadow-inner">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--val-color)] transition-colors"
                  style={{ "--val-color": val.color } as React.CSSProperties}>
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F5E1FA]/75 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Timeline & Milestones */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-[#6D508C]/40 bg-[#1D0548]/90 p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Our Growth Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#F5E1FA]/80">
              From foundational protocol architecture to continental workforce scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {milestones.map((item, idx) => (
              <div key={item.year} className="relative flex flex-col rounded-2xl bg-[#3E1A6E]/50 p-6 border border-[#6D508C]/40 hover:border-[var(--accent)] transition-all duration-300"
                   style={{ "--accent": item.accent } as React.CSSProperties}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-extrabold font-mono text-[var(--accent)]" style={{ "--accent": item.accent } as React.CSSProperties}>
                    {item.year}
                  </span>
                  <span className="text-xs font-mono bg-[#1D0548] px-2.5 py-1 rounded-full text-white/80 border border-white/10">
                    Phase 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-[#F5E1FA]/75 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Three Pillars Grid with Infographic Showcase */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            The Pillars of Our Growth Loop
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-[#F5E1FA]/80 leading-relaxed">
            Each product is meticulously engineered with visual storytelling and practical tools to empower your professional career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const imageSrc = pillarImages[idx] || "/images/engine-media.png";
            return (
              <div
                key={idx}
                className="group rounded-3xl border bg-[#3E1A6E]/70 overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative backdrop-blur-md"
                style={{ borderColor: `${pillar.accentHex}60` }}
              >
                <div>
                  {/* Infographic Image Container */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#1D0548]">
                    <Image
                      src={imageSrc}
                      alt={`${pillar.title} Visual Showcase`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E1A6E] via-transparent to-transparent opacity-90" />
                    <div
                      className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold font-mono uppercase tracking-wider backdrop-blur-md shadow-lg"
                      style={{
                        backgroundColor: `${pillar.accentHex}35`,
                        color: pillar.accentHex,
                        border: `1px solid ${pillar.accentHex}70`,
                      }}
                    >
                      <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: pillar.accentHex }} />
                      Pillar 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-8 pt-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors"
                        style={{ "--accent": pillar.accentHex } as React.CSSProperties}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#F5E1FA]/85 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-[#6D508C]/30 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#DBA0F7] uppercase tracking-wider">
                      Empowering African Talent
                    </span>
                    <span className="text-lg text-white group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Bottom Call to Action */}
      <section className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-3xl border border-[#B959D4]/50 bg-gradient-to-r from-[#3E1A6E] via-[#1D0548] to-[#3E1A6E] p-10 sm:p-16 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#CA4599]/20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Ready to Enter the Loop?
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-[#F5E1FA]/85 max-w-2xl mx-auto leading-relaxed">
              Create your unified Pan-African professional account today. One identity to explore insights, earn credentials, and unlock sustainable income.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={routes.bizhub}
                variant="primary"
                className="w-full sm:w-auto px-8 py-4 font-bold text-base bg-gradient-to-r from-[#B959D4] via-[#915AD4] to-[#CA4599] hover:opacity-95 shadow-lg shadow-[#915AD4]/30 transform hover:-translate-y-0.5 transition-all"
              >
                Get Started Now →
              </Button>
              <Button
                href={routes.contact}
                variant="secondary"
                className="w-full sm:w-auto px-8 py-4 font-bold text-base bg-[#1D0548]/90 text-[#F5E1FA] border border-[#6D508C]/60 hover:text-white hover:border-white transition-all"
              >
                Contact Our Specialists
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
