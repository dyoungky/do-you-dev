// Shared data source for the Solutions section: package tiers and the
// selectable "solution design" templates (based on real projects).

export type Tier = "wordpress" | "frontend" | "fullstack";

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
    ongoing: [
      { label: "Domain (.dk)", cost: "40–90 kr./year" },
      { label: "Managed hosting", cost: "40–250 kr./month" },
      { label: "Business email (Google Workspace)", cost: "45–72 kr./user/month" },
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
    ongoing: [
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Hosting (Vercel)", cost: "Free – ~150 kr./month (Pro)" },
      { label: "CMS (Sanity)", cost: "Free tier, then usage-based" },
      { label: "Business email", cost: "45–72 kr./user/month" },
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
    ongoing: [
      { label: "Domain", cost: "40–90 kr./year" },
      { label: "Hosting (Vercel)", cost: "~150 kr./month" },
      { label: "Database (Supabase / Neon)", cost: "Free – ~190 kr./month" },
      { label: "Business email", cost: "45–72 kr./user/month" },
      { label: "Payments (Stripe)", cost: "per-transaction fee" },
    ],
  },
];

export const tierLabels: Record<Tier, string> = {
  wordpress: "WordPress Starter",
  frontend: "Custom Frontend",
  fullstack: "Full-Stack Web App",
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
  github: string | null;
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
    title: "NAME",
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
    github: "https://github.com/dyoungky/ITU-FinalProject-NAME",
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
    title: "Ferm Living",
    tier: "frontend",
    tag: "CUSTOM FRONTEND / REACT",
    year: "2022",
    role: "UI Design & Frontend",
    designTime: "8–12 dage",
    desc: "A clean, image-led catalogue for a design brand. Pick this design for a fast, bespoke marketing site with beautiful product browsing.",
    overview:
      "Product browsing experience for a furniture brand, focused on intuitive navigation and visual hierarchy using React — a great template for brand and catalogue sites.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/ferm-resposible.gif",
    tech: ["React", "Next.js", "Tailwind"],
    github: "https://github.com/dyoungky/FermLiving",
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
    title: "Back Roads",
    tier: "frontend",
    tag: "CUSTOM FRONTEND / TRAVEL",
    year: "2022",
    role: "UI Design & Frontend",
    designTime: "7–10 dage",
    desc: "A destination-browsing site for a travel agency. Pick this design for content-rich marketing sites with listings and packages.",
    overview:
      "Travel agency web app built with React where users browse destinations and packages — a flexible template for any listing-based marketing site.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Backroads-responsible.gif",
    tech: ["React", "Next.js", "Tailwind"],
    github: "https://github.com/dyoungky/BACKROADS",
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
    title: "Dkemy",
    tier: "wordpress",
    tag: "WORDPRESS / STARTER",
    year: "2022",
    role: "Design & Development",
    designTime: "5–8 dage",
    desc: "A custom-themed WordPress site you can edit yourself. Pick this design for the fastest, most affordable route online.",
    overview:
      "Custom WordPress site with a tailored theme focused on brand consistency and content readability — the ideal starting point for small businesses.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Dkemy.gif",
    tech: ["WordPress", "Custom theme", "PHP"],
    github: null,
    live: null,
    deployment: "Managed WordPress hosting with automatic backups and SSL",
    hosting: "Simply.com / One.com / SiteGround",
    ongoing: [
      { label: "Domain (.dk)", cost: "40–90 kr./year" },
      { label: "Managed hosting", cost: "40–250 kr./month" },
      { label: "Business email", cost: "45–72 kr./user/month" },
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
];

export function getDesign(slug: string): SolutionDesign | undefined {
  return designs.find((d) => d.slug === slug);
}
