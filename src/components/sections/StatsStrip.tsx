import { homeContent } from "@/content/home";

/**
 * Trust & Stats Strip — Dark-Forward UI.
 * Displays key ecosystem metrics using IBM Plex Mono (font-mono) for numerical data,
 * providing trust and clarity on the Media → Academy → BizHub loop.
 */
export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="rounded-2xl border border-[#6D508C]/40 bg-[#3E1A6E]/40 backdrop-blur-md p-8 shadow-xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#6D508C]/30">
          {homeContent.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""
              }`}
            >
              <span className="font-mono text-3xl md:text-4xl font-extrabold tracking-tight text-[#DBA0F7] drop-shadow-[0_2px_10px_rgba(219,160,247,0.3)]">
                {stat.value}
              </span>
              <span className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-white">
                {stat.label}
              </span>
              <p className="mt-2 text-xs text-[#F5E1FA]/70 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
