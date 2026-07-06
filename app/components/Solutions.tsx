"use client";

import Link from "next/link";
import { useInView } from "../hooks/useInView";
import { packages, designs, tierLabels } from "../solutions/data";

export default function Solutions() {
  const { ref, inView } = useInView();

  return (
    <section id="solutions" style={{ backgroundColor: "#f7f5f1" }}>
      <div
        ref={ref}
        className="py-24 px-8 max-w-6xl mx-auto"
        style={{ opacity: inView ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="mb-14">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">Solutions</p>
          <h2
            className="text-4xl md:text-5xl leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Pick a package,{" "}
            <em className="italic text-[#293465]">then a design.</em>
          </h2>
        </div>

        {/* Package tiers */}
        <div className="grid md:grid-cols-3 gap-px bg-[#324b75]/8 mb-16">
          {packages.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col p-8 ${p.highlight ? "bg-[#293465] text-white" : "bg-[#faf9f6]"}`}
            >
              <p className={`text-xs tracking-[0.12em] uppercase mb-3 ${p.highlight ? "text-white/50" : "text-[#324b75]/35"}`}>
                {p.name}
              </p>
              <p className="text-2xl mb-2 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                {p.priceFrom}
              </p>
              <p className={`text-sm mb-5 flex-1 ${p.highlight ? "text-white/60" : "text-[#324b75]/50"}`}>{p.tagline}</p>
              <div className={`text-xs flex justify-between gap-4 border-t pt-4 ${p.highlight ? "border-white/15 text-white/70" : "border-[#324b75]/10 text-[#324b75]/60"}`}>
                <span className={p.highlight ? "text-white/45" : "text-[#324b75]/40"}>Build time</span>
                <span>{p.buildTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Design teaser */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {designs.map((d) => (
            <Link key={d.slug} href={`/solutions/${d.slug}`} className="group flex flex-col">
              <div className="overflow-hidden aspect-[3/2] bg-[#e8e4dd] mb-3">
                <img
                  src={d.img}
                  alt={`${d.title} — ${tierLabels[d.tier]} design`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[10px] tracking-[0.12em] uppercase text-[#324b75]/40 mb-1">{tierLabels[d.tier]}</p>
              <h3 className="text-base leading-snug" style={{ fontFamily: "var(--font-serif)" }}>{d.title}</h3>
              <p className="text-xs text-[#324b75]/50 mt-1">{d.designTime}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/solutions" className="text-xs tracking-[0.12em] uppercase border border-[#324b75]/20 px-6 py-3 inline-block hover:bg-[#324b75] hover:text-[#faf9f6] transition-colors">
            See all solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
