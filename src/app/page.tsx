import { Hero } from "@/components/sections/Hero";
import { ProductCards } from "@/components/sections/ProductCards";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCards />
      <NewsletterForm />
    </>
  );
}
