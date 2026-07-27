import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@jmo/ui-kit";
import { routes } from "@/lib/routes";

const regionalHubs = [
  {
    region: "East Africa Regional Hub",
    city: "Nairobi, Kenya",
    address: "Westlands Innovation District, Nairobi",
    accent: "#915AD4",
    status: "Active • 08:00 - 18:00 EAT",
  },
  {
    region: "West Africa Regional Hub",
    city: "Lagos, Nigeria",
    address: "Victoria Island Tech Campus, Lagos",
    accent: "#5E59D4",
    status: "Active • 08:00 - 18:00 WAT",
  },
  {
    region: "Southern Africa Regional Hub",
    city: "Johannesburg, South Africa",
    address: "Rosebank Business Hub, Johannesburg",
    accent: "#CA4599",
    status: "Active • 08:00 - 18:00 SAST",
  },
];

const directChannels = [
  {
    name: "Enterprise & Government Partnerships",
    email: "partners@jmo.africa",
    description: "For custom workforce upskilling, institutional licensing, and multi-country initiatives.",
    color: "#915AD4",
  },
  {
    name: "JMO Academy Curriculum & Mentorship",
    email: "academy@jmo.africa",
    description: "For peer reviewers, course creators, and credential verification inquiries.",
    color: "#5E59D4",
  },
  {
    name: "BizHub Marketplace & Escrow Support",
    email: "bizhub@jmo.africa",
    description: "For dispute resolution, multi-currency payouts (NGN, KES, GHS, ZAR), and seller vetting.",
    color: "#CA4599",
  },
  {
    name: "Media, Editorial & Press Inquiries",
    email: "press@jmo.africa",
    description: "For journalist syndication, speaking engagements, and brand story features.",
    color: "#B959D4",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20 pb-24 pt-12">
      {/* 1. Hero Header */}
      <section className="mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#3E1A6E]/70 border border-[#DBA0F7]/40 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#DBA0F7] mb-6 shadow-md backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span>Pan-African Ecosystem Helpdesk Online</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Connect with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DBA0F7] via-[#B959D4] to-[#CA4599]">JMO Team</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#F5E1FA]/80 max-w-2xl mx-auto leading-relaxed">
          Whether you are launching a business, verifying a professional credential, or seeking institutional partnership, our support network spans 54 African nations.
        </p>
      </section>

      {/* 2. Main Two-Column Layout: Form + Regional Hubs */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Regional Hubs & Direct Email Desks (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Channels Card */}
            <div className="rounded-3xl border border-[#6D508C]/40 bg-[#1D0548]/90 p-8 shadow-xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>⚡</span> Direct Department Desks
              </h3>
              <div className="space-y-5">
                {directChannels.map((channel) => (
                  <div
                    key={channel.name}
                    className="group rounded-2xl border border-[#6D508C]/30 bg-[#3E1A6E]/40 p-4 transition-all duration-300 hover:border-[#DBA0F7]/50 hover:bg-[#3E1A6E]/70"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white group-hover:text-[var(--accent)] transition-colors"
                            style={{ "--accent": channel.color } as React.CSSProperties}>
                        {channel.name}
                      </span>
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: channel.color }} />
                    </div>
                    <p className="text-xs text-[#F5E1FA]/70 mt-1 leading-relaxed">
                      {channel.description}
                    </p>
                    <a
                      href={`mailto:${channel.email}`}
                      className="inline-block mt-3 text-xs font-mono font-semibold text-[#DBA0F7] hover:underline"
                    >
                      ✉️ {channel.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Hubs Card */}
            <div className="rounded-3xl border border-[#6D508C]/40 bg-gradient-to-br from-[#3E1A6E]/60 to-[#1D0548]/90 p-8 shadow-xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🌍</span> Regional Innovation Hubs
              </h3>
              <div className="space-y-6">
                {regionalHubs.map((hub) => (
                  <div key={hub.region} className="relative pl-5 border-l-2" style={{ borderColor: hub.accent }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{hub.city}</span>
                      <span className="text-[10px] font-mono uppercase bg-[#1D0548] px-2 py-0.5 rounded text-[#DBA0F7] border border-[#6D508C]/40">
                        {hub.status}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-[#F5E1FA]/90 mt-0.5">{hub.region}</p>
                    <p className="text-xs text-[#F5E1FA]/60 mt-1">{hub.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Help Accordion / FAQs */}
      <section className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-[#6D508C]/40 bg-[#3E1A6E]/30 p-8 sm:p-12 backdrop-blur-md shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm sm:text-base text-[#F5E1FA]/80">
              Quick answers to common inquiries across our three engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-[#1D0548]/80 p-6 border border-[#6D508C]/30">
              <h4 className="font-bold text-white text-base mb-2">How fast is account verification?</h4>
              <p className="text-sm text-[#F5E1FA]/70 leading-relaxed">
                Our unified identity protocol verifies African professional profiles in under 5 minutes using government-issued identification or university degrees.
              </p>
            </div>
            <div className="rounded-2xl bg-[#1D0548]/80 p-6 border border-[#6D508C]/30">
              <h4 className="font-bold text-white text-base mb-2">Which currencies are supported on BizHub?</h4>
              <p className="text-sm text-[#F5E1FA]/70 leading-relaxed">
                BizHub supports multi-currency checkout across NGN, KES, GHS, ZAR, and USD with automated escrow settlement and low exchange fees.
              </p>
            </div>
            <div className="rounded-2xl bg-[#1D0548]/80 p-6 border border-[#6D508C]/30">
              <h4 className="font-bold text-white text-base mb-2">Can our company sponsor Academy tracks?</h4>
              <p className="text-sm text-[#F5E1FA]/70 leading-relaxed">
                Yes! Our Enterprise team builds tailored certification curricula and hiring pipelines. Contact partners@jmo.africa to get started.
              </p>
            </div>
            <div className="rounded-2xl bg-[#1D0548]/80 p-6 border border-[#6D508C]/30">
              <h4 className="font-bold text-white text-base mb-2">How do I pitch a story to JMO Media?</h4>
              <p className="text-sm text-[#F5E1FA]/70 leading-relaxed">
                We accept editorial submissions across our 9 development areas. Route your proposal to press@jmo.africa with writing samples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Support CTA */}
      <section className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-3xl border border-[#DBA0F7]/40 bg-gradient-to-r from-[#1D0548] via-[#3E1A6E] to-[#1D0548] p-10 sm:p-14 shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Need Immediate Help?</h2>
          <p className="mt-3 text-sm sm:text-base text-[#F5E1FA]/80 max-w-xl mx-auto">
            Explore our community knowledge base or join the live Discord and Telegram developer lounges for real-time peer assistance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={routes.home}
              variant="secondary"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1D0548] text-[#F5E1FA] border border-[#6D508C] hover:border-white font-semibold"
            >
              ← Back to Ecosystem Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
