import { redirect } from "next/navigation";

/**
 * The homepage's "Media" nav item sends visitors to the actual Media app,
 * not a page rendered inside the homepage app.
 */
export default function MediaRedirect() {
  redirect(process.env.NEXT_PUBLIC_MEDIA_URL || "https://media.jmo.co");
}
