import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
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
            <img
              src="main.png"
              className={`${scrolled ? "bg-black" : "bg-white"}`}
            />
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
          {["home", "services", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`${navText} ${navHover} transition`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-2.5 rounded-full font-semibold transition shadow-lg ${
              scrolled
                ? "bg-brand-600 text-slate-800 border border-slate-800 hover:bg-brand-700 shadow-brand-600/20"
                : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Free Consultation
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.8, rotate: 90 }}
          className={`md:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-slate-100 border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6 text-lg font-medium">
              {["home", "services", "about", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-700 text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="bg-slate-300 px-6 py-2 text-slate-700 rounded-xl text-center font-semibold hover:bg-brand-700 transition shadow-md"
              >
                Free Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}