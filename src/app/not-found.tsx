import { Button } from "@jmo/ui-kit";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <div className="rounded-2xl border border-[#6D508C]/40 bg-[#3E1A6E]/40 p-10 backdrop-blur-md shadow-2xl">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">404 — Page Not Found</h1>
        <p className="mt-4 text-[#F5E1FA]/80 leading-relaxed">
          The page you're looking for doesn't exist. If you followed a link from
          this site, please report it — it shouldn't happen per our route verification standards.
        </p>
        <div className="mt-8">
          <Button
            href={routes.home}
            variant="primary"
            className="bg-gradient-to-r from-[#915AD4] to-[#6D508C] hover:from-[#DBA0F7] hover:to-[#915AD4] hover:text-[#1D0548] font-semibold px-6 py-2.5 shadow-lg"
          >
            Back to homepage
          </Button>
        </div>
      </div>
    </section>
  );
}
