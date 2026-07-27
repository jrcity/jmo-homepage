"use client";

import { useState } from "react";
import { Input, Button } from "@jmo/ui-kit";

type InquiryCategory =
  | "Enterprise Partnership"
  | "JMO Academy Support"
  | "BizHub Marketplace"
  | "Media & Press"
  | "General Inquiry";

const categories: { label: InquiryCategory; icon: string; color: string }[] = [
  { label: "Enterprise Partnership", icon: "🤝", color: "#915AD4" },
  { label: "JMO Academy Support", icon: "🎓", color: "#5E59D4" },
  { label: "BizHub Marketplace", icon: "🛒", color: "#CA4599" },
  { label: "Media & Press", icon: "📰", color: "#B959D4" },
  { label: "General Inquiry", icon: "💬", color: "#DBA0F7" },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [category, setCategory] = useState<InquiryCategory>("General Inquiry");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    // Simulate API network request with 1.2s delay for realistic UX feedback
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setOrganization("");
      setSubject("");
      setMessage("");
    }, 1200);
  };

  return (
    <div className="rounded-3xl border border-[#6D508C]/50 bg-[#3E1A6E]/80 p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Decorative top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500"
        style={{
          backgroundColor: categories.find((c) => c.label === category)?.color || "#915AD4",
        }}
      />

      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#1D0548]/90 border border-[#DBA0F7]/40 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#DBA0F7] mb-3">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Live Interactive Support
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Send Us a Message
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#F5E1FA]/80">
          Select an inquiry category below. Our Pan-African specialist team responds within 24 business hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl border border-green-500/40 bg-green-950/40 p-8 text-center animate-in zoom-in-95 duration-300">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 border border-green-400 text-3xl mb-4">
            ✨
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
          <p className="text-[#F5E1FA]/90 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
            Thank you for reaching out to the JMO ecosystem. Your ticket has been routed to our{" "}
            <span className="font-semibold text-white">{category}</span> desk. A confirmation email is on its way.
          </p>
          <Button
            onClick={() => setStatus("idle")}
            variant="secondary"
            className="bg-[#1D0548] text-white border border-[#6D508C] hover:border-[#DBA0F7] px-6 py-2.5 text-sm"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Category Selector Pills */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#DBA0F7] mb-3">
              1. What is your inquiry regarding? <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const isSelected = category === cat.label;
                return (
                  <button
                    type="button"
                    key={cat.label}
                    onClick={() => setCategory(cat.label)}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isSelected
                        ? "bg-gradient-to-r from-[#915AD4] to-[#6D508C] text-white shadow-lg shadow-[#915AD4]/30 scale-105 border border-white/30"
                        : "bg-[#1D0548]/70 text-[#F5E1FA]/80 border border-[#6D508C]/40 hover:border-[#DBA0F7]/60 hover:text-white"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name and Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Input
                label="Your Name *"
                placeholder="e.g. Amara Okafor"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
                  if (errorMessage) setErrorMessage("");
                }}
                required
                className="bg-[#1D0548]/90 text-white placeholder-[#F5E1FA]/30 border-[#6D508C] focus:border-[#DBA0F7] rounded-xl w-full"
              />
            </div>
            <div>
              <Input
                label="Email Address *"
                type="email"
                placeholder="amara@company.africa"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage("");
                }}
                required
                className="bg-[#1D0548]/90 text-white placeholder-[#F5E1FA]/30 border-[#6D508C] focus:border-[#DBA0F7] rounded-xl w-full"
              />
            </div>
          </div>

          {/* Organization and Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Input
                label="Organization / Role (Optional)"
                placeholder="e.g. Founder, Tech Africa"
                value={organization}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOrganization(e.target.value)}
                className="bg-[#1D0548]/90 text-white placeholder-[#F5E1FA]/30 border-[#6D508C] focus:border-[#DBA0F7] rounded-xl w-full"
              />
            </div>
            <div>
              <Input
                label="Subject *"
                placeholder="e.g. Partnership proposal for JMO Academy"
                value={subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                className="bg-[#1D0548]/90 text-white placeholder-[#F5E1FA]/30 border-[#6D508C] focus:border-[#DBA0F7] rounded-xl w-full"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-sm font-medium text-[#F5E1FA] mb-1.5">
              Your Message <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={5}
              placeholder="Tell us how we can collaborate, support your journey, or answer your questions..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errorMessage) setErrorMessage("");
              }}
              required
              className="w-full rounded-xl border border-[#6D508C] bg-[#1D0548]/90 p-3.5 text-white placeholder-[#F5E1FA]/30 shadow-inner focus:border-[#DBA0F7] focus:outline-none focus:ring-1 focus:ring-[#DBA0F7] text-sm sm:text-base transition-colors"
            />
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 rounded-xl bg-red-900/40 border border-red-500/50 px-4 py-3 text-sm text-red-200 animate-in fade-in duration-200">
              <span className="text-lg">⚠️</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={status === "submitting"}
              variant="primary"
              className="w-full sm:w-auto px-10 py-4 font-bold text-base bg-gradient-to-r from-[#915AD4] via-[#B959D4] to-[#CA4599] hover:opacity-95 shadow-lg shadow-[#915AD4]/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending to Pan-African Desk...
                </span>
              ) : (
                <span>Send Message Now ↗</span>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
