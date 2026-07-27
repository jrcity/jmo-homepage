"use client";

import { useEffect, useState } from "react";

/**
 * ThemeToggle Component — Sleek Light/Dark Mode Switcher.
 * Toggles the 'dark' class on the document root and persists user preference in localStorage.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial state from DOM or localStorage
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border border-[#6D508C]/30 bg-[#3E1A6E]/40 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle-btn relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#6D508C]/50 bg-[#3E1A6E]/50 dark:bg-[#3E1A6E]/50 bg-white/80 p-2 text-[#F5E1FA] dark:text-[#F5E1FA] text-[#1D0548] shadow-md hover:scale-105 hover:border-[#DBA0F7] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#915AD4]"
    >
      {isDark ? (
        // Sun Icon (when in dark mode, click to go light)
        <svg
          className="h-5 w-5 text-[#DBA0F7] animate-in spin-in-180 duration-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon Icon (when in light mode, click to go dark)
        <svg
          className="h-5 w-5 text-[#6D508C] animate-in spin-in-180 duration-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
