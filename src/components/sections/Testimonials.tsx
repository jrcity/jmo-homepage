import Image from "next/image";
import { homeContent } from "@/content/home";

export function Testimonials() {
  const { title, subtitle, items } = homeContent.testimonialsSection;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block rounded-full bg-[#3E1A6E]/60 border border-[#CA4599]/40 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#F5E1FA] mb-4">
          Community Social Proof
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#F5E1FA]/80 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-2xl border border-[#6D508C]/40 bg-[#3E1A6E]/30 p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#B959D4]/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1D0548]/80 relative group overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B959D4] via-[#5E59D4] to-[#CA4599] opacity-75 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6 text-amber-400 text-lg">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-sm md:text-base text-[#F5E1FA]/90 italic leading-relaxed mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#6D508C]/20">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#B959D4]/60 flex-shrink-0 shadow-md">
                <Image
                  src={item.avatarPath}
                  alt={item.author}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm md:text-base leading-snug">
                  {item.author}
                </h4>
                <p className="text-xs text-[#B959D4] font-medium mt-0.5">
                  {item.role}
                </p>
                <p className="text-[11px] font-mono text-[#F5E1FA]/60 mt-0.5 flex items-center gap-1">
                  <span>📍</span> {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
