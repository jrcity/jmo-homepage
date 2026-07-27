import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { EcosystemWalkthrough } from "@/components/sections/EcosystemWalkthrough";
import { ProductCards } from "@/components/sections/ProductCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <Hero />
      <StatsStrip />
      <EcosystemWalkthrough />
      <ProductCards />
      <Testimonials />
      <NewsletterForm />
    </div>
  );
}
