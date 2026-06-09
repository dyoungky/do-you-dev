import Nav from "../components/Nav";
import Prices from "../components/Prices";
import Footer from "../components/Footer";
import PricesHero from "../components/PricesHero";
import Process from "../components/Process";
import FAQ from "../components/FAQ";

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
