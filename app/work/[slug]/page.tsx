import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const projects: Record<string, {
  title: string;
  tag: string;
  year: string;
  role: string;
  overview: string;
  problem: string;
  img: string;
  sketches: string[];
  process: { heading: string; body: string }[];
  outcome: string;
}> = {
  "name-ecommerce": {
    title: "NAME",
    tag: "FULL-STACK / E-COMMERCE",
    year: "2023",
    role: "Design & Development",
    overview:
      "Full-stack e-commerce platform built at ITU. Started as a plain HTML/CSS/JS prototype and evolved into a React + Node.js application with a REST API.",
    problem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The challenge was to design a seamless shopping experience while managing complex state across a full-stack architecture.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Name.gif",
    sketches: [
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=900&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=80",
    ],
    process: [
      {
        heading: "01 — Research & Problem Definition",
        body: "Placeholder: describe how you identified user needs, competitors, and project constraints.",
      },
      {
        heading: "02 — Idea & Sketching",
        body: "Placeholder: early whiteboard sketches, user flow diagrams, and initial wireframes.",
      },
      {
        heading: "03 — Design Iteration",
        body: "Placeholder: how the visual design evolved, key decisions made, and what was cut.",
      },
      {
        heading: "04 — Development",
        body: "Placeholder: technical decisions, architecture choices, and challenges solved in code.",
      },
    ],
    outcome:
      "Placeholder: what the final product looked like, what you learned, and what you'd do differently.",
  },
  "dkemy": {
    title: "Dkemy",
    tag: "UI DESIGN / WORDPRESS",
    year: "2022",
    role: "Design & Development",
    overview: "Custom WordPress site with a tailored theme focused on brand consistency and content readability.",
    problem: "Placeholder: describe the client's original site problems and what needed to change.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Dkemy.gif",
    sketches: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=80",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80",
    ],
    process: [
      { heading: "01 — Brand Discovery", body: "Placeholder: mood boards, brand values, reference gathering." },
      { heading: "02 — Wireframes", body: "Placeholder: low-fi wireframes and layout exploration." },
      { heading: "03 — Visual Design", body: "Placeholder: typography, color, component choices." },
      { heading: "04 — WordPress Build", body: "Placeholder: theme development, plugin choices, content migration." },
    ],
    outcome: "Placeholder: final result and client feedback.",
  },
  "ferm-living": {
    title: "Ferm Living",
    tag: "UX/UI DESIGN / REACT",
    year: "2022",
    role: "UI Design & Frontend",
    overview: "Product browsing app for a furniture brand. Focused on intuitive navigation and visual hierarchy using React.",
    problem: "Placeholder: the design challenge and what made this project interesting.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/ferm-resposible.gif",
    sketches: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    process: [
      { heading: "01 — Concept", body: "Placeholder: initial concept and design goals." },
      { heading: "02 — Layout Exploration", body: "Placeholder: grid systems, card layouts, filtering UI." },
      { heading: "03 — React Build", body: "Placeholder: component structure and state management." },
      { heading: "04 — Polish", body: "Placeholder: micro-interactions and final refinements." },
    ],
    outcome: "Placeholder: live demo link and what you'd expand on.",
  },
  "back-roads": {
    title: "Back Roads",
    tag: "REACT / TRAVEL",
    year: "2022",
    role: "UI Design & Frontend",
    overview: "Travel agency web app built with React. Users can browse destinations and travel packages.",
    problem: "Placeholder: describe the UX problem and what travel-specific challenges came up.",
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Backroads-responsible.gif",
    sketches: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    ],
    process: [
      { heading: "01 — User Research", body: "Placeholder: target users, their travel planning habits." },
      { heading: "02 — Information Architecture", body: "Placeholder: how content was structured and categorised." },
      { heading: "03 — Prototyping", body: "Placeholder: interactive prototype and user feedback." },
      { heading: "04 — React Implementation", body: "Placeholder: component breakdown and API integration." },
    ],
    outcome: "Placeholder: results and what you learned about travel UX.",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-8 mb-20">
          <Link href="/work" className="text-xs tracking-[0.12em] uppercase text-[#324b75]/40 hover:text-[#324b75] transition-colors mb-8 inline-block">
            ← All Work
          </Link>
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">{project.tag} — {project.year}</p>
          <h1
            className="text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1a1f3c]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.title}
          </h1>
          <p className="text-[15px] text-[#324b75]/60 max-w-xl leading-relaxed">{project.overview}</p>

          <div className="flex gap-8 mt-8 text-xs tracking-[0.1em] uppercase text-[#324b75]/40">
            <div>
              <p className="mb-1 text-[#324b75]/25">Role</p>
              <p className="text-[#324b75]/70">{project.role}</p>
            </div>
            <div>
              <p className="mb-1 text-[#324b75]/25">Year</p>
              <p className="text-[#324b75]/70">{project.year}</p>
            </div>
          </div>
        </div>

        {/* Main image */}
        <div className="max-w-6xl mx-auto px-8 mb-24">
          <div className="overflow-hidden bg-[#e8e4dd] aspect-[16/9]">
            <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Problem */}
        <div className="max-w-6xl mx-auto px-8 mb-24 grid md:grid-cols-[1fr_2fr] gap-16">
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 pt-1">The Problem</p>
          <p className="text-[17px] text-[#1a1f3c] leading-relaxed">{project.problem}</p>
        </div>

        {/* Idea Sketches */}
        <div className="max-w-6xl mx-auto px-8 mb-24">
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-8">Idea Sketches</p>
          <div className="grid md:grid-cols-2 gap-4">
            {project.sketches.map((src, i) => (
              <div key={i} className="overflow-hidden bg-[#e8e4dd] aspect-[4/3]">
                <img src={src} alt={`Sketch ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="max-w-6xl mx-auto px-8 mb-24">
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-12">Process</p>
          <div className="divide-y divide-[#324b75]/8">
            {project.process.map((step) => (
              <div key={step.heading} className="py-10 grid md:grid-cols-[1fr_2fr] gap-16">
                <h3
                  className="text-xl text-[#1a1f3c]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {step.heading}
                </h3>
                <p className="text-[15px] text-[#324b75]/65 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="max-w-6xl mx-auto px-8 border-t border-[#324b75]/10 pt-16">
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-6">Outcome</p>
          <p className="text-[17px] text-[#1a1f3c] leading-relaxed max-w-2xl">{project.outcome}</p>
        </div>

      </main>
      <Footer />
    </>
  );
}
