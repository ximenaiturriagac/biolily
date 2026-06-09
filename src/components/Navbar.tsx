"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#biolily", label: "Biolily" },
  { href: "#tecnologias", label: "Nuestras Tecnologías" },
  { href: "#monitoreo", label: "Monitoreo" },
  { href: "#validacion", label: "Validación" },
  { href: "#impacto", label: "Impacto" },
  { href: "#unete", label: "Únete" },
  { href: "#reconocimientos", label: "Reconocimientos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <Image
            src="/logo-horizontal-biolily.svg"
            alt="Biolily"
            width={240}
            height={72}
            className="h-14 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-2.5 py-2 rounded-lg text-xs font-medium text-gray-700 transition-all hover:bg-green-50 hover:text-green-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="ml-2 px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white text-xs font-semibold rounded-full transition-all shadow-sm hover:shadow-md"
            >
              Contáctanos
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
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
