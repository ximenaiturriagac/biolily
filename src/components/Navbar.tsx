"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#fito-colmenas", label: "Fito-colmenas" },
  { href: "#impacto", label: "Impacto" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#reconocimientos", label: "Reconocimientos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#medios", label: "Medios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-green-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#inicio"
          className={`flex items-center px-3 py-1.5 rounded-xl transition-all ${
            scrolled ? "" : "bg-white/20 backdrop-blur-sm"
          }`}
        >
          <Image
            src="/logo-horizontal-biolily.svg"
            alt="Biolily"
            width={160}
            height={48}
            className="h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-green-50 hover:text-green-700 ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="ml-2 px-5 py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow-md"
            >
              Contáctanos
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-green-100 shadow-lg">
          <ul className="flex flex-col py-4 px-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition-colors"
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
