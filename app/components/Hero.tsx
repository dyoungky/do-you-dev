"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="pt-56 pb-40 px-8 max-w-6xl mx-auto">
      <h1
        className="text-5xl md:text-7xl leading-[1.05] tracking-tight mb-10 text-[#313967]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <em
          className="italic text-[#293465]"
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          Design and development.
        </em>
      </h1>

      <div
        className="max-w-lg space-y-4 text-[15px] text-[#313967]/65 leading-relaxed"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
        }}
      >
        <p>
          I design interfaces people actually enjoy using — and build them too.
          UX/UI design and frontend development, from wireframe to deployment.
        </p>
        <p>
          Browse my latest{" "}
          <a href="/work" className="font-semibold text-[#313967] underline underline-offset-2 decoration-[#293465] hover:text-[#293465] transition-colors">
            work
          </a>
          ,{" "}
          <a href="#prices" className="font-semibold text-[#313967] underline underline-offset-2 decoration-[#293465] hover:text-[#293465] transition-colors">
            see pricing
          </a>
          , or{" "}
          <a href="#contact" className="font-semibold text-[#313967] underline underline-offset-2 decoration-[#293465] hover:text-[#293465] transition-colors">
            start a project
          </a>
          .
        </p>
      </div>
    </section>
  );
}
