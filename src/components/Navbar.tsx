"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#biolily", label: "Biolily" },
  // "Nuestras Tecnologías" handled separately as dropdown
  { href: "/#monitoreo", label: "Monitoreo" },
  { href: "/#validacion", label: "Validación" },
  { href: "/#impacto", label: "Impacto" },
  { href: "/#unete", label: "Únete" },
  { href: "/equipo", label: "Equipo" },
  { href: "/#reconocimientos", label: "Reconocimientos" },
];

const tecLinks = [
  { href: "/tecnologias", label: "Fito-colmenas" },
  // Add future technologies here
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo-horizontal-biolily.svg"
            alt="Biolily"
            width={280}
            height={84}
            className="h-16 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <a href={link.href} className="px-2.5 py-2 rounded-lg text-sm font-medium text-gray-700 transition-all hover:bg-green-50 hover:text-green-700">
                {link.label}
              </a>
            </li>
          ))}

          {/* Dropdown: Nuestras Tecnologías */}
          <li className="relative group">
            <a href="/#tecnologias" className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all">
              Nuestras Tecnologías
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </a>
            <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[180px] z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              {tecLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </li>

          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <a href={link.href} className="px-2.5 py-2 rounded-lg text-sm font-medium text-gray-700 transition-all hover:bg-green-50 hover:text-green-700">
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/contacto"
              className="ml-2 px-5 py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow-md"
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
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 text-sm font-medium rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile dropdown: Nuestras Tecnologías */}
            <li>
              <div className="flex items-center">
                <a
                  href="/#tecnologias"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 px-4 py-3 text-gray-700 text-sm font-medium rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  Nuestras Tecnologías
                </a>
                <button
                  onClick={() => setTechOpen(!techOpen)}
                  className="px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
                >
                  <ChevronDown size={16} className={`transition-transform ${techOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {techOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-green-100 pl-3">
                  {tecLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 text-sm font-medium rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a href="/contacto" onClick={() => setMenuOpen(false)} className="block text-center px-4 py-3 bg-green-700 text-white text-sm font-semibold rounded-full hover:bg-green-800 transition-colors">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
