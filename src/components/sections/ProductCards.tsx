import Image from "next/image";
import { Card, Button } from "@jmo/ui-kit";
import { homeContent } from "@/content/home";

/**
 * Ecosystem Responsibilities Section — Dark-Forward UI with Native African Infographic Images.
 * Three cards, one per product, each displaying its dedicated infographic and linking out to its live domain.
 * Each card is styled with its wayfinding accent token per design specifications:
 * - Homepage: #9159D4 (orchid)
 * - Academy: #5E59D4 (indigo lean)
 * - Media: #B959D4 (magenta lean)
 * - BizHub: #CA4599 (berry/wine lean)
 */
export function ProductCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {homeContent.productsSection.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-[#F5E1FA]/80 leading-relaxed">
          {homeContent.productsSection.subtitle}
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {homeContent.productsSection.products.map((product) => (
          <div
            key={product.title}
            className="group relative flex flex-col rounded-3xl p-0.5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--card-accent)]/25"
            style={
              {
                "--card-accent": product.accentHex,
              } as React.CSSProperties
            }
          >
            {/* Outer gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--card-accent)] via-[#6D508C]/50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card inner wrapper */}
            <div className="relative flex flex-1 flex-col justify-between rounded-3xl bg-[#3E1A6E]/95 overflow-hidden backdrop-blur-xl">
              <div>
                {/* Infographic Image Container */}
                {product.imagePath && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#1D0548]">
                    <Image
                      src={product.imagePath}
                      alt={`${product.title} Infographic`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E1A6E] via-transparent to-transparent opacity-90" />
                    {/* Floating Role badge on top of image */}
                    <div
                      className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold font-mono uppercase tracking-wider backdrop-blur-md shadow-lg"
                      style={{
                        backgroundColor: `${product.accentHex}35`,
                        color: product.accentHex,
                        border: `1px solid ${product.accentHex}70`,
                      }}
                    >
                      <span
                        className="h-2 w-2 rounded-full animate-pulse"
                        style={{ backgroundColor: product.accentHex }}
                      />
                      {product.role}
                    </div>
                  </div>
                )}

                <div className="p-6 pt-5">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[var(--card-accent)] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#F5E1FA]/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-2">
                <div className="pt-4 border-t border-[#6D508C]/30 flex items-center justify-between">
                  <Button
                    href={product.href}
                    variant="primary"
                    className="w-full justify-center bg-gradient-to-r from-[var(--card-accent)] to-[#3E1A6E] hover:opacity-90 font-semibold shadow-lg transition-all transform group-hover:translate-x-0.5"
                  >
                    {product.ctaText} ↗
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
