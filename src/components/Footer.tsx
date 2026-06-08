import Image from "next/image";
import { Mail, Link2 } from "lucide-react";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#biolily", label: "Biolily" },
  { href: "#vision", label: "Fito-colmenas" },
  { href: "#medicion", label: "Medición" },
  { href: "#validacion", label: "Validación" },
  { href: "#impacto", label: "Impacto" },
  { href: "#equipo", label: "Equipo" },
  { href: "#reconocimientos", label: "Reconocimientos" },
  { href: "#notas", label: "Notas" },
  { href: "#contacto", label: "Contacto" },
  { href: "#privacidad", label: "Avisos de privacidad" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <Image
                src="/logo-vertical-biolily.svg"
                alt="Biolily"
                width={140}
                height={80}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-green-300 text-sm font-medium italic">
              &ldquo;Tecnología ambiental inspirada en la naturaleza.&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Navegación
            </h4>
            <ul className="grid grid-cols-2 gap-2">
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-5">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contacto@biolily.com"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-green-300 transition-colors"
              >
                <Mail size={14} className="text-green-400 shrink-0" />
                contacto@biolily.com
              </a>
              <a
                href="https://es.linkedin.com/posts/fito-colmenas-by-biolily-innovations_biolilyinnovations-fitocolmenas-innovaci%C3%B3nambiental-activity-7299983063822839809-qDG2"
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

        <div className="border-t border-green-900/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
