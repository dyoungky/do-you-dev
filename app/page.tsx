import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cases from "./components/Cases";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Cases />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
