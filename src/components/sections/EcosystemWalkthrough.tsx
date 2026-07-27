"use client";

import { useState } from "react";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { Button } from "@jmo/ui-kit";

export function EcosystemWalkthrough() {
  const { title, subtitle, steps } = homeContent.walkthroughSection;
  const [activeTab, setActiveTab] = useState(0);
  const currentStep = steps[activeTab];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block rounded-full bg-[#3E1A6E]/60 border border-[#B959D4]/40 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#F5E1FA] mb-4">
          Interactive Guide
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#F5E1FA]/80 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Step Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {steps.map((step, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={step.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 border text-sm md:text-base ${
                isActive
                  ? "bg-[#3E1A6E]/90 text-white shadow-lg shadow-[#1D0548]/50 scale-105"
                  : "bg-[#1D0548]/60 text-[#F5E1FA]/70 border-[#6D508C]/30 hover:bg-[#3E1A6E]/40 hover:text-white"
              }`}
              style={{
                borderColor: isActive ? step.accentHex : undefined,
                boxShadow: isActive ? `0 0 20px -5px ${step.accentHex}66` : undefined,
              }}
            >
              <span
                className="font-mono text-xs px-2 py-0.5 rounded font-bold"
                style={{
                  backgroundColor: isActive ? `${step.accentHex}33` : "rgba(255,255,255,0.1)",
                  color: isActive ? step.accentHex : "#F5E1FA",
                }}
              >
                {step.stepNumber}
              </span>
              <span>{step.name}</span>
              <span className="text-xs text-[#F5E1FA]/60 hidden sm:inline">
                ({step.role})
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Content Showcase */}
      <div
        className="rounded-3xl border bg-gradient-to-br from-[#3E1A6E]/50 via-[#1D0548]/80 to-[#3E1A6E]/30 p-6 md:p-12 backdrop-blur-xl shadow-2xl transition-all duration-500 relative overflow-hidden"
        style={{
          borderColor: `${currentStep.accentHex}55`,
        }}
      >
        {/* Ambient Glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700"
          style={{ backgroundColor: currentStep.accentHex }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column: Text & Bullets */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: currentStep.accentHex }}
                />
                <span
                  className="font-mono text-xs uppercase tracking-widest font-bold"
                  style={{ color: currentStep.accentHex }}
                >
                  Step {currentStep.stepNumber}: {currentStep.role}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {currentStep.headline}
              </h3>
              <p className="mt-4 text-sm md:text-base text-[#F5E1FA]/85 leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {currentStep.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#F5E1FA]/90">
                  <span
                    className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${currentStep.accentHex}22`,
                      color: currentStep.accentHex,
                      border: `1px solid ${currentStep.accentHex}66`,
                    }}
                  >
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a href={currentStep.href} className="inline-block">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto px-8 py-4 font-semibold shadow-lg transition-transform hover:scale-105"
                  style={{
                    backgroundColor: currentStep.accentHex,
                    borderColor: currentStep.accentHex,
                  }}
                >
                  {currentStep.ctaText} →
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Screenshot Showcase */}
          <div className="lg:col-span-7 relative">
            <div
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group bg-[#1D0548]/90 aspect-[16/10]"
              style={{
                boxShadow: `0 20px 50px -10px ${currentStep.accentHex}44`,
              }}
            >
              {/* Browser bar mockup for authenticity */}
              <div className="bg-[#150336] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="bg-[#1D0548] px-4 py-1 rounded-md border border-white/5 font-mono text-xs text-[#F5E1FA]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span>app.jmo.africa/{currentStep.id}</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Screenshot Image */}
              <div className="relative w-full h-full pb-[2.5rem]">
                <Image
                  src={currentStep.imagePath}
                  alt={currentStep.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>

              {/* Floating Verification Overlay */}
              <div className="absolute bottom-4 right-4 bg-[#150336]/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-lg flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full animate-ping"
                  style={{ backgroundColor: currentStep.accentHex }}
                />
                <span className="text-xs font-mono font-medium text-white">
                  Live {currentStep.name} Prototype Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
