"use client";

import { useInView } from "../hooks/useInView";

const plans = [
  {
    name: "Design Only",
    price: "Fra 6.000 kr.",
    desc: "UI/UX design, no code.",
    items: ["UX Research & Wireframes", "High-fidelity Figma UI", "Interactive Prototype", "2 revision rounds"],
  },
  {
    name: "Design + Dev",
    price: "Fra 18.000 kr.",
    desc: "Full design and frontend build.",
    items: ["Everything in Design Only", "React / Next.js Build", "Responsive & Accessible", "Deployment & Handoff"],
    highlight: true,
  },
  {
    name: "Retainer",
    price: "11.000 kr. / md",
    desc: "Ongoing design & dev support.",
    items: ["Up to 40 hrs / month", "Priority turnaround", "Design & code updates", "Cancel anytime"],
  },
];

export default function Prices() {
  const { ref, inView } = useInView();

  return (
    <section id="prices">
      <div style={{ backgroundColor: "#f7f5f1" }}>
        <div
          ref={ref}
          className="py-24 px-8 max-w-6xl mx-auto"
          style={{ opacity: inView ? 1 : 0, transition: "opacity 1s ease" }}
        >
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Simple, transparent{" "}
              <em className="italic">pricing.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#324b75]/8">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col p-10 ${p.highlight ? "bg-[#293465] text-white" : "bg-[#faf9f6]"}`}
              >
                <p className={`text-xs tracking-[0.12em] uppercase mb-5 ${p.highlight ? "text-white/50" : "text-[#324b75]/35"}`}>
                  {p.name}
                </p>
                <p className="text-3xl mb-2 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  {p.price}
                </p>
                <p className={`text-sm mb-8 ${p.highlight ? "text-white/55" : "text-[#324b75]/45"}`}>{p.desc}</p>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {p.items.map((item) => (
                    <li key={item} className={`text-sm flex gap-2 ${p.highlight ? "text-white/70" : "text-[#324b75]/60"}`}>
                      <span>—</span>{item}
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
        </div>
      </div>
    </section>
  );
}
