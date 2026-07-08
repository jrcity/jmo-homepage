import { Button } from "jmo-ui-kit";
import { routes } from "@/lib/routes";

/**
 * Structural placeholder only. Per EPIC-002 (Phase 2), UI/UX owns messaging,
 * CTA clarity, and visual hierarchy for this section — do not treat this
 * copy as final; it exists so the section renders and routes correctly
 * during Phase 1 stabilization.
 */
export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
        [Placeholder headline — Phase 2 owns final copy]
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-neutral-700">
        [Placeholder subhead describing Media, BizHub, and Academy.]
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button href={routes.bizhub}>Explore BizHub</Button>
        <Button href={routes.about} variant="secondary">
          Learn more
        </Button>
      </div>
    </section>
  );
}
