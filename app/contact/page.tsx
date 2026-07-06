"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "jQuery", "Bootstrap", "WordPress",
  "Figma", "Photoshop", "Illustration", "Git",
];

const education = [
  {
    degree: "MSc Frameworks and Architectures for the Web",
    school: "IT University of Copenhagen",
    period: "Jan 2024 — Jun 2024",
  },
  {
    degree: "Introduction to Front-end Development",
    school: "ReDI School Copenhagen",
    period: "Sep 2022 — Dec 2022",
  },
  {
    degree: "BSc Industrial Design — GPA 4.1 / 4.5",
    school: "Hanbat National University, South Korea",
    period: "2010 — 2014",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-8 max-w-6xl mx-auto">

        {/* Intro + form */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">

          {/* Left — personal intro */}
          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">Contact</p>
            <h1
              className="text-5xl md:text-6xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Doyoung Kim<br />
              <em className="italic text-[#293465]">Gormsen.</em>
            </h1>

            {/* Photo */}
            <div className="aspect-[4/3] bg-[#e8e4dd] overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Doyoung Kim Gormsen"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[15px] text-[#324b75]/65 leading-relaxed mb-4">
              Frontend developer with a background in graphic design and 4 years
              of hands-on experience. Based in Østerbro, Copenhagen, originally from South Korea.
            </p>
            <p className="text-[15px] text-[#324b75]/65 leading-relaxed mb-8">
              I bridge aesthetics with functionality — specialising in responsive websites,
              from quick WordPress builds to custom React frontends and full-stack web apps.
            </p>

            <div className="flex flex-col gap-1 text-sm text-[#324b75]/45 mb-10">
              <span>dyoungky.dk@gmail.com</span>
              <span>Østerbro, Copenhagen, Denmark</span>
            </div>

            {/* Skills */}
            <div className="border-t border-[#324b75]/10 pt-8 mb-8">
              <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">Skills</p>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="text-sm border border-[#324b75]/15 px-3 py-1 text-[#324b75]/70">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="border-t border-[#324b75]/10 pt-8">
              <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-6">Education</p>
              <div className="divide-y divide-[#324b75]/8">
                {education.map((e) => (
                  <div key={e.degree} className="py-5">
                    <p className="text-xs text-[#324b75]/40 mb-1">{e.period}</p>
                    <p className="text-sm font-medium text-[#1a1f3c] mb-0.5" style={{ fontFamily: "var(--font-serif)" }}>
                      {e.degree}
                    </p>
                    <p className="text-xs text-[#324b75]/50">{e.school}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact form (sticky on desktop) */}
          <div className="md:sticky md:top-32">
            <h2
              className="text-3xl md:text-4xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Got a project?{" "}
              <em className="italic text-[#293465]">Let&apos;s build it.</em>
            </h2>
            <p className="text-sm text-[#324b75]/50 leading-relaxed mb-10 max-w-sm">
              Whether you need a full product designed and built, or just want to
              improve what you already have — I&apos;d love to hear about it.
              I&apos;ll get back to you within 1–2 business days.
            </p>

            {sent ? (
              <p
                className="text-3xl text-[#324b75]/50 leading-snug pt-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Thanks —<br />
                <em className="italic text-[#293465]">I&apos;ll be in touch soon.</em>
              </p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="flex flex-col gap-6"
              >
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "Your email" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key} className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.12em] uppercase text-[#324b75]/35">{label}</label>
                    <input
                      type={type}
                      required
                      value={form[key as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="bg-transparent border-b border-[#324b75]/15 pb-3 text-sm focus:outline-none focus:border-[#293465] transition-colors placeholder:text-[#324b75]/20"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.12em] uppercase text-[#324b75]/35">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project — what are you building?"
                    className="bg-transparent border-b border-[#324b75]/15 pb-3 text-sm focus:outline-none focus:border-[#293465] transition-colors resize-none placeholder:text-[#324b75]/20"
                  />
                </div>
                <button
                  type="submit"
                  className="self-start text-xs tracking-[0.15em] uppercase bg-[#293465] text-white px-8 py-3.5 hover:bg-[#3a6abf] transition-colors mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
