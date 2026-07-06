"use client";

import { useEffect, useState } from "react";

export default function PricesHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="pt-56 pb-24 px-8 max-w-6xl mx-auto">
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/35 mb-6">Pricing</p>
        <h1
          className="text-6xl md:text-7xl leading-[1.05] tracking-tight mb-10 text-[#293465]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Straightforward pricing.{" "}
          <em className="italic" style={{ color: "#4770bd" }}>No surprises.</em>
        </h1>
      </div>
      <div
        className="max-w-xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
      >
        <p className="text-[15px] text-[#313967]/60 leading-relaxed mb-4">
          Every project is different — but pricing shouldn't be a mystery.
          Below are my standard packages. If your needs don't fit neatly into a plan,
          just reach out and we'll figure out something that works.
        </p>
        <a
          href="/#contact"
          className="text-sm text-[#293465] underline underline-offset-4 decoration-[#293465]/30 hover:decoration-[#293465] transition-all"
        >
          Or just send me a message →
        </a>
      </div>
    </section>
  );
}
