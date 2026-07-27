"use client";

import { useState } from "react";
import { Input, Button } from "@jmo/ui-kit";
import { validateNewsletterForm } from "@/lib/validation";
import { homeContent } from "@/content/home";

type Status = "idle" | "loading" | "success" | "error";

/**
 * EPIC-001 Feature 6 — Form Validation with Dark-Forward UI.
 * Covers: required-field validation, email validation, success/error
 * messaging, and swappable copy from homeContent.newsletter.
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
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl border border-[#6D508C]/50 bg-gradient-to-br from-[#3E1A6E] via-[#2A0E52] to-[#1D0548] p-8 sm:p-12 shadow-2xl text-center">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#915AD4]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-[#5E59D4]/20 blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {homeContent.newsletter.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F5E1FA]/80 leading-relaxed">
            {homeContent.newsletter.description}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 max-w-md mx-auto items-center" noValidate>
            <div className="w-full flex-1 text-left">
              <Input
                label="Email address"
                type="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                  if (error) setError(undefined);
                }}
                error={error}
                required
                className="bg-[#1D0548]/90 text-white placeholder-[#F5E1FA]/40 border-[#6D508C] focus:border-[#DBA0F7] rounded-xl w-full"
              />
            </div>
            <div className="w-full sm:w-auto mt-6 sm:mt-0">
              <Button
                type="submit"
                disabled={status === "loading"}
                variant="primary"
                className="w-full sm:w-auto px-8 py-3 h-[42px] bg-gradient-to-r from-[#915AD4] to-[#6D508C] hover:from-[#DBA0F7] hover:to-[#915AD4] hover:text-[#1D0548] font-semibold shadow-lg transition-all"
              >
                {status === "loading" ? homeContent.newsletter.loadingText : homeContent.newsletter.buttonText}
              </Button>
            </div>
          </form>

          {status === "success" && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-semantic-success/20 border border-semantic-success/40 px-4 py-2 text-sm text-semantic-success animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-semantic-success" />
              <span>{homeContent.newsletter.successText}</span>
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-semantic-error/20 border border-semantic-error/40 px-4 py-2 text-sm text-semantic-error animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-semantic-error" />
              <span>{homeContent.newsletter.errorText}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
