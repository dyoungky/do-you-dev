"use client";

import { useInView } from "../hooks/useInView";

const services = [
  {
    num: "01",
    name: "UX Research & Strategy",
    desc: "User research, personas, journey mapping, and information architecture to lay the right foundation before any pixel is touched.",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&q=75",
  },
  {
    num: "02",
    name: "UI Design & Prototyping",
    desc: "High-fidelity Figma designs, interactive prototypes, and design systems built to scale. Every detail considered — spacing, typography, motion.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=75",
    highlight: true,
  },
  {
    num: "03",
    name: "Frontend Development",
    desc: "Pixel-perfect implementation in React / Next.js. Responsive, accessible, and fast — bridging the gap between design and production.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=75",
  },
  {
    num: "04",
    name: "Design System",
    desc: "Component libraries and token-based design systems that keep your product consistent and your team moving fast.",
    img: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&q=75",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section style={{ backgroundColor: "#f4f2ed" }}>
      <div
        ref={ref}
        className="py-24 px-8 max-w-6xl mx-auto"
        style={{ opacity: inView ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">Services</p>
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Design that works,{" "}
            <em className="italic">code that ships.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4 items-start">
          {services.map((s) => (
            <div key={s.num} className="relative group cursor-pointer overflow-hidden">
              <div className="relative z-0 p-4 flex flex-col gap-1.5">
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/40 group-hover:text-white/50 transition-colors duration-400">
                  {s.num}
                </p>
                <h3
                  className="text-sm font-medium text-[#324b75] group-hover:text-white transition-colors duration-400"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {s.name}
                </h3>
              </div>

              <div className="aspect-[3/4] overflow-hidden">
                {s.img && (
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
              </div>

              <div className="absolute inset-0 z-10 bg-[#293465] p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out flex flex-col">
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/40 mb-1.5">{s.num}</p>
                <h3 className="text-sm font-medium text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  {s.name}
                </h3>
                <p className="text-xs leading-relaxed text-white/75 flex-1">{s.desc}</p>
                {s.highlight && (
                  <a href="/prices" className="mt-4 text-xs tracking-[0.12em] uppercase border border-white/40 text-white px-4 py-2 inline-block text-center hover:bg-white hover:text-[#293465] transition-colors">
                    See pricing
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#contact" className="text-xs tracking-[0.12em] uppercase border border-[#324b75]/20 px-6 py-3 inline-block hover:bg-[#324b75] hover:text-[#faf9f6] transition-colors">
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  );
}
