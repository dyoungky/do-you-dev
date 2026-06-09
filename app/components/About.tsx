export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-xs tracking-[0.14em] uppercase text-[#324b75/35 mb-6">Who We Are</p>
          <h2
            className="text-4xl md:text-5xl leading-tight mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            We bring the{" "}
            <em className="italic text-[#293465]">creative fire</em>{" "}
            to help you touch more lives.
          </h2>
          <p className="text-sm text-[#324b75/55 leading-relaxed mb-5">
            Our ever-growing team of designers, strategists, developers,
            communicators, and visual artists work together to tell your
            story. We believe our purpose is to do good work for good
            people, and to inspire others to live a meaningful life with
            intention and impact.
          </p>
          <a
            href="#contact"
            className="inline-block text-xs tracking-[0.12em] uppercase border border-[#324b75/20 px-6 py-3 hover:bg-[#293465] hover:text-white hover:border-[#293465] transition-colors"
          >
            Meet our collaborators
          </a>
        </div>

        {/* Right — collage */}
        <div className="relative grid grid-cols-2 gap-3">
          <div className="aspect-[3/4] overflow-hidden bg-[#e8e4dd] col-span-1 row-span-2 self-start mt-10">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=75"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden bg-[#e0dbd2]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=75"
              alt="Work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden bg-[#d4cfc7]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=75"
              alt="Studio"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Number labels */}
          <p className="absolute bottom-0 right-0 text-[10px] tracking-[0.1em] uppercase text-[#324b75/30 text-right leading-5">
            01 / Our founder, Esther<br />
            02 / Our team on a photo set<br />
            03 / Our go-to developer, Jess
          </p>
        </div>
      </div>
    </section>
  );
}
