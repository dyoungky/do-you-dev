export default function Footer() {
  return (
    <footer className="bg-[#293465] text-white" data-cursor-theme="dark">
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 text-xs tracking-[0.1em] uppercase">
          <div className="flex flex-col gap-3">
            <p className="text-white/50 mb-1">Doyou</p>
            {[
              { label: "Work", href: "/work" },
              { label: "About", href: "/about" },
              { label: "Prices", href: "#prices" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-white/60 hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white/50 mb-1">Services</p>
            {["UX/UI Design", "Frontend Dev", "Prototyping", "Design System"].map((l) => (
              <span key={l} className="text-white/60">{l}</span>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white/50 mb-1">Social</p>
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/doyoung-kim-35108916a/" },
              { label: "GitHub", href: "https://github.com/dyoungky" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white/50 mb-1">Contact</p>
            <span className="text-white/60">dyoungky.dk@gmail.com</span>
            <span className="text-white/60">Copenhagen, Denmark</span>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="border-t border-white/15 pt-8 flex items-end justify-between overflow-hidden">
          <h2
            className="text-[18vw] leading-none tracking-tight text-white select-none"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Doyou
          </h2>
          <p className="text-xs text-white/30 pb-3 shrink-0 ml-4">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
