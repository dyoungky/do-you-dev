"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const solutions = [
  { label: "Simple Site", href: "/work#simple-site", sub: "HTML / CSS / JS" },
  { label: "Content Site", href: "/work#content-site", sub: "WordPress" },
  { label: "Web App", href: "/work#web-app", sub: "React / Next.js" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(250,249,246,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(50,75,117,0.12)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-8 py-5 flex flex-col items-center gap-3">
        <Link
          href="/"
          className="text-base font-medium tracking-tight text-[#324b75]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          doyou.dev
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          {/* About */}
          <li>
            <Link href="/about" className="text-sm font-medium text-[#313967]/60 hover:text-[#313967] transition-colors">
              About
            </Link>
          </li>

          {/* Solutions dropdown */}
          <li ref={dropRef} className="relative">
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className="flex items-center gap-1 text-sm font-medium text-[#313967]/60 hover:text-[#313967] transition-colors"
            >
              Solutions
              <svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {dropOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#faf9f6] border border-[#324b75]/10 shadow-sm min-w-[180px]">
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setDropOpen(false)}
                    className="flex flex-col px-5 py-3.5 hover:bg-[#f0ede8] transition-colors border-b border-[#324b75]/5 last:border-0"
                  >
                    <span className="text-sm font-medium text-[#313967]">{s.label}</span>
                    <span className="text-[11px] text-[#313967]/40 mt-0.5">{s.sub}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact" className="text-sm font-medium text-[#313967]/60 hover:text-[#313967] transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden absolute right-8 top-5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-px bg-[#313967] transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#313967] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#313967] transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#faf9f6] border-t border-[#313967]/5 px-8 py-6 flex flex-col gap-5">
          <Link href="/about" className="text-sm font-medium text-[#313967]/60 hover:text-[#313967]" onClick={() => setMenuOpen(false)}>About</Link>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-[#313967]/60">Solutions</span>
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="pl-4 text-sm text-[#313967]/50 hover:text-[#313967]"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="text-sm font-medium text-[#313967]/60 hover:text-[#313967]" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
