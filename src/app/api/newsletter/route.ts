import { NextResponse } from "next/server";
import { validateNewsletterForm } from "@/lib/validation";

/**
 * Newsletter subscription API endpoint stub for JMO Homepage.
 * Validates the email and returns a success status.
 * In Phase 2 / backend integration, this will forward to the marketing automation service.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    const errors = validateNewsletterForm({ email: email || "" });
    if (errors.email) {
      return NextResponse.json({ error: errors.email }, { status: 400 });
    }

    // TODO: Connect to backend marketing database/service in Phase 2
    return NextResponse.json(
      { success: true, message: "Welcome to the ecosystem. You're subscribed." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
