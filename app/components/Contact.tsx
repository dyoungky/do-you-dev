"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { ref, inView } = useInView();

  return (
    <section id="contact" style={{ backgroundColor: "#f4f2ed" }}>
      <div
        ref={ref}
        className="py-24 px-8 max-w-6xl mx-auto"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/35 mb-6">Contact</p>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Got a project?{" "}
              <em className="italic text-[#293465]">Let's build it.</em>
            </h2>
            <p className="text-sm text-[#324b75]/50 leading-relaxed mb-10 max-w-sm">
              Whether you need a full product designed and built, or just want to
              improve what you already have — I'd love to hear about it.
              I'll get back to you within 1–2 business days.
            </p>
            <div className="flex flex-col gap-1.5 text-sm text-[#324b75]/45">
              <span>dyoungky.dk@gmail.com</span>
              <span>Østerbro, Copenhagen, Denmark</span>
            </div>
          </div>

          {sent ? (
            <div className="flex items-center pt-16">
              <p
                className="text-3xl text-[#324b75]/50 leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Thanks —<br />
                <em className="italic text-[#293465]">I'll be in touch soon.</em>
              </p>
            </div>
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
                  rows={5}
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
    </section>
  );
}
