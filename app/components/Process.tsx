"use client";

import { useInView } from "../hooks/useInView";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    desc: "We start with a 30-minute call to understand your goals, timeline, and budget. No commitment — just a conversation.",
  },
  {
    num: "02",
    title: "Proposal & scope",
    desc: "I send a detailed proposal with deliverables, timeline, and fixed price. No hourly surprises.",
  },
  {
    num: "03",
    title: "Design & build",
    desc: "I work in focused sprints with regular check-ins. You'll see progress early and often — not just at the end.",
  },
  {
    num: "04",
    title: "Handoff",
    desc: "Clean delivery of design files, source code, and documentation. I stay available for questions after launch.",
  },
];

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section style={{ backgroundColor: "#f4f2ed" }}>
      <div
        ref={ref}
        className="py-24 px-8 max-w-6xl mx-auto"
        style={{ opacity: inView ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="mb-16">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">How it works</p>
          <h2
            className="text-4xl md:text-5xl leading-tight max-w-lg"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            From first message{" "}
            <em className="italic text-[#4770bd]">to final delivery.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col">
              <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">{s.num}</p>
              <h3
                className="text-lg mb-3 text-[#293465]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-[#324b75]/55 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
