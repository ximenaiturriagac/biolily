import { ExternalLink, FileText, Link2, Newspaper } from "lucide-react";

const mediaItems = [
  {
    icon: Newspaper,
    source: "TecScience",
    title: "El EXATEC que usa el lirio acuático para limpiar la presa de Valle de Bravo",
    desc: "Nota sobre Eduardo Caballero y el desarrollo de un sistema flotante para limpiar ríos y lagos contaminados.",
    url: "https://tecscience.tec.mx/es/biotecnologia/lirio-acuatico-contra-contaminantes/",
    tag: "Nota periodística",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Link2,
    source: "LinkedIn oficial",
    title: "Fito-colmenas by Biolily",
    desc: "Publicaciones oficiales sobre Biolily, las Fito-colmenas, tecnología ambiental y soluciones basadas en la naturaleza.",
    url: "https://www.linkedin.com/company/fito-colmenas-by-biolily/",
    tag: "LinkedIn",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: Link2,
    source: "LinkedIn",
    title: "Fito-colmenas: tecnología en acción",
    desc: "Publicación sobre el funcionamiento, beneficios ambientales y potencial de las Fito-colmenas.",
    url: "https://www.linkedin.com/posts/fito-colmenas-by-biolily_de-un-problema-hist%C3%B3rico-a-una-esperanza-activity-7374888058548015104-v2Gj?utm_source=share&utm_medium=member_desktop&rcm=ACoAABMfwqkBt-yjK2qSBc_O5CdFVb0z4X1gFjU",
    tag: "LinkedIn",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: FileText,
    source: "Scribd / Informe técnico 2023",
    title: "Informe de implementación de las Fito-colmenas para el manejo integral del lirio acuático",
    desc: "Documento técnico sobre la implementación de Fito-colmenas en Valle de Bravo.",
    url: "https://www.scribd.com/document/675128324/Informe-IMPLEMENTACIO-N-DE-LAS-FITO-COLMENAS-PARA-EL-MANEJO-INTEGRAL-DEL-LIRIO-ACUA-TICO-Julio2023-2",
    tag: "Informe técnico",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: FileText,
    source: "Observatorio Valle de Bravo · UNAM",
    title: "Monitoreo hídrico permanente para la recuperación sustentable de Valle de Bravo",
    desc: "Documento técnico que menciona colmenas de fitorremediación con lirio acuático como estrategia de largo plazo.",
    url: "https://observatoriovalle.org.mx/wp-content/uploads/2024/06/ProValle-de-Bravo-UNAM_Monitoreo-del-Lago_mayo2022.pdf",
    tag: "Documento científico",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
];

export default function Media() {
  return (
    <section id="medios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            Notas y menciones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Biolily y Fito-colmenas en <span className="text-green-700">medios</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Notas periodísticas, publicaciones oficiales, informes técnicos y documentos
            científicos sobre el proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mediaItems.map(({ icon: Icon, source, title, desc, url, tag, color, bg, border }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-2xl p-6 ${bg} border ${border} hover:shadow-lg transition-all flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors mt-1" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                {source}
              </span>
              <h4 className="font-semibold text-gray-800 text-sm mb-2 leading-snug flex-1">
                {title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{desc}</p>
              <span className="inline-block px-2.5 py-1 rounded-full bg-white/70 text-xs text-gray-600 font-medium border border-gray-200 self-start">
                {tag}
              </span>
            </a>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0d2235] to-[#1a3a2a] p-10 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Link2 size={22} className="text-blue-400" />
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              LinkedIn
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">Síguenos en LinkedIn</h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Conoce nuestros avances, proyectos, reconocimientos y actualizaciones sobre
            tecnología ambiental, restauración hídrica y soluciones basadas en la naturaleza.
          </p>
          <a
            href="https://www.linkedin.com/company/fito-colmenas-by-biolily/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-lg"
          >
            <Link2 size={16} />
            Ver LinkedIn de Fito-colmenas by Biolily
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
