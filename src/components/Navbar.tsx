"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = translations[lang].navbar;

  const navLinks = [
    { href: "/#inicio", label: t.inicio },
    { href: "/#biolily", label: t.biolily },
    { href: "/#monitoreo", label: t.monitoreo },
    { href: "/#validacion", label: t.validacion },
    { href: "/#impacto", label: t.impacto },
    { href: "/#unete", label: t.unete },
    { href: "/equipo", label: t.equipo },
    { href: "/#reconocimientos", label: t.reconocimientos },
  ];

  const tecLinks = [
    { href: "/tecnologias", label: t.fitocolmenas },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top bar — desktop only, language toggle */}
      <div className="hidden lg:flex justify-end items-center px-4 sm:px-6 lg:px-8 py-1 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center gap-1 text-xs font-semibold">
          <button
            onClick={() => setLang("es")}
            className={`px-2 py-0.5 rounded transition-colors ${lang === "es" ? "text-green-700" : "text-gray-400 hover:text-gray-700"}`}
          >
            ES
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-0.5 rounded transition-colors ${lang === "en" ? "text-green-700" : "text-gray-400 hover:text-gray-700"}`}
          >
            EN
          </button>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-horizontal-biolily.svg"
            alt="Biolily"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <a href={link.href} className="px-2.5 py-2 rounded-lg text-sm font-medium text-gray-700 transition-all hover:bg-green-50 hover:text-green-700 whitespace-nowrap">
                {link.label}
              </a>
            </li>
          ))}

          {/* Dropdown: Nuestras Tecnologías */}
          <li className="relative group">
            <Link href="/#tecnologias" className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all whitespace-nowrap">
              {t.tecnologias}
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </Link>
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
              <a href={link.href} className="px-2.5 py-2 rounded-lg text-sm font-medium text-gray-700 transition-all hover:bg-green-50 hover:text-green-700 whitespace-nowrap">
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/contacto"
              className="ml-2 px-5 py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow-md"
            >
              {t.contactanos}
            </a>
          </li>

        </ul>

        {/* Mobile: hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menu}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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

            {/* Mobile dropdown: Tecnologías */}
            <li>
              <div className="flex items-center">
                <Link
                  href="/#tecnologias"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 px-4 py-3 text-gray-700 text-sm font-medium rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  {t.tecnologias}
                </Link>
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
                {t.contactanos}
              </a>
            </li>

            {/* Language toggle at bottom of mobile menu */}
            <li className="pt-3 pb-1 border-t border-gray-100 flex justify-center gap-1 text-sm font-semibold">
              <button
                onClick={() => { setLang("es"); setMenuOpen(false); }}
                className={`px-3 py-1.5 rounded-full transition-colors ${lang === "es" ? "bg-green-50 text-green-700" : "text-gray-400"}`}
              >
                Español
              </button>
              <button
                onClick={() => { setLang("en"); setMenuOpen(false); }}
                className={`px-3 py-1.5 rounded-full transition-colors ${lang === "en" ? "bg-green-50 text-green-700" : "text-gray-400"}`}
              >
                English
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
