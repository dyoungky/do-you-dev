// Shared data source for the Solutions section: package tiers and the
// selectable "solution design" templates (based on real projects).

export type Tier = "wordpress" | "frontend" | "fullstack" | "shopify" | "brand" | "app";

export type OngoingCost = { label: string; cost: string };

export type Package = {
  id: Tier;
  name: string;
  tagline: string;
  priceFrom: string;
  buildTime: string;
  bestFor: string;
  stack: string[];
  deployment: string;
  includes: string[];
  marketingIncludes: string[];
  ongoing: OngoingCost[];
  highlight?: boolean;
};

export const packages: Package[] = [
  {
    id: "wordpress",
    name: "WordPress Starter",
    tagline: "A polished, editable site — up fast and easy to maintain.",
    priceFrom: "Fra 6.500 kr.",
    buildTime: "5–8 dage",
    bestFor: "Local businesses, restaurants, clinics, tradespeople",
    stack: ["WordPress", "Custom theme", "Gutenberg / Elementor"],
    deployment: "Managed WordPress hosting (Simply.com, One.com or SiteGround)",
    includes: [
      "UX/UI design in Figma",
      "Responsive custom theme",
      "Up to 5 content pages",
      "Contact form & Google Maps",
      "Basic on-page SEO setup",
      "1 hand-over & training session",
    ],
    marketingIncludes: [
      "Yoast SEO plugin — configured & verified",
      "XML sitemap auto-generated",
      "Page speed optimised (image compression, caching)",
      "Google Search Console submission",
      "Analytics script-ready (GA4 or Plausible)",
    ],
    ongoing: [
      { label: "Domain (.dk)", cost: "40–90 kr./year" },
      { label: "Managed hosting", cost: "40–250 kr./month" },
      { label: "SSL certificate", cost: "Included" },
      { label: "Maintenance (optional)", cost: "from 500 kr./month" },
    ],
  },
  {
    id: "frontend",
    name: "Custom Frontend",
    tagline: "A bespoke React/Next.js site — fast, animated, one-of-a-kind.",
    priceFrom: "Fra 18.000 kr.",
    buildTime: "8–15 dage",
    bestFor: "Brands, portfolios, marketing sites, professional services",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Sanity CMS (optional)"],
    deployment: "Vercel / Netlify — global CDN, automatic deploys from Git",
    includes: [
      "Everything in WordPress Starter",
      "Bespoke design system & components",
      "Smooth animations & interactions",
      "Optional headless CMS (edit content yourself)",
      "Perfect Lighthouse performance targets",
      "Technical SEO baseline (metadata, sitemap, schema)",
    ],
    marketingIncludes: [
      "JSON-LD structured data (LocalBusiness / Service)",
      "OpenGraph + Twitter card metadata",
      "sitemap.xml + robots.txt",
      "Core Web Vitals optimised — Lighthouse ≥ 90",
      "Analytics-ready (one script = GA4 or Plausible)",
      "GTM-ready (add any ad pixel without touching code)",
    ],
    ongoing: [
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Hosting (Vercel)", cost: "Free – ~150 kr./month (Pro)" },
      { label: "CMS (Sanity)", cost: "Free tier, then usage-based" },
    ],
    highlight: true,
  },
  {
    id: "fullstack",
    name: "Full-Stack Web App",
    tagline: "A complete product — frontend, backend, database and auth.",
    priceFrom: "Fra 40.000 kr.",
    buildTime: "3–6 weeks",
    bestFor: "E-commerce, SaaS, booking systems, dashboards",
    stack: ["Next.js", "Node / API routes", "PostgreSQL", "Auth", "Payments"],
    deployment: "Vercel + managed database (Supabase / Neon), auth & file storage",
    includes: [
      "Everything in Custom Frontend",
      "Database design & REST/RPC API",
      "User accounts & authentication",
      "Admin panel / content management",
      "Payment integration (Stripe / MobilePay)",
      "Deployment, monitoring & documentation",
    ],
    marketingIncludes: [
      "Everything in Custom Frontend",
      "Conversion event tracking on key user actions",
      "GTM dataLayer integration",
      "Google Ads + Meta Pixel ready",
      "Performance & error monitoring",
    ],
    ongoing: [
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Hosting (Vercel)", cost: "~150 kr./month" },
      { label: "Database (Supabase / Neon)", cost: "Free – ~190 kr./month" },
      { label: "Payments (Stripe)", cost: "per-transaction fee" },
    ],
  },
  {
    id: "shopify",
    name: "Shopify E-Commerce",
    tagline: "A fully branded store — launch fast, sell from day one.",
    priceFrom: "Fra 15.000 kr.",
    buildTime: "6–10 dage",
    bestFor: "Brands, boutiques, D2C products",
    stack: ["Shopify", "Liquid", "Custom theme", "Klaviyo"],
    deployment: "Shopify-hosted — managed checkout, CDN and payments built in",
    includes: [
      "UX/UI design in Figma",
      "Custom Liquid theme (or premium theme customised)",
      "Product catalogue & collections setup",
      "Payment, shipping & tax configuration",
      "Klaviyo abandoned-cart & welcome flows",
      "On-page SEO + product schema markup",
    ],
    marketingIncludes: [
      "Product & collection schema (rich snippets)",
      "SEO metadata for all product & collection pages",
      "Google Shopping feed ready",
      "Klaviyo flows — welcome series & abandoned cart",
      "Facebook & Instagram Shop integration",
      "Analytics-ready (GA4 + Shopify native analytics)",
    ],
    ongoing: [
      { label: "Shopify Basic", cost: "~280 kr./month" },
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Transaction fees (Stripe)", cost: "per-transaction" },
      { label: "Klaviyo", cost: "Free up to 500 contacts" },
    ],
  },
  {
    id: "brand",
    name: "Brand Identity",
    tagline: "Logo, colour, typography and guidelines — a foundation to build on.",
    priceFrom: "Fra 8.500 kr.",
    buildTime: "5–8 dage",
    bestFor: "Startups, relaunches, product launches",
    stack: ["Figma", "Illustrator", "Brand guidelines PDF", "Asset exports"],
    deployment: "Delivered as Figma file + PDF brand book + SVG/PNG/PDF exports",
    includes: [
      "Brand discovery workshop (1 hour)",
      "Logo design — 3 concepts, 2 revision rounds",
      "Colour palette & typography system",
      "Brand guidelines document",
      "Digital & print-ready asset exports",
      "Social media templates (Instagram, LinkedIn)",
    ],
    marketingIncludes: [
      "Consistent visual identity across all touchpoints",
      "Social media kit — profile, cover & post templates",
      "Brand-ready for Meta Ads & Google Display",
      "Favicon & app icon variants",
      "Email signature template",
      "Open Graph / social share image template",
    ],
    ongoing: [
      { label: "Figma (optional)", cost: "Free tier available" },
      { label: "Font licences (if needed)", cost: "Varies by typeface" },
    ],
  },
  {
    id: "app",
    name: "Mobile App",
    tagline: "A native-feeling app for iOS & Android — or a Progressive Web App.",
    priceFrom: "Fra 35.000 kr.",
    buildTime: "4–8 uger",
    bestFor: "SaaS, booking systems, loyalty & membership apps",
    stack: ["React Native", "Expo", "TypeScript", "Supabase"],
    deployment: "App Store & Google Play via Expo EAS — or Vercel for PWA",
    includes: [
      "UX/UI design in Figma (iOS & Android screens)",
      "React Native cross-platform build",
      "Push notifications & deep links",
      "Authentication (email, Google, Apple Sign-In)",
      "Backend API & database",
      "App Store & Play Store submission",
    ],
    marketingIncludes: [
      "App Store Optimisation (ASO) basics",
      "App icon, screenshots & store listing copy",
      "Deep link support for paid ad campaigns",
      "Analytics integration (Mixpanel / PostHog)",
      "Crash reporting & performance monitoring",
      "Attribution-ready (AppsFlyer / Adjust)",
    ],
    ongoing: [
      { label: "Apple Developer", cost: "~700 kr./year" },
      { label: "Google Play", cost: "one-time ~160 kr." },
      { label: "Expo EAS Build", cost: "Free – ~150 kr./month" },
      { label: "Backend (Supabase)", cost: "Free – ~190 kr./month" },
    ],
  },
];

export const tierLabels: Record<Tier, string> = {
  wordpress: "WordPress Starter",
  frontend: "Custom Frontend",
  fullstack: "Full-Stack Web App",
  shopify: "Shopify E-Commerce",
  brand: "Brand Identity",
  app: "Mobile App",
};

export type SolutionDesign = {
  slug: string;
  title: string;
  tier: Tier;
  tag: string;
  year: string;
  role: string;
  designTime: string;
  desc: string;
  overview: string;
  img: string;
  tech: string[];
  live: string | null;
  deployment: string;
  hosting: string;
  ongoing: OngoingCost[];
  process: { heading: string; body: string }[];
  outcome: string;
};

export const designs: SolutionDesign[] = [
  {
    slug: "name-ecommerce",
    title: "Full-Stack — E-Commerce Shop",
    tier: "fullstack",
    tag: "FULL-STACK / E-COMMERCE",
    year: "2023",
    role: "Design & Development",
    designTime: "18–25 dage",
    desc: "A complete online shop with cart, checkout and a REST API backend. Pick this design if you sell products and need the full stack.",
    overview:
      "Full-stack e-commerce platform. Started as a plain HTML/CSS/JS prototype and evolved into a React + Node.js application with a REST API — a solid blueprint for any product-selling business.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Name.gif",
    tech: ["React", "TypeScript", "Node.js", "Express", "REST API"],
    live: null,
    deployment: "Next.js frontend on Vercel + Node API and PostgreSQL on a managed host",
    hosting: "Vercel (frontend) + Supabase/Neon (database) + Stripe (payments)",
    ongoing: [
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Hosting (Vercel)", cost: "~150 kr./month" },
      { label: "Database", cost: "Free – ~190 kr./month" },
      { label: "Payments (Stripe)", cost: "per-transaction fee" },
    ],
    process: [
      { heading: "01 — Research & scope", body: "Map the product catalogue, checkout flow, and the data model behind orders and customers." },
      { heading: "02 — UX & wireframes", body: "Design the browsing, cart and checkout journeys for clarity and trust." },
      { heading: "03 — Frontend build", body: "Component-driven React/Next.js UI wired to the API with proper state handling." },
      { heading: "04 — Backend & payments", body: "REST API, database, authentication and payment integration, then deploy." },
    ],
    outcome:
      "A production-ready commerce blueprint you can rebrand and launch — typically 18–25 working days from kickoff to live.",
  },
  {
    slug: "ferm-living",
    title: "Custom Frontend — Brand Catalogue",
    tier: "frontend",
    tag: "CUSTOM FRONTEND / BRAND",
    year: "2022",
    role: "UI Design & Frontend",
    designTime: "8–12 dage",
    desc: "A clean, image-led catalogue for a design brand. Pick this design for a fast, bespoke marketing site with beautiful product browsing.",
    overview:
      "Product browsing experience for a furniture brand, focused on intuitive navigation and visual hierarchy using React — a great template for brand and catalogue sites.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/ferm-resposible.gif",
    tech: ["React", "Next.js", "Tailwind"],
    live: "https://react-fermliving-dy.netlify.app/",
    deployment: "Static/SSR frontend deployed to Vercel or Netlify",
    hosting: "Vercel / Netlify — global CDN, optional Sanity CMS",
    ongoing: [
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Hosting (Vercel)", cost: "Free – ~150 kr./month" },
      { label: "CMS (optional)", cost: "Free tier, then usage-based" },
    ],
    process: [
      { heading: "01 — Concept", body: "Define the visual language, grid and browsing model for the catalogue." },
      { heading: "02 — Layout exploration", body: "Card layouts, filtering and responsive behaviour across devices." },
      { heading: "03 — React build", body: "Component structure, content model and image optimisation." },
      { heading: "04 — Polish", body: "Micro-interactions, performance tuning and SEO baseline." },
    ],
    outcome:
      "A bespoke brand/catalogue site you own end-to-end — typically 8–12 working days.",
  },
  {
    slug: "back-roads",
    title: "Custom Frontend — Listings Site",
    tier: "frontend",
    tag: "CUSTOM FRONTEND / LISTINGS",
    year: "2022",
    role: "UI Design & Frontend",
    designTime: "7–10 dage",
    desc: "A destination-browsing site for a travel agency. Pick this design for content-rich marketing sites with listings and packages.",
    overview:
      "Travel agency web app built with React where users browse destinations and packages — a flexible template for any listing-based marketing site.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Backroads-responsible.gif",
    tech: ["React", "Next.js", "Tailwind"],
    live: "https://react-backroads-dy.netlify.app/",
    deployment: "Static/SSR frontend deployed to Vercel or Netlify",
    hosting: "Vercel / Netlify — global CDN, optional headless CMS for listings",
    ongoing: [
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Hosting (Vercel)", cost: "Free – ~150 kr./month" },
      { label: "CMS (optional)", cost: "Free tier, then usage-based" },
    ],
    process: [
      { heading: "01 — Information architecture", body: "Structure destinations, packages and categories for easy discovery." },
      { heading: "02 — Wireframes", body: "Listing pages, detail pages and enquiry flow." },
      { heading: "03 — React build", body: "Reusable listing components wired to a content source." },
      { heading: "04 — Launch", body: "Responsive polish, SEO baseline and deployment." },
    ],
    outcome:
      "A content-rich listing site ready to fill with your own destinations or services — typically 7–10 working days.",
  },
  {
    slug: "dkemy",
    title: "WordPress Starter — Business Site",
    tier: "wordpress",
    tag: "WORDPRESS STARTER",
    year: "2022",
    role: "Design & Development",
    designTime: "5–8 dage",
    desc: "A custom-themed WordPress site you can edit yourself. Pick this design for the fastest, most affordable route online.",
    overview:
      "Custom WordPress site with a tailored theme focused on brand consistency and content readability — the ideal starting point for small businesses.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Dkemy.gif",
    tech: ["WordPress", "Custom theme", "PHP"],
    live: null,
    deployment: "Managed WordPress hosting with automatic backups and SSL",
    hosting: "Simply.com / One.com / SiteGround",
    ongoing: [
      { label: "Domain (.dk)", cost: "40–90 kr./year" },
      { label: "Managed hosting", cost: "40–250 kr./month" },
      { label: "Maintenance (optional)", cost: "from 500 kr./month" },
    ],
    process: [
      { heading: "01 — Brand discovery", body: "Mood boards, brand values and reference gathering." },
      { heading: "02 — Wireframes", body: "Low-fi layouts and page structure." },
      { heading: "03 — Visual design", body: "Typography, colour and component choices in Figma." },
      { heading: "04 — WordPress build", body: "Custom theme, content entry and a training hand-over." },
    ],
    outcome:
      "A self-editable, professional site live in about a week — typically 5–8 working days.",
  },
  {
    slug: "shopify-store",
    title: "Shopify — DTC Fashion Store",
    tier: "shopify",
    tag: "SHOPIFY / E-COMMERCE",
    year: "2024",
    role: "Design & Shopify Development",
    designTime: "6–10 dage",
    desc: "A fully branded Shopify store with a custom Liquid theme, product catalogue and Klaviyo flows. Pick this design for a fast, polished DTC launch.",
    overview:
      "End-to-end Shopify build — custom Liquid theme, collections, abandoned-cart email flows and Google Shopping integration. A solid blueprint for any product-selling brand.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Name.gif",
    tech: ["Shopify", "Liquid", "Klaviyo", "Figma"],
    live: null,
    deployment: "Shopify-hosted — managed checkout, CDN and payments",
    hosting: "Shopify Basic — no separate hosting needed",
    ongoing: [
      { label: "Shopify Basic", cost: "~280 kr./month" },
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Klaviyo", cost: "Free up to 500 contacts" },
    ],
    process: [
      { heading: "01 — Discovery", body: "Map product catalogue, collections, brand guidelines and checkout requirements." },
      { heading: "02 — UX & visual design", body: "Design all key screens in Figma — home, PLP, PDP, cart and checkout." },
      { heading: "03 — Liquid theme build", body: "Custom Liquid sections and blocks wired to Shopify's data model." },
      { heading: "04 — Integrations & launch", body: "Klaviyo flows, Google Shopping feed, analytics and final QA before go-live." },
    ],
    outcome:
      "A launch-ready branded Shopify store — typically 6–10 working days from kickoff to live.",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity — Visual System",
    tier: "brand",
    tag: "BRAND IDENTITY",
    year: "2024",
    role: "Brand Design",
    designTime: "5–8 dage",
    desc: "A complete visual identity — logo, colour, type and guidelines. Pick this design for a strong brand foundation before a website or app build.",
    overview:
      "Full brand identity project: logo family, colour palette, typography system, brand guidelines document and a full asset export pack — everything you need to build on.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/ferm-resposible.gif",
    tech: ["Figma", "Illustrator", "Brand guidelines PDF"],
    live: null,
    deployment: "Figma master file + PDF brand book + SVG/PNG/PDF exports",
    hosting: "No hosting required — files delivered via shared Figma & download link",
    ongoing: [
      { label: "Figma (optional)", cost: "Free tier available" },
      { label: "Font licences (if needed)", cost: "Varies by typeface" },
    ],
    process: [
      { heading: "01 — Discovery workshop", body: "1-hour session to align on brand values, audience, competitors and visual references." },
      { heading: "02 — Concept exploration", body: "3 distinct logo directions with rationale — rooted in the discovery findings." },
      { heading: "03 — Refinement", body: "2 rounds of revisions on the chosen direction, building out the full system." },
      { heading: "04 — Delivery", body: "Brand guidelines PDF, Figma file handover, and all production-ready asset exports." },
    ],
    outcome:
      "A cohesive visual identity ready to apply across web, print and social — typically 5–8 working days.",
  },
  {
    slug: "mobile-app",
    title: "Mobile App — React Native",
    tier: "app",
    tag: "MOBILE APP / REACT NATIVE",
    year: "2024",
    role: "Design & Development",
    designTime: "4–8 uger",
    desc: "A cross-platform app for iOS & Android built with React Native. Pick this design for a booking, membership or SaaS product that needs a mobile presence.",
    overview:
      "React Native app designed and built from scratch — authentication, push notifications, a Supabase backend and a smooth App Store submission workflow.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Backroads-responsible.gif",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    live: null,
    deployment: "App Store & Google Play via Expo EAS — continuous delivery from Git",
    hosting: "Expo EAS (builds) + Supabase (backend) + Expo Push Notifications",
    ongoing: [
      { label: "Apple Developer", cost: "~700 kr./year" },
      { label: "Google Play", cost: "one-time ~160 kr." },
      { label: "Expo EAS Build", cost: "Free – ~150 kr./month" },
      { label: "Backend (Supabase)", cost: "Free – ~190 kr./month" },
    ],
    process: [
      { heading: "01 — Scoping & UX", body: "Define core user journeys, navigation structure and API shape." },
      { heading: "02 — UI design", body: "Full screen designs in Figma for both iOS and Android form factors." },
      { heading: "03 — App build", body: "React Native screens, navigation, auth, API integration and push notifications." },
      { heading: "04 — Store submission", body: "App icon, screenshots, store listing copy and submission to both stores." },
    ],
    outcome:
      "A production app live on App Store and Google Play — typically 4–8 weeks from kickoff.",
  },
];

export function getDesign(slug: string): SolutionDesign | undefined {
  return designs.find((d) => d.slug === slug);
}
