"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-8 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-6">Contact</p>
            <h1
              className="text-5xl md:text-6xl leading-[1.05] tracking-tight mb-8 text-[#1a1f3c]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Got a project<br />
              <em className="italic text-[#293465]">in mind?</em>
            </h1>
            <p className="text-[15px] text-[#324b75]/60 leading-relaxed mb-12 max-w-sm">
              Whether you're starting from scratch or need help bringing an existing idea to life — we'd love to hear about it. We'll get back to you within 1–2 business days.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-1">Location</p>
                <p className="text-sm text-[#324b75]/70">Copenhagen, Denmark</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-2">We can help with</p>
                <ul className="space-y-1 text-sm text-[#324b75]/70">
                  <li>UX/UI Design</li>
                  <li>Frontend Development</li>
                  <li>Design Systems</li>
                  <li>Prototyping</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="pt-16">
            {sent ? (
              <div>
                <p
                  className="text-4xl text-[#1a1f3c] leading-snug mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Thanks —<br />
                  <em className="italic text-[#293465]">We'll be in touch soon.</em>
                </p>
                <p className="text-sm text-[#324b75]/50">We usually respond within 1–2 business days.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="flex flex-col gap-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { key: "company", label: "Company", type: "text", placeholder: "Optional" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key} className="flex flex-col gap-2">
                      <label className="text-xs tracking-[0.12em] uppercase text-[#324b75]/35">{label}</label>
                      <input
                        type={type}
                        required={key === "name"}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        placeholder={placeholder}
                        className="bg-transparent border-b border-[#324b75]/15 pb-3 text-sm focus:outline-none focus:border-[#293465] transition-colors placeholder:text-[#324b75]/20"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.12em] uppercase text-[#324b75]/35">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-transparent border-b border-[#324b75]/15 pb-3 text-sm focus:outline-none focus:border-[#293465] transition-colors placeholder:text-[#324b75]/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.12em] uppercase text-[#324b75]/35">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project — what are you building?"
                    className="bg-transparent border-b border-[#324b75]/15 pb-3 text-sm focus:outline-none focus:border-[#293465] transition-colors resize-none placeholder:text-[#324b75]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start text-xs tracking-[0.15em] uppercase bg-[#293465] text-white px-8 py-3.5 hover:bg-[#3a6abf] transition-colors"
                >
                  Send Message →
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
