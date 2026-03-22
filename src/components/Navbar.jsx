import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  const navText = scrolled ? "text-slate-800" : "text-white/90";
  const navHover = scrolled ? "hover:text-brand-600" : "hover:text-white";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-6 h-6" />
          </div>

          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            KBT <span className="text-brand-600">Technologies</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => scrollToSection("home")}
            className={`${navText} ${navHover} transition`}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className={`${navText} ${navHover} transition`}
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={`${navText} ${navHover} transition`}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`${navText} ${navHover} transition`}
          >
            Contact
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-2.5 rounded-full font-semibold transition shadow-lg ${
              scrolled
                ? "bg-brand-600 text-slate-800 border border-slate-800 hover:bg-brand-700 shadow-brand-600/20"
                : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Free Consultation
          </button>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-slate-900" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-100 border-t border-slate-100 shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-6 text-lg font-medium">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-700"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-700"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-brand-600 text-white px-6 py-3 rounded-xl text-center font-semibold hover:bg-brand-700 transition shadow-md"
            >
              Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
