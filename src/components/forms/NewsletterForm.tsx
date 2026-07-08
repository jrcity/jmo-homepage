"use client";

import { useState } from "react";
import { Input, Button } from "jmo-ui-kit";
import { validateNewsletterForm } from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

/**
 * EPIC-001 Feature 6 — Form Validation.
 * Covers: required-field validation, email validation, success/error
 * messaging, and a loading state (Frontend Tasks in Sprint 1 doc).
 * TODO: point the fetch call at the real subscribe endpoint once
 * Backend Tasks (server-side validation, request handling) land.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validateNewsletterForm({ email });
    if (errors.email) {
      setError(errors.email);
      return;
    }
    setError(undefined);
    setStatus("loading");

    try {
      // TODO: replace with real endpoint, e.g. POST /api/newsletter
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-md px-6 py-16 text-center">
      <h2 className="text-xl font-semibold text-neutral-900">Stay updated</h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3" noValidate>
        <Input
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          required
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Subscribe"}
        </Button>
        {status === "success" && (
          <p className="text-sm text-semantic-success">You're subscribed.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-semantic-error">Something went wrong. Try again.</p>
        )}
      </form>
    </section>
  );
}
