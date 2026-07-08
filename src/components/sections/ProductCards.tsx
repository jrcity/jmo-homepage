import { Card, Button } from "jmo-ui-kit";
import { routes } from "@/lib/routes";

const products = [
  {
    title: "JMO Media",
    description: "Content & audience engine — professional, economic, and civic development content.",
    href: routes.media,
  },
  {
    title: "JMO BizHub",
    description: "Commerce & monetization engine — services, products, and payments in one marketplace.",
    href: routes.bizhub,
  },
  {
    title: "JMO Academy",
    description: "Learning & development engine — courses, certifications, and career coaching.",
    href: routes.academy,
  },
] as const;

/**
 * Audit flagged "Better explain Media, BizHub, and Academy" as High
 * priority. Copy here is a structural placeholder pulled from the PRD
 * section headers — Content team should replace before Phase 2 sign-off.
 */
export function ProductCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-2xl font-semibold text-neutral-900">
        One ecosystem, three engines
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.title}
            title={product.title}
            description={product.description}
            footer={<Button href={product.href} variant="ghost">Visit {product.title}</Button>}
          />
        ))}
      </div>
    </section>
  );
}
