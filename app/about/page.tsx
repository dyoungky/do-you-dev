import Nav from "../components/Nav";
import Footer from "../components/Footer";

const values = [
  {
    label: "Simple",
    desc: "We strip away everything that doesn't need to be there. Clean interfaces, clear messaging, no clutter.",
  },
  {
    label: "Precise",
    desc: "Every detail matters. Typography, spacing, interaction — nothing is left to chance.",
  },
  {
    label: "Fast",
    desc: "We move quickly without cutting corners. From first conversation to live product, efficiently.",
  },
];

const process = [
  {
    num: "01",
    heading: "Discovery",
    desc: "We start by understanding your goals, your users, and your constraints. Whether you have a rough idea or a detailed brief — we figure it out together.",
  },
  {
    num: "02",
    heading: "Design",
    desc: "With a design background at the core, we craft interfaces that look considered and feel intuitive. You see it before we build it.",
  },
  {
    num: "03",
    heading: "Build",
    desc: "We develop what we design — no handoff friction, no lost details. The final product matches the vision.",
  },
  {
    num: "04",
    heading: "Launch & Beyond",
    desc: "We deploy, test, and stay available. If you need ongoing support or want to keep improving, we're here.",
  },
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">

        {/* Intro */}
        <div className="px-8 max-w-6xl mx-auto mb-32">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-6">About</p>
          <h1
            className="text-5xl md:text-7xl leading-[1.05] tracking-tight mb-12 text-[#1a1f3c] max-w-4xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A design-led<br />
            <em className="italic text-[#293465]">development studio.</em>
          </h1>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <p className="text-[17px] text-[#324b75]/70 leading-relaxed">
              Most developers build what they're given. We're different — with a background in design, we care deeply about how things look, feel, and work. Every project gets both sides of the craft.
            </p>
            <p className="text-[17px] text-[#324b75]/70 leading-relaxed">
              Working with clients across industries — from early-stage startups to established brands that want their web presence to reflect the quality of their product.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="px-8 max-w-6xl mx-auto mb-32">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-12">What we believe in</p>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v) => (
              <div key={v.label}>
                <h3
                  className="text-3xl mb-4 text-[#293465]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <em className="italic">{v.label}.</em>
                </h3>
                <p className="text-[15px] text-[#324b75]/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="px-8 max-w-6xl mx-auto mb-32">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-12">How we work</p>
          <div className="divide-y divide-[#324b75]/8">
            {process.map((p) => (
              <div key={p.num} className="py-10 grid md:grid-cols-[80px_1fr_2fr] gap-8 items-start">
                <span className="text-xs tracking-[0.1em] text-[#324b75]/30 pt-1">{p.num}</span>
                <h3
                  className="text-2xl text-[#1a1f3c]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {p.heading}
                </h3>
                <p className="text-[15px] text-[#324b75]/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-8 max-w-6xl mx-auto border-t border-[#324b75]/10 pt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2
            className="text-4xl md:text-5xl leading-tight text-[#1a1f3c]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Got a project<br />
            <em className="italic text-[#293465]">in mind?</em>
          </h2>
          <a
            href="#contact"
            className="text-xs tracking-[0.15em] uppercase bg-[#293465] text-white px-8 py-3.5 hover:bg-[#3a6abf] transition-colors shrink-0"
          >
            Start a project →
          </a>
        </div>

      </main>
      <Footer />
    </>
  );
}
