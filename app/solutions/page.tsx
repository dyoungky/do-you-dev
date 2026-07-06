import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { packages, designs, tierLabels } from "./data";

export const metadata: Metadata = {
  title: "Solutions & Packages — Web design & development",
  description:
    "Choose a ready-made solution design or a package — from an affordable WordPress site to a custom React frontend or a full-stack web app. Transparent build times and running costs in DKK.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-8 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">Solutions</p>
          <h1
            className="text-5xl md:text-6xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Pick a package.<br />
            <em className="italic text-[#293465]">Choose a design.</em>
          </h1>
          <p className="text-[15px] text-[#324b75]/65 leading-relaxed max-w-xl">
            Every project starts from one of three packages — then you pick a solution
            design as a starting point. Clear deliverables, honest build times, and
            fully transparent running costs. No surprises.
          </p>
        </div>

        {/* Packages */}
        <section aria-labelledby="packages-heading" className="mb-28">
          <h2 id="packages-heading" className="sr-only">Packages</h2>
          <div className="grid md:grid-cols-3 gap-px bg-[#324b75]/8">
            {packages.map((p) => (
              <div
                key={p.id}
                className={`flex flex-col p-8 ${p.highlight ? "bg-[#293465] text-white" : "bg-[#faf9f6]"}`}
              >
                <p className={`text-xs tracking-[0.12em] uppercase mb-4 ${p.highlight ? "text-white/50" : "text-[#324b75]/35"}`}>
                  {p.name}
                </p>
                <p className="text-2xl mb-2 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  {p.priceFrom}
                </p>
                <p className={`text-sm mb-6 ${p.highlight ? "text-white/60" : "text-[#324b75]/50"}`}>{p.tagline}</p>

                <dl className={`text-xs mb-6 flex flex-col gap-2 ${p.highlight ? "text-white/70" : "text-[#324b75]/60"}`}>
                  <div className="flex justify-between gap-4">
                    <dt className={p.highlight ? "text-white/45" : "text-[#324b75]/40"}>Build time</dt>
                    <dd className="text-right">{p.buildTime}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className={p.highlight ? "text-white/45" : "text-[#324b75]/40"}>Deployed on</dt>
                    <dd className="text-right">{p.deployment}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className={p.highlight ? "text-white/45" : "text-[#324b75]/40"}>Best for</dt>
                    <dd className="text-right">{p.bestFor}</dd>
                  </div>
                </dl>

                <ul className="flex flex-col gap-2 flex-1 mb-6">
                  {p.includes.map((item) => (
                    <li key={item} className={`text-sm flex gap-2 ${p.highlight ? "text-white/75" : "text-[#324b75]/60"}`}>
                      <span>—</span>{item}
                    </li>
                  ))}
                </ul>

                <div className={`text-xs mb-6 border-t pt-4 ${p.highlight ? "border-white/15" : "border-[#324b75]/10"}`}>
                  <p className={`tracking-[0.12em] uppercase mb-2 ${p.highlight ? "text-white/40" : "text-[#324b75]/35"}`}>Running costs</p>
                  <ul className="flex flex-col gap-1.5">
                    {p.ongoing.map((o) => (
                      <li key={o.label} className={`flex justify-between gap-4 ${p.highlight ? "text-white/65" : "text-[#324b75]/55"}`}>
                        <span>{o.label}</span>
                        <span className="text-right whitespace-nowrap">{o.cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="flex flex-wrap gap-1.5 mb-6">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className={`text-[11px] tracking-wide px-2 py-1 ${p.highlight ? "border border-white/25 text-white/70" : "border border-[#324b75]/15 text-[#324b75]/55"}`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className={`text-xs tracking-[0.14em] uppercase text-center py-3 border transition-colors ${
                    p.highlight
                      ? "border-white/40 text-white hover:bg-white hover:text-[#293465]"
                      : "border-[#324b75]/20 text-[#324b75] hover:bg-[#293465] hover:text-white hover:border-[#293465]"
                  }`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Solution designs / templates */}
        <section aria-labelledby="designs-heading">
          <div className="mb-12">
            <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">Solution designs</p>
            <h2
              id="designs-heading"
              className="text-4xl md:text-5xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Choose a starting <em className="italic text-[#293465]">design.</em>
            </h2>
            <p className="text-[15px] text-[#324b75]/65 leading-relaxed max-w-xl">
              These are real, proven designs. Pick one as your foundation — each shows
              which package it fits and roughly how long it takes to design and build for you.
            </p>
          </div>

          <div className="divide-y divide-[#324b75]/10">
            {designs.map((d) => (
              <div key={d.slug} className="group/row py-16 grid md:grid-cols-2 gap-12 items-start">
                <Link href={`/solutions/${d.slug}`} className="overflow-hidden bg-[#e8e4dd] aspect-[16/10] block">
                  <img
                    src={d.img}
                    alt={`${d.title} — ${tierLabels[d.tier]} design`}
                    className="w-full h-full object-cover group-hover/row:scale-105 transition-transform duration-700"
                  />
                </Link>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/40">{d.tag}</p>
                    <span className="text-[10px] tracking-[0.1em] uppercase bg-[#293465]/8 text-[#293465] px-2 py-1">
                      {tierLabels[d.tier]}
                    </span>
                  </div>
                  <Link href={`/solutions/${d.slug}`}>
                    <h3
                      className="text-3xl md:text-4xl leading-snug mb-4 hover:text-[#293465] transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {d.title}
                    </h3>
                  </Link>
                  <p className="text-[15px] text-[#324b75]/65 leading-relaxed mb-5">{d.desc}</p>

                  <div className="flex items-center gap-2 mb-6 text-sm text-[#324b75]/70">
                    <span className="text-[10px] tracking-[0.12em] uppercase text-[#324b75]/40">Est. build time</span>
                    <span className="font-medium text-[#293465]">{d.designTime}</span>
                  </div>

                  <ul className="flex flex-wrap gap-2 mb-8">
                    {d.tech.map((t) => (
                      <li
                        key={t}
                        className="text-[11px] tracking-wide border border-[#324b75]/15 px-3 py-1 text-[#324b75]/60"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-6">
                    <Link
                      href={`/solutions/${d.slug}`}
                      className="text-xs tracking-[0.1em] uppercase text-[#293465] border-b border-[#293465]/40 pb-px hover:border-[#293465] transition-colors"
                    >
                      View design →
                    </Link>

                    {d.live && (
                      <a href={d.live} target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.1em] uppercase text-[#293465] border-b border-[#293465]/40 pb-px hover:border-[#293465] transition-colors">
                        Live demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO & ads note (secondary service) */}
        <section className="mt-24 border-t border-[#324b75]/10 pt-16">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">Get found — SEO &amp; ads</p>
          <div className="grid md:grid-cols-[2fr_3fr] gap-10">
            <h2 className="text-3xl md:text-4xl leading-tight text-[#293465]" style={{ fontFamily: "var(--font-serif)" }}>
              Built to be found from day one.
            </h2>
            <div className="text-[15px] text-[#324b75]/65 leading-relaxed space-y-4">
              <p>
                Every site ships with a technical SEO baseline — clean semantic markup,
                fast load times, metadata, a sitemap and structured data — so search
                engines can read and rank it properly.
              </p>
              <p>
                Need more reach? I can set up on-page SEO and basic keyword targeting,
                and get you started with paid ads on Google or Meta. Ongoing SEO and ad
                campaigns aren&apos;t my core specialty — for long-running campaigns I&apos;ll
                point you to trusted specialists, so you get honest advice either way.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-[#324b75]/10 text-center">
          <a href="/#contact" className="text-xs tracking-[0.12em] uppercase border border-[#324b75]/20 px-8 py-4 inline-block hover:bg-[#293465] hover:text-white hover:border-[#293465] transition-colors">
            Discuss your project
          </a>
        </div>

      </main>
      <Footer />
    </>
  );
}
