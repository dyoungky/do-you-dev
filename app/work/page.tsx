import Nav from "../components/Nav";
import Footer from "../components/Footer";

const projects = [
  {
    num: "01",
    tag: "REACT / TYPESCRIPT / FULL-STACK",
    title: "NAME",
    desc: "Built full-stack e-commerce site 'NAME' at ITU, starting with HTML/CSS/JS and later rebuilt in React.",
    tech: ["React", "TypeScript", "Node.js", "Express", "REST API", "HTML", "CSS"],
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Name.gif",
    github: "https://github.com/dyoungky/ITU-FinalProject-NAME",
    live: null,
  },
  {
    num: "02",
    tag: "WORDPRESS / WEB DESIGN",
    title: "Dkemy",
    desc: "WordPress-based project with custom theme design and content management.",
    tech: ["WordPress", "HTML", "CSS"],
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Dkemy.gif",
    github: null,
    live: null,
  },
  {
    num: "03",
    tag: "REACT / UI",
    title: "Ferm Living",
    desc: "Simple web application built with React, showcasing a collection of furniture items from Ferm Living.",
    tech: ["React", "HTML", "CSS"],
    img: "https://doyoungkim.com/images/projects/WebDevelopment/ferm-resposible.gif",
    github: "https://github.com/dyoungky/FermLiving",
    live: "https://react-fermliving-dy.netlify.app/",
  },
  {
    num: "04",
    tag: "REACT / TRAVEL",
    title: "Back Roads",
    desc: "Web application built with React, designed for a travel agency allowing users to browse destinations and travel packages.",
    tech: ["React", "HTML", "CSS"],
    img: "https://doyoungkim.com/images/projects/WebDevelopment/Backroads-responsible.gif",
    github: "https://github.com/dyoungky/BACKROADS",
    live: "https://react-backroads-dy.netlify.app/",
  },
];

export default function Work() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-8 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75]/40 mb-4">Work</p>
          <h1
            className="text-5xl md:text-6xl leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Selected<br />
            <em className="italic text-[#293465]">Projects.</em>
          </h1>
        </div>

        {/* Project list */}
        <div className="divide-y divide-[#324b75]/10">
          {projects.map((p) => (
            <div key={p.num} className="py-16 grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="overflow-hidden bg-[#e8e4dd] aspect-[16/10] group">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/40 mb-3">{p.tag}</p>
                <h2
                  className="text-3xl md:text-4xl leading-snug mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {p.title}
                </h2>
                <p className="text-[15px] text-[#324b75]/65 leading-relaxed mb-6">{p.desc}</p>

                {/* Tech tags */}
                <ul className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] tracking-wide border border-[#324b75]/15 px-3 py-1 text-[#324b75]/60"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-6">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.1em] uppercase text-[#293465] border-b border-[#293465]/40 pb-px hover:border-[#293465] transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.1em] uppercase text-[#293465] border-b border-[#293465]/40 pb-px hover:border-[#293465] transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
