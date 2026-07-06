"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

const cases = [
  {
    num: "01",
    tag: "UX/UI DESIGN / REACT",
    title: "Ferm Living — Furniture Catalogue App",
    desc: "Designed and built a clean product browsing experience for a furniture brand using React. Focused on intuitive navigation and visual hierarchy.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
    slug: "ferm-living",
  },
  {
    num: "02",
    tag: "FULL-STACK / E-COMMERCE",
    title: "NAME — Full-Stack E-Commerce Platform",
    desc: "End-to-end UX design and development of an e-commerce site. Built with React and TypeScript, featuring REST API integration and responsive layout.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80",
    slug: "name-ecommerce",
  },
  {
    num: "03",
    tag: "UI DESIGN / WORDPRESS",
    title: "Dkemy — Custom WordPress Site",
    desc: "Designed and developed a custom WordPress site with a tailored theme, focusing on brand consistency and content readability.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80",
    slug: "dkemy",
  },
  {
    num: "04",
    tag: "REACT / TRAVEL",
    title: "Back Roads — Travel Agency App",
    desc: "Web application built with React, designed for a travel agency allowing users to browse destinations and travel packages.",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80",
    slug: "back-roads",
  },
  {
    num: "05",
    tag: "UX/UI DESIGN / FINTECH",
    title: "Clarity — Analytics Dashboard",
    desc: "Complex analytics dashboard with real-time data visualization. Designed for clarity and ease of use across a wide range of user types.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    slug: "back-roads",
  },
  {
    num: "06",
    tag: "UI DESIGN / BRANDING",
    title: "Roots — NGO Brand & Website",
    desc: "Collaborated with a non-profit to revamp their brand identity and website, communicating their mission with clarity and warmth.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    slug: "back-roads",
  },
  {
    num: "07",
    tag: "FRONTEND / NEXT.JS",
    title: "Studio — Creative Portfolio Site",
    desc: "Built a fast, responsive portfolio site in Next.js for a creative studio. Focused on performance, typography, and smooth animations.",
    img: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=700&q=80",
    slug: "back-roads",
  },
];

export default function Cases() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [thumbLeft, setThumbLeft] = useState(0.5);
  const { ref: sectionRef, inView } = useInView();

  useEffect(() => {
    if (!sliderRef.current) return;
    const { scrollWidth, clientWidth } = sliderRef.current;
    sliderRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    setThumbLeft(0.5);
  }, []);

  const onScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setThumbLeft(scrollLeft / (scrollWidth - clientWidth));
  };

  return (
    <section id="cases" style={{ backgroundColor: "#f7f5f1" }}>
      <div
        ref={sectionRef}
        className="py-24 max-w-6xl mx-auto overflow-hidden"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-8 px-8">Selected Work</p>

        <div
          ref={sliderRef}
          onScroll={onScroll}
          className="flex gap-6 overflow-x-auto px-8 pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cases.map((c) => (
            <div
              key={c.num}
              className="group flex-shrink-0 flex flex-col"
              style={{ width: "calc(25% - 18px)" }}
            >
              <div className="overflow-hidden aspect-[3/2] bg-[#e8e4dd] mb-5">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-2">{c.tag}</p>
              <h3
                className="text-xl leading-snug mb-3 truncate"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {c.title}
              </h3>
              <p className="text-sm text-[#324b75]/50 leading-relaxed mb-4 flex-1">{c.desc}</p>
              <a href={`/work/${c.slug}`} className="text-xs tracking-[0.1em] uppercase text-[#293465] border-b border-[#293465]/40 pb-px hover:border-[#293465] transition-colors self-start">
                View case →
              </a>
            </div>
          ))}
        </div>

        <div className="px-8 mt-8 flex justify-center gap-2">
          {cases.map((_, i) => {
            const active = Math.round(thumbLeft * (cases.length - 1)) === i;
            return (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: active ? "8px" : "6px",
                  height: active ? "8px" : "6px",
                  backgroundColor: active ? "#293465" : "rgba(50,75,117,0.2)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
