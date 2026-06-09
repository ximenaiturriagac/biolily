"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, Link2, ChevronDown, Download, FileText } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#biolily", label: "Biolily" },
  { href: "#tecnologias", label: "Nuestras Tecnologías" },
  { href: "#monitoreo", label: "Monitoreo" },
  { href: "#validacion", label: "Validación" },
  { href: "#impacto", label: "Impacto" },
  { href: "#unete", label: "Únete" },
  { href: "/equipo", label: "Equipo" },
  { href: "#reconocimientos", label: "Reconocimientos" },
  { href: "/notas", label: "Notas y menciones" },
  { href: "/contacto", label: "Contáctanos" },
];

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#0f1f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo-vertical-biolily.svg"
              alt="Biolily"
              width={180}
              height={108}
              className="h-24 w-auto brightness-0 invert"
            />
            <p className="text-green-300 text-sm font-medium italic">
              &ldquo;Tecnología ambiental inspirada en la naturaleza.&rdquo;
            </p>
            <div className="space-y-2 pt-2">
              <a
                href="mailto:ad.biolily@gmail.com"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-green-300 transition-colors"
              >
                <Mail size={14} className="text-green-400 shrink-0" />
                ad.biolily@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/company/fito-colmenas-by-biolily/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-green-300 transition-colors"
              >
                <Link2 size={14} className="text-green-400 shrink-0" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Navegación
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-green-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Privacy accordion */}
        <div className="border-t border-green-900/50 pt-8 mb-6">
          <button
            onClick={() => setPrivacyOpen(!privacyOpen)}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            <FileText size={14} className="text-green-600" />
            Avisos de privacidad
            <ChevronDown
              size={14}
              className={`transition-transform ${privacyOpen ? "rotate-180" : ""}`}
            />
          </button>

          {privacyOpen && (
            <div className="mt-5 max-w-3xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold text-sm mb-4">
                Aviso de privacidad simplificado
              </h4>
              <div className="text-gray-400 text-xs leading-relaxed space-y-3">
                <p>
                  <span className="text-gray-300 font-medium">Responsable:</span> Biolily es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Finalidades:</span> Atender solicitudes de contacto y proyectos; enviar información sobre nuestros servicios; dar seguimiento a reportes del canal de integridad; y cumplir obligaciones legales.
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Datos recabados:</span> Nombre, correo electrónico, teléfono, organización y cargo. No recabamos datos sensibles.
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Transferencias:</span> Sus datos no serán transferidos a terceros sin su consentimiento, salvo obligación legal.
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Derechos ARCO:</span> Envía un correo a{" "}
                  <a href="mailto:ad.biolily@gmail.com" className="text-green-400 underline">ad.biolily@gmail.com</a>.
                </p>
              </div>
              <a
                href="/docs/aviso-privacidad-integral.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-green-800/50 hover:bg-green-700/50 text-green-300 text-xs font-medium transition-colors border border-green-700/40"
              >
                <Download size={13} />
                Descargar aviso integral
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Biolily. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Tecnología ambiental &middot; Valle de Bravo &middot; México
          </p>
        </div>
      </div>
    </footer>
  );
}
