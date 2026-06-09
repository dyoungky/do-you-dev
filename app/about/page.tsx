import Nav from "../components/Nav";
import Footer from "../components/Footer";

const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "jQuery", "Bootstrap", "WordPress",
  "Figma", "Photoshop", "Illustration", "Git",
];

const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Juris Legal",
    period: "Mar 2026 — Present",
    desc: "Design marketing pages, build responsive components, and use AI tools for content workflows.",
  },
  {
    role: "Career Break",
    company: "Parenting",
    period: "Jun 2024 — Jul 2025",
    desc: "",
  },
  {
    role: "Senior Web Designer",
    company: "KIPI",
    period: "Apr 2016 — Dec 2018",
    desc: "Led a major search page redesign project and managed the company's visual identity system.",
  },
  {
    role: "Junior Web Designer",
    company: "KIPI",
    period: "Dec 2015 — Apr 2016",
    desc: "Created an internal web magazine and designed seasonal campaign themes.",
  },
  {
    role: "Web Design Intern",
    company: "KIPI",
    period: "Aug 2015 — Dec 2015",
    desc: "Illustrated graphics and designed print materials for marketing campaigns.",
  },
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

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-8 max-w-6xl mx-auto">

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">About</p>
            <h1
              className="text-5xl md:text-6xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Doyoung Kim<br />
              <em className="italic text-[#293465]">Gormsen.</em>
            </h1>
            <p className="text-[15px] text-[#324b75]/65 leading-relaxed mb-4">
              Frontend developer with a background in graphic design and 4 years
              of hands-on experience. Based in Copenhagen, originally from South Korea.
            </p>
            <p className="text-[15px] text-[#324b75]/65 leading-relaxed mb-8">
              I have a strong eye for detail and design — I bridge aesthetics with
              functionality, specialising in responsive websites using HTML, CSS,
              and JavaScript.
            </p>
            <a
              href="mailto:dyoungky.dk@gmail.com"
              className="text-xs tracking-[0.14em] uppercase border border-[#324b75]/20 px-6 py-3 inline-block hover:bg-[#293465] hover:text-white hover:border-[#293465] transition-colors"
            >
              Say hey →
            </a>
          </div>

          {/* Photo placeholder */}
          <div className="aspect-[3/4] bg-[#e8e4dd] overflow-hidden self-start">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              alt="Doyoung Kim Gormsen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="mb-24 border-t border-[#324b75]/10 pt-16">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-8">Skills</p>
          <ul className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <li
                key={s}
                className="text-sm border border-[#324b75]/15 px-4 py-2 text-[#324b75]/70"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="mb-24 border-t border-[#324b75]/10 pt-16">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-8">Experience</p>
          <div className="divide-y divide-[#324b75]/8">
            {experience.map((e) => (
              <div key={e.role + e.company} className="py-8 grid md:grid-cols-[1fr_2fr] gap-6">
                <div>
                  <p className="text-xs text-[#324b75]/40 mb-1">{e.period}</p>
                  <p className="text-sm font-medium">{e.company}</p>
                </div>
                <div>
                  <p
                    className="text-lg mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {e.role}
                  </p>
                  {e.desc && (
                    <p className="text-sm text-[#324b75]/55 leading-relaxed">{e.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="border-t border-[#324b75]/10 pt-16">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-8">Education</p>
          <div className="divide-y divide-[#324b75]/8">
            {education.map((e) => (
              <div key={e.degree} className="py-8 grid md:grid-cols-[1fr_2fr] gap-6">
                <div>
                  <p className="text-xs text-[#324b75]/40">{e.period}</p>
                </div>
                <div>
                  <p
                    className="text-lg mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {e.degree}
                  </p>
                  <p className="text-sm text-[#324b75]/50">{e.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
