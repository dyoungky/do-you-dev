"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";

const faqs = [
  {
    q: "Do you work with clients outside of Denmark?",
    a: "Yes — I work remotely with clients across Europe and beyond. All communication happens over video calls, email, and shared tools like Figma and Notion.",
  },
  {
    q: "How long does a typical project take?",
    a: "A design-only project usually takes 2–4 weeks. A full design + development project typically runs 4–8 weeks depending on scope.",
  },
  {
    q: "What if I only need small updates or ongoing help?",
    a: "The Retainer plan is ideal for this — up to 40 hours per month, flexible across design and development tasks. Cancel anytime.",
  },
  {
    q: "Do you work with existing codebases or designs?",
    a: "Absolutely. I'm comfortable jumping into existing projects, whether that means picking up a Figma file or working inside an existing codebase.",
  },
  {
    q: "What information do you need to get started?",
    a: "A rough description of what you're building, your timeline, and your budget range is enough to get the conversation started. We'll refine everything from there.",
  },
  {
    q: "Are the prices fixed or can they vary?",
    a: "The listed prices are starting points. Final pricing depends on scope, complexity, and timeline. I'll always agree on a fixed price before starting.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useInView();

  return (
    <section style={{ backgroundColor: "#faf9f6" }}>
      <div
        ref={ref}
        className="py-24 px-8 max-w-6xl mx-auto"
        style={{ opacity: inView ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-20">
          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">FAQ</p>
            <h2
              className="text-3xl md:text-4xl leading-tight text-[#293465]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Common questions.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-[#324b75]/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-start gap-4 text-left"
                >
                  <span
                    className="text-sm font-medium text-[#293465]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {faq.q}
                  </span>
                  <span className="text-[#324b75]/40 text-lg leading-none mt-0.5 flex-shrink-0">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && (
                  <p className="mt-4 text-sm text-[#324b75]/55 leading-relaxed max-w-lg">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-16 border-t border-[#324b75]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl md:text-3xl text-[#293465] mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Still have questions?
            </h3>
            <p className="text-sm text-[#324b75]/50">I usually reply within 1–2 business days.</p>
          </div>
          <a
            href="mailto:dyoungky.dk@gmail.com"
            className="text-xs tracking-[0.14em] uppercase bg-[#293465] text-white px-8 py-4 hover:bg-[#4770bd] transition-colors whitespace-nowrap"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
