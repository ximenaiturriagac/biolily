import { ExternalLink, ArrowRight } from "lucide-react";

const LinkedInLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path d="M7.5 9.5H5V18H7.5V9.5Z" fill="white" />
    <circle cx="6.25" cy="6.75" r="1.5" fill="white" />
    <path d="M13 12.5C13 11.4 13.9 10.5 15 10.5C16.1 10.5 17 11.4 17 12.5V18H19.5V12.5C19.5 10 17.5 8 15 8C13.8 8 12.7 8.5 12 9.3V9.5H9.5V18H12V12.5H13Z" fill="white" />
  </svg>
);

export default function LinkedInBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0d2235] to-[#1a3a2a] p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left: LinkedIn follow */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <LinkedInLogo />
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-300">LinkedIn</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Síguenos en LinkedIn</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Conoce nuestros avances, proyectos, reconocimientos y actualizaciones sobre
                tecnología ambiental, restauración hídrica y soluciones basadas en la naturaleza.
              </p>
              <a
                href="https://www.linkedin.com/company/fito-colmenas-by-biolily/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#0856A0] text-white font-semibold rounded-full transition-all shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 9.5H5V18H7.5V9.5ZM6.25 8.25C5.56 8.25 5 7.69 5 7C5 6.31 5.56 5.75 6.25 5.75C6.94 5.75 7.5 6.31 7.5 7C7.5 7.69 6.94 8.25 6.25 8.25ZM19 18H16.5V13.5C16.5 12.4 15.6 11.5 14.5 11.5C13.4 11.5 12.5 12.4 12.5 13.5V18H10V9.5H12.5V10.8C13.2 9.9 14.3 9.3 15.5 9.3C17.4 9.3 19 10.9 19 12.8V18Z" />
                </svg>
                Seguir en LinkedIn
                <ExternalLink size={14} />
              </a>
            </div>


            {/* Right: Contact CTA */}
            <div className="border-t border-white/20 lg:border-t-0 lg:border-l lg:pl-10 pt-8 lg:pt-0 text-center lg:text-left">
              <span className="text-sm font-semibold uppercase tracking-widest text-green-400 block mb-3">
                ¿Listo para actuar?
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">
                Diseñemos tu proyecto de restauración hídrica
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Si tu organización tiene metas de agua, sostenibilidad o restauración ecológica,
                cuéntanos tu caso. Juntos podemos diseñar una solución basada en la naturaleza
                con resultados verificables.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-green-500/25"
              >
                Contáctanos
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
