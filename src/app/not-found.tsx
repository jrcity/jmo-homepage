import { Button } from "jmo-ui-kit";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold text-neutral-900">Page not found</h1>
      <p className="mt-3 text-neutral-700">
        The page you're looking for doesn't exist. If you followed a link from
        this site, please report it — it shouldn't happen (see EPIC-001
        Feature 2: no broken routes).
      </p>
      <div className="mt-6">
        <Button href={routes.home}>Back to homepage</Button>
      </div>
    </section>
  );
}
