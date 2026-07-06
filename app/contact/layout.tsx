import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — UX/UI designer & frontend developer in Copenhagen",
  description:
    "Get in touch with Doyoung Kim Gormsen — frontend developer and designer based in Østerbro, Copenhagen. Let's build your next website or web app.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
