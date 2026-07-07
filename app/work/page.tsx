"use client";

import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const approaches = [
  {
    num: "01",
    id: "simple-site",
    tag: "Simple & Fast",
    title: "Simple Site",
    desc: "Hand-coded websites built from scratch. No frameworks, no dependencies — just clean, fast, lightweight code.",
    suitable: "Landing pages, portfolios, simple brochure sites",
    pros: [
      "Extremely fast load times",
      "Full control over every detail",
      "No platform dependency",
      "Low maintenance cost",
    ],
    cons: [
      "Client cannot edit content easily",
      "Not ideal for large or complex projects",
      "Manual updates required",
    ],
  },
  {
    num: "02",
    id: "content-site",
    tag: "Content-Managed",
    title: "Content Site",
    desc: "The world's most popular CMS. Great when clients need to update content themselves — blog posts, team pages, products — without touching code.",
    suitable: "Company websites, blogs, news sites, content-heavy projects",
    pros: [
      "Client can manage content independently",
      "Large ecosystem of plugins",
      "Easy to scale content",
      "Familiar for most clients",
    ],
    cons: [
      "Can get bloated without careful setup",
      "Requires ongoing updates and maintenance",
      "Less flexible for custom interactions",
    ],
  },
  {
    num: "03",
    id: "web-app",
    tag: "Full Product",
    title: "Web App",
    desc: "Modern web applications built with React and Next.js. The right choice when your project needs dynamic data, user accounts, complex interactions, or strong SEO.",
    suitable: "Web apps, dashboards, e-commerce, SaaS products",
    pros: [
      "Highly flexible and scalable",
      "Excellent performance and SEO with Next.js",
      "Great for complex, interactive products",
      "Component-based — easy to extend",
    ],
    cons: [
      "Higher development cost",
      "Requires hosting setup (e.g. Vercel)",
      "More complex to maintain long-term",
    ],
  },
];

export default function Work() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">

        {/* Header */}
        <div className="px-8 max-w-6xl mx-auto mb-20">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-6">Solutions</p>
          <h1
            className="text-5xl md:text-7xl leading-[1.05] tracking-tight text-[#1a1f3c] max-w-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The right tool<br />
            <em className="italic text-[#293465]">for the job.</em>
          </h1>
          <p className="mt-8 text-[15px] text-[#324b75]/60 leading-relaxed max-w-lg">
            Not every project needs the same solution. We work with three main approaches — each suited to different needs, budgets, and goals.
          </p>
        </div>

        {/* Approaches */}
        <div className="px-8 max-w-6xl mx-auto divide-y divide-[#324b75]/10">
          {approaches.map((a) => (
            <div key={a.num} id={a.id} className="py-20 grid md:grid-cols-[1fr_2fr] gap-16" style={{ scrollMarginTop: "120px" }}>

              {/* Left */}
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-3">{a.tag}</p>
                <h2
                  className="text-4xl leading-snug text-[#1a1f3c] mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {a.title}
                </h2>
                <p className="text-sm text-[#324b75]/50 leading-relaxed">{a.desc}</p>
                <div className="mt-6">
                  <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/30 mb-2">Best for</p>
                  <p className="text-sm text-[#324b75]/60 italic">{a.suitable}</p>
                </div>
              </div>

              {/* Right */}
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">Pros</p>
                  <ul className="space-y-2">
                    {a.pros.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-[#324b75]/65 leading-relaxed">
                        <span className="text-[#293465] mt-0.5 shrink-0">+</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">Cons</p>
                  <ul className="space-y-2">
                    {a.cons.map((c) => (
                      <li key={c} className="flex gap-3 text-sm text-[#324b75]/65 leading-relaxed">
                        <span className="text-[#324b75]/30 mt-0.5 shrink-0">−</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-8 max-w-6xl mx-auto mt-8 border-t border-[#324b75]/10 pt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2
            className="text-4xl md:text-5xl leading-tight text-[#1a1f3c]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Not sure which<br />
            <em className="italic text-[#293465]">approach fits?</em>
          </h2>
          <Link
            href="/contact"
            className="text-xs tracking-[0.15em] uppercase bg-[#293465] text-white px-8 py-3.5 hover:bg-[#3a6abf] transition-colors shrink-0"
          >
            Let's talk →
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
