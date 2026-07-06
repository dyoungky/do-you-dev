import Nav from "../components/Nav";
import Prices from "../components/Prices";
import Footer from "../components/Footer";
import PricesHero from "../components/PricesHero";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Design & development packages in DKK",
  description:
    "Straightforward pricing for UX/UI design and web development. Design-only, design + build, and monthly retainer options — all in DKK, with no surprises.",
  alternates: { canonical: "/prices" },
};

export default function PricesPage() {
  return (
    <>
      <Nav />
      <main>
        <PricesHero />
        <Prices />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
