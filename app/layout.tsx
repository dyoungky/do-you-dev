import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doyou.dev"),
  title: {
    default: "doyou.dev — UX/UI design & web development in Copenhagen",
    template: "%s · doyou.dev",
  },
  description:
    "Freelance UX/UI designer and web developer in Østerbro, Copenhagen. From affordable WordPress sites to custom React frontends and full-stack web apps — clear packages, transparent pricing in DKK.",
  keywords: [
    "web design Copenhagen",
    "web developer Copenhagen",
    "UX UI design",
    "WordPress website",
    "React developer",
    "Next.js developer",
    "webudvikler København",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_DK",
    url: "https://doyou.dev",
    siteName: "doyou.dev",
    title: "doyou.dev — UX/UI design & web development in Copenhagen",
    description:
      "Clear packages for UX/UI design and web development — WordPress, custom React frontends, and full-stack web apps. Transparent pricing in DKK.",
  },
  twitter: {
    card: "summary_large_image",
    title: "doyou.dev — UX/UI design & web development in Copenhagen",
    description:
      "Clear packages for UX/UI design and web development. Transparent pricing in DKK.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "doyou.dev",
  description:
    "Freelance UX/UI design and web development — WordPress, custom React frontends, and full-stack web apps.",
  url: "https://doyou.dev",
  email: "dyoungky.dk@gmail.com",
  areaServed: "DK",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Østerbro, Copenhagen",
    addressCountry: "DK",
  },
  founder: {
    "@type": "Person",
    name: "Doyoung Kim Gormsen",
  },
  sameAs: [
    "https://www.linkedin.com/in/doyoung-kim-35108916a/",
    "https://github.com/dyoungky",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#faf9f6] text-[#324b75]" style={{ cursor: "none" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
