import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white sticky top-0 z-50 shadow shadow-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          KBT <span className="text-blue-500 ms-2">Technologies</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link to="/services" className="hover:text-blue-400 transition">
            Services
          </Link>

          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-white text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 text-white flex flex-col">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <span className="text-xl font-bold">
              KBT <span className="text-blue-500">Fiesta</span>
            </span>

            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              ✕
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8 text-lg">
            <Link
              to="/"
              className="hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/services"
              className="hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/contact"
              className=" px-6 py-3 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
