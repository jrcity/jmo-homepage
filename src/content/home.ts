import { routes } from "@/lib/routes";

/**
 * Decoupled structured copy for JMO Homepage — ADR 002.
 * All marketing copy is swappable here so non-engineers can edit text
 * without modifying React components.
 */

export const homeContent = {
  nav: {
    ctaLabel: "Get started",
  },
  hero: {
    headline: "One Ecosystem. Three Powerhouse Engines.",
    subhead:
      "The Pan-African professional loop: Media attracts audience and insight, Academy develops verifiable skills, and BizHub enables sustainable income—all under one unified identity.",
    primaryCta: "Explore BizHub",
    secondaryCta: "Learn more",
  },
  stats: [
    {
      value: "1 Identity",
      label: "Unified Account",
      description: "Seamless access across Media, Academy, & BizHub",
    },
    {
      value: "3 Engines",
      label: "Growth Loop",
      description: "Attract, develop, and monetize your professional career",
    },
    {
      value: "100%",
      label: "Pan-African",
      description: "Built for African talent, freelancers, and enterprises",
    },
    {
      value: "Verified",
      label: "Trust & Escrow",
      description: "Cryptographic credentials and secure escrow transactions",
    },
  ],
  productsSection: {
    title: "One ecosystem, three engines",
    subtitle: "Every step of your professional journey is connected and empowered.",
    products: [
      {
        title: "JMO Media",
        role: "Attract & Inform",
        description:
          "The content and storytelling engine. Dive into articles across 9 development areas—from economic & financial to civic leadership—designed to inform and inspire.",
        href: routes.media,
        accentHex: "#B959D4", // magenta lean
        ctaText: "Visit Media",
        imagePath: "/images/engine-media.png",
      },
      {
        title: "JMO Academy",
        role: "Develop & Certify",
        description:
          "The adult career-learning platform. Master practical tracks, submit peer-reviewed projects, pass rigorous assessments, and earn verifiable credentials.",
        href: routes.academy,
        accentHex: "#5E59D4", // indigo lean
        ctaText: "Explore Academy",
        imagePath: "/images/engine-academy.png",
      },
      {
        title: "JMO BizHub",
        role: "Enable Income",
        description:
          "The professional marketplace. Monetize your skills with verified services, physical and digital products, multi-currency checkout, and secure escrow.",
        href: routes.bizhub,
        accentHex: "#CA4599", // berry/wine lean
        ctaText: "Enter BizHub",
        imagePath: "/images/engine-bizhub.png",
      },
    ],
  },
  newsletter: {
    title: "Stay updated with JMO",
    description:
      "Get the latest insights on career growth, newly launched certifications, and marketplace opportunities across Africa.",
    buttonText: "Subscribe",
    loadingText: "Submitting...",
    successText: "Welcome to the ecosystem. You're subscribed.",
    errorText: "Something went wrong. Please check your email and try again.",
  },
  walkthroughSection: {
    title: "How the JMO Loop Works",
    subtitle: "A step-by-step visual walkthrough of your professional growth journey under one unified identity.",
    steps: [
      {
        id: "media",
        stepNumber: "01",
        name: "JMO Media",
        role: "Attract & Inform",
        headline: "Discover high-signal insights & storytelling",
        description:
          "Start your journey by exploring cutting-edge journalism and editorial features across 9 vital development sectors. Gain the knowledge and market intelligence needed to shape your career in the digital economy.",
        bullets: [
          "Curated articles on AI, fintech, civic leadership, and creative economics",
          "Open-access digital magazine format tailored for African innovators",
          "Instantly bookmark and sync insights to your unified JMO profile",
        ],
        imagePath: "/images/walkthrough-media.png",
        accentHex: "#B959D4",
        ctaText: "Explore Media Insights",
        href: routes.media,
      },
      {
        id: "academy",
        stepNumber: "02",
        name: "JMO Academy",
        role: "Develop & Certify",
        headline: "Master practical skills & earn cryptographic credentials",
        description:
          "Transform knowledge into verifiable expertise. Enroll in rigorous career tracks, submit peer-reviewed practical projects, and graduate with tamper-proof blockchain certificates recognized by top employers.",
        bullets: [
          "Interactive video modules taught by leading African practitioners",
          "Peer-reviewed project submissions and hands-on portfolio building",
          "On-chain verifiable cryptographic credentials linked to your identity",
        ],
        imagePath: "/images/walkthrough-academy.png",
        accentHex: "#5E59D4",
        ctaText: "Browse Academy Tracks",
        href: routes.academy,
      },
      {
        id: "bizhub",
        stepNumber: "03",
        name: "JMO BizHub",
        role: "Enable Income",
        headline: "Monetize your expertise in a verified marketplace",
        description:
          "Turn your verified credentials directly into sustainable income. List freelance services, digital products, or consulting packages in a high-trust marketplace equipped with multi-currency African checkout and milestone escrow.",
        bullets: [
          "Direct integration with Academy credentials for instant client trust",
          "Multi-currency checkout supporting NGN, KES, GHS, ZAR, and USD",
          "Milestone-based escrow protection for secure, worry-free contracts",
        ],
        imagePath: "/images/walkthrough-bizhub.png",
        accentHex: "#CA4599",
        ctaText: "Enter the Marketplace",
        href: routes.bizhub,
      },
    ],
  },
  testimonialsSection: {
    title: "Ecosystem Stories",
    subtitle: "Real Pan-African professionals building their careers across Media, Academy, and BizHub.",
    items: [
      {
        id: "test-1",
        quote:
          "JMO changed the game for me. I discovered AI leadership trends on Media, completed my full-stack certification on Academy, and immediately landed 3 enterprise consulting contracts on BizHub. The unified account makes everything seamless.",
        author: "Sarah Jenkins-Okafor",
        role: "Creative Tech Founder & Certified Engineer",
        location: "Lagos, Nigeria",
        rating: 5,
        avatarPath: "/images/testimonial-1.png",
      },
      {
        id: "test-2",
        quote:
          "As a blockchain consultant in Nairobi, having verifiable cryptographic badges from Academy linked directly to my BizHub service listings increased my client conversion rate by over 60%. The escrow checkout is flawless.",
        author: "Alex Mwangi",
        role: "Fintech & Blockchain Architect",
        location: "Nairobi, Kenya",
        rating: 5,
        avatarPath: "/images/testimonial-2.png",
      },
      {
        id: "test-3",
        quote:
          "The storytelling on JMO Media first drew me in. Today, I mentor young designers in Accra through Academy tracks while selling UI/UX design kits on BizHub. It is truly the premier growth loop for African talent.",
        author: "Efua Mensah",
        role: "Digital Product Designer & Academy Mentor",
        location: "Accra, Ghana",
        rating: 5,
        avatarPath: "/images/testimonial-3.png",
      },
    ],
  },
  aboutContent: {
    heroTitle: "Empowering the Pan-African Professional Loop",
    heroSubtitle:
      "We believe Africa's greatest resource is its human capital. JMO was built to solve the fragmentation between learning, storytelling, and earning.",
    communityImage: "/images/about-community.png",
    storyTitle: "Why One Unified Ecosystem?",
    storyParagraphs: [
      "Historically, African professionals and creatives have had to navigate fragmented platforms—reading industry news on one site, taking courses on international platforms that don't recognize local contexts, and struggling to monetize on global marketplaces plagued by payment barriers.",
      "JMO bridges this divide. By uniting Media (Attract), Academy (Develop), and BizHub (Monetize) under a single, cryptographic Pan-African identity, we create a continuous growth loop where learning directly fuels earning power, and community insight guides career development.",
    ],
    pillars: [
      {
        title: "High-Signal Journalism",
        description: "Equipping professionals with deep analytical insights across 9 key African economic and social development sectors.",
        accentHex: "#B959D4",
      },
      {
        title: "Verifiable Excellence",
        description: "Replacing outdated resumes with practical project portfolios and cryptographic badges that prove real-world competency.",
        accentHex: "#5E59D4",
      },
      {
        title: "Border-Free Monetization",
        description: "Enabling freelancers and businesses to transact seamlessly with escrow security and local currency payouts across the continent.",
        accentHex: "#CA4599",
      },
    ],
  },
  footer: {
    tagline: "Media, BizHub, and Academy — one Pan-African ecosystem.",
    copyright: `© ${new Date().getFullYear()} JMO. All rights reserved.`,
  },
};
