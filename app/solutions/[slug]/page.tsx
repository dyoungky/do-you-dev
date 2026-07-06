import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { designs, getDesign, tierLabels, packages } from "../data";

export function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const design = getDesign(slug);
  if (!design) return {};
  return {
    title: `${design.title} — ${tierLabels[design.tier]} design`,
    description: design.desc,
    alternates: { canonical: `/solutions/${design.slug}` },
    openGraph: {
      title: `${design.title} — ${tierLabels[design.tier]} design`,
      description: design.desc,
      images: [design.img],
      type: "article",
    },
  };
}

export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const design = getDesign(slug);
  if (!design) notFound();

  const pkg = packages.find((p) => p.id === design.tier)!

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${design.title} — ${tierLabels[design.tier]}`,
    serviceType: tierLabels[design.tier],
    description: design.desc,
    provider: {
      "@type": "ProfessionalService",
      name: "doyou.dev",
      areaServed: "DK",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Østerbro, Copenhagen",
        addressCountry: "DK",
      },
    },
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-32 pb-24">

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-8 mb-20">
          <Link href="/solutions" className="text-xs tracking-[0.12em] uppercase text-[#324b75]/40 hover:text-[#324b75] transition-colors mb-8 inline-block">
            ← All solutions
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/40">{design.tag} — {design.year}</p>
            <span className="text-[10px] tracking-[0.1em] uppercase bg-[#293465]/8 text-[#293465] px-2 py-1">
              {tierLabels[design.tier]}
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1a1f3c]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {design.title}
          </h1>
          <p className="text-[15px] text-[#324b75]/60 max-w-xl leading-relaxed">{design.overview}</p>

          <div className="flex flex-wrap gap-8 mt-8 text-xs tracking-[0.1em] uppercase text-[#324b75]/40">
            <div>
              <p className="mb-1 text-[#324b75]/25">Role</p>
              <p className="text-[#324b75]/70">{design.role}</p>
            </div>
            <div>
              <p className="mb-1 text-[#324b75]/25">Est. build time</p>
              <p className="text-[#324b75]/70">{design.designTime}</p>
            </div>
            <div>
              <p className="mb-1 text-[#324b75]/25">Package</p>
              <p className="text-[#324b75]/70">{tierLabels[design.tier]}</p>
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            {design.live && (
              <a href={design.live} target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.1em] uppercase text-[#293465] border-b border-[#293465]/40 pb-px hover:border-[#293465] transition-colors">
                Live demo →
              </a>
            )}
          </div>
        </div>

        {/* Main image */}
        <div className="max-w-6xl mx-auto px-8 mb-24">
          <div className="overflow-hidden bg-[#e8e4dd] aspect-[16/9]">
            <img src={design.img} alt={`${design.title} preview`} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Deployment & hosting */}
        <div className="max-w-6xl mx-auto px-8 mb-24 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">Where it&apos;s deployed</p>
            <p className="text-[17px] text-[#1a1f3c] leading-relaxed mb-3">{design.deployment}</p>
            <p className="text-sm text-[#324b75]/55 leading-relaxed">{design.hosting}</p>
            <ul className="flex flex-wrap gap-2 mt-6">
              {design.tech.map((t) => (
                <li key={t} className="text-[11px] tracking-wide border border-[#324b75]/15 px-3 py-1 text-[#324b75]/60">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">Running costs</p>
            <ul className="divide-y divide-[#324b75]/10 border-t border-b border-[#324b75]/10">
              {design.ongoing.map((o) => (
                <li key={o.label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-[#324b75]/60">{o.label}</span>
                  <span className="text-[#1a1f3c] text-right whitespace-nowrap">{o.cost}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#324b75]/45 mt-4 leading-relaxed">
              You own the domain, code and accounts. These are typical third-party costs —
              not fees paid to me.
            </p>
          </div>
        </div>

        {/* Marketing foundation */}
        <div className="max-w-6xl mx-auto px-8 mb-24">
          <div className="border border-[#324b75]/10 p-8 bg-[#f7f5f1]">
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-4">Marketing foundation — {tierLabels[design.tier]}</p>
            <h2 className="text-xl mb-6 text-[#1a1f3c]" style={{ fontFamily: "var(--font-serif)" }}>
              Shipped ready to be found.
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {pkg.marketingIncludes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#324b75]/65">
                  <span className="text-[#293465]/50 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-6xl mx-auto px-8 mb-24">          <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-12">How it&apos;s built</p>
          <div className="divide-y divide-[#324b75]/8">
            {design.process.map((step) => (
              <div key={step.heading} className="py-10 grid md:grid-cols-[1fr_2fr] gap-16">
                <h2
                  className="text-xl text-[#1a1f3c]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {step.heading}
                </h2>
                <p className="text-[15px] text-[#324b75]/65 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome + CTA */}
        <div className="max-w-6xl mx-auto px-8 border-t border-[#324b75]/10 pt-16">
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#324b75]/35 mb-6">What you get</p>
          <p className="text-[17px] text-[#1a1f3c] leading-relaxed max-w-2xl mb-10">{design.outcome}</p>
          <a href="/#contact" className="text-xs tracking-[0.12em] uppercase bg-[#293465] text-white px-8 py-4 inline-block hover:bg-[#4770bd] transition-colors">
            Start with this design →
          </a>
        </div>

      </main>
      <Footer />
    </>
  );
}
