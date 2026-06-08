import { FileText } from "lucide-react";

const docs = [
  {
    title: "Aviso de privacidad integral",
    desc: "Documento completo sobre el tratamiento de datos personales por parte de Biolily.",
    href: "/docs/aviso-privacidad-integral.pdf",
  },
  {
    title: "Aviso de privacidad simplificado",
    desc: "Versión resumida del aviso de privacidad para consulta rápida.",
    href: "/docs/aviso-privacidad-simplificado.pdf",
  },
];

export default function Privacidad() {
  return (
    <section id="privacidad" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Avisos de privacidad
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Consulta nuestros documentos de privacidad y tratamiento de datos personales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {docs.map(({ title, desc, href }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <FileText size={20} className="text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                <FileText size={14} />
                Descargar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
