import { redirect } from "next/navigation";

/**
 * The homepage's "BizHub" nav item sends visitors to the actual BizHub app,
 * not a page rendered inside the homepage app. Point this at the real
 * deployed URL once BizHub has one (e.g. https://bizhub.jmo.co).
 */
export default function BizHubRedirect() {
  redirect(process.env.NEXT_PUBLIC_BIZHUB_URL || "https://bizhub.jmo.co");
}
