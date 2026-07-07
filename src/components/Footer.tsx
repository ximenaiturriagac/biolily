"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Download, FileText, ExternalLink, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const { lang } = useLang();
  const t = translations[lang].footer;

  const navLinks = [
    { href: "/#inicio", label: t.inicio },
    { href: "/#biolily", label: t.biolily },
    { href: "/#tecnologias", label: t.tecnologias },
    { href: "/#monitoreo", label: t.monitoreo },
    { href: "/#validacion", label: t.validacion },
    { href: "/#impacto", label: t.impacto },
    { href: "/impacto", label: t.agenda2030 },
    { href: "/#unete", label: t.unete },
    { href: "/equipo", label: t.equipo },
    { href: "/#reconocimientos", label: t.reconocimientos },
    { href: "/notas", label: t.notas },
    { href: "/contacto", label: t.contactanos },
  ];

  return (
    <footer className="bg-[#0f1f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Image
              src="/logo-vertical-biolily.svg"
              alt="Biolily"
              width={180}
              height={108}
              className="h-24 w-auto brightness-0 invert"
            />
            <p className="text-green-300 text-sm font-medium italic">
              &ldquo;{t.tagline}&rdquo;
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              {t.navigation}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-green-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              {t.siguenos}
            </h4>
            <a
              href="https://www.linkedin.com/company/biolily/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group w-full"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                <path d="M7.5 9.5H5V18H7.5V9.5Z" fill="white" />
                <circle cx="6.25" cy="6.75" r="1.5" fill="white" />
                <path d="M13 12.5C13 11.4 13.9 10.5 15 10.5C16.1 10.5 17 11.4 17 12.5V18H19.5V12.5C19.5 10 17.5 8 15 8C13.8 8 12.7 8.5 12 9.3V9.5H9.5V18H12V12.5H13Z" fill="white" />
              </svg>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">{t.linkedinName}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.linkedin}</p>
              </div>
              <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-200 transition-colors ml-auto" />
            </a>
            <a
              href="mailto:ad.biolily@gmail.com"
              className="mt-3 flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group w-full"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Mail size={20} className="text-green-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">ad.biolily@gmail.com</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.email}</p>
              </div>
              <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-200 transition-colors ml-auto" />
            </a>
          </div>
        </div>

        {/* Privacy accordion */}
        <div className="border-t border-green-900/50 pt-8 mb-6">
          <button
            onClick={() => setPrivacyOpen(!privacyOpen)}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-200 text-sm transition-colors"
          >
            <FileText size={14} className="text-green-600" />
            {t.avisosPrivacidad}
            <ChevronDown size={14} className={`transition-transform ${privacyOpen ? "rotate-180" : ""}`} />
          </button>

          {privacyOpen && (
            <div className="mt-5 max-w-3xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold text-sm mb-4">{t.avisoSimplificado}</h4>
              <div className="text-gray-400 text-xs leading-relaxed space-y-3">
                <p><span className="text-gray-300 font-medium">{t.responsable}</span> {t.responsableDesc}</p>
                <p><span className="text-gray-300 font-medium">{t.finalidades}</span> {t.finalidadesDesc}</p>
                <p><span className="text-gray-300 font-medium">{t.datos}</span> {t.datosDesc}</p>
                <p><span className="text-gray-300 font-medium">{t.transferencias}</span> {t.transferenciasDesc}</p>
                <p><span className="text-gray-300 font-medium">{t.arco}</span> {t.arcoDesc} <a href="mailto:ad.biolily@gmail.com" className="text-green-400 underline">ad.biolily@gmail.com</a>.</p>
              </div>
              <a
                href="/docs/aviso-privacidad-integral.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-green-800/50 hover:bg-green-700/50 text-green-300 text-xs font-medium transition-colors border border-green-700/40"
              >
                <Download size={13} />
                {t.descargar}
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} Biolily. {t.copyright}</p>
          <p className="text-gray-400 text-xs">{t.lugar}</p>
        </div>
      </div>
    </footer>
  );
}
