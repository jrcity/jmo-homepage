import { redirect } from "next/navigation";

/**
 * The homepage's "Academy" nav item sends visitors to the actual Academy app,
 * not a page rendered inside the homepage app.
 */
export default function AcademyRedirect() {
  redirect(process.env.NEXT_PUBLIC_ACADEMY_URL || "https://academy.jmo.co");
}
