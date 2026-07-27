import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "JMO — Media, BizHub, Academy",
  description: "One ecosystem for content, commerce, and learning.",
  // TODO: full OG meta tags from the brand system doc
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[var(--bg-page)] text-[var(--text-page)] flex flex-col selection:bg-[#915AD4] selection:text-white antialiased transition-colors duration-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
