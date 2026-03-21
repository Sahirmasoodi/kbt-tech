import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-100 selection:text-brand-900">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}