"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Prices", href: "/prices" },
  { label: "Contact", href: "/contact" },
];

const solutionDropdown = [
  { label: "All solutions", href: "/solutions" },
  { label: "WordPress Starter — Business Site", href: "/solutions/dkemy" },
  { label: "Custom Frontend — Brand Catalogue", href: "/solutions/ferm-living" },
  { label: "Custom Frontend — Listings Site", href: "/solutions/back-roads" },
  { label: "Full-Stack — E-Commerce Shop", href: "/solutions/name-ecommerce" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
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
          {/* Home */}
          <li>
            <Link href="/" className="text-sm font-medium text-[#313967]/60 hover:text-[#313967] transition-colors">
              Home
            </Link>
          </li>

          {/* Solutions with dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-[#313967]/60 hover:text-[#313967] transition-colors"
            >
              Solutions
              <svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#faf9f6] border border-[#324b75]/10 shadow-lg py-2"
                style={{ backdropFilter: "blur(8px)" }}
              >
                {solutionDropdown.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-5 py-2.5 text-xs text-[#313967]/65 hover:text-[#293465] hover:bg-[#293465]/5 transition-colors ${
                      i === 0 ? "border-b border-[#324b75]/10 mb-1 font-medium tracking-[0.08em] uppercase text-[#293465]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Remaining links */}
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-[#313967]/60 hover:text-[#313967] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#faf9f6] border-t border-[#313967]/5 px-8 py-6 flex flex-col gap-5">
          <Link href="/" className="text-sm font-medium text-[#313967]/60 hover:text-[#313967]" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <div className="flex flex-col gap-3">
            <Link href="/solutions" className="text-sm font-medium text-[#313967]/60 hover:text-[#313967]" onClick={() => setMenuOpen(false)}>
              Solutions
            </Link>
            {solutionDropdown.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs text-[#313967]/45 hover:text-[#293465] pl-4 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#313967]/60 hover:text-[#313967]"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
