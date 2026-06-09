"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, Link2, ChevronDown, Download, FileText } from "lucide-react";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#biolily", label: "Biolily" },
  { href: "#tecnologias", label: "Nuestras Tecnologías" },
  { href: "#monitoreo", label: "Monitoreo" },
  { href: "#validacion", label: "Validación" },
  { href: "#impacto", label: "Impacto" },
  { href: "#unete", label: "Únete" },
  { href: "#reconocimientos", label: "Reconocimientos" },
  { href: "#contacto", label: "Contáctanos" },
];

const mediaLinks = [
  {
    label: "TecScience — El EXATEC que usa el lirio acuático",
    url: "https://tecscience.tec.mx/es/biotecnologia/lirio-acuatico-contra-contaminantes/",
  },
  {
    label: "LinkedIn — Fito-colmenas by Biolily",
    url: "https://www.linkedin.com/company/fito-colmenas-by-biolily/",
  },
  {
    label: "Informe técnico 2023 (Scribd)",
    url: "https://www.scribd.com/document/675128324/Informe-IMPLEMENTACIO-N-DE-LAS-FITO-COLMENAS-PARA-EL-MANEJO-INTEGRAL-DEL-LIRIO-ACUA-TICO-Julio2023-2",
  },
  {
    label: "Observatorio Valle de Bravo · UNAM",
    url: "https://observatoriovalle.org.mx/wp-content/uploads/2024/06/ProValle-de-Bravo-UNAM_Monitoreo-del-Lago_mayo2022.pdf",
  },
];

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#0f1f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo-vertical-biolily.svg"
              alt="Biolily"
              width={160}
              height={96}
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="text-green-300 text-sm font-medium italic">
              &ldquo;Tecnología ambiental inspirada en la naturaleza.&rdquo;
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Navegación
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
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

          {/* Notas y menciones */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Notas y menciones
            </h4>
            <ul className="space-y-2">
              {mediaLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-green-300 transition-colors leading-snug block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Contacto
            </h4>
            <div className="space-y-3">
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
            <div className="mt-6 p-4 rounded-xl bg-green-900/30 border border-green-800/50">
              <p className="text-green-300 text-xs italic leading-relaxed">
                &ldquo;Confiamos en la infinita sabiduría de la naturaleza.&rdquo;
              </p>
            </div>
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
                  <span className="text-gray-300 font-medium">Responsable:</span> Biolily, con domicilio en México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Finalidades:</span> Los datos personales recabados se utilizan para: atender solicitudes de contacto y proyectos; enviar información sobre nuestros servicios de restauración hídrica; dar seguimiento a reportes del canal de integridad; y cumplir obligaciones legales.
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Datos recabados:</span> Nombre, correo electrónico, teléfono, organización y cargo. No recabamos datos personales sensibles.
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Transferencias:</span> Sus datos no serán transferidos a terceros sin su consentimiento, salvo por obligación legal.
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Derechos ARCO:</span> Puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición enviando un correo a{" "}
                  <a href="mailto:ad.biolily@gmail.com" className="text-green-400 underline">
                    ad.biolily@gmail.com
                  </a>.
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
