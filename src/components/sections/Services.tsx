import {
  Search,
  Lightbulb,
  Wrench,
  Settings,
  BarChart3,
  FileText,
  Droplets,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnóstico ambiental",
    desc: "Evaluación integral del estado del cuerpo de agua: calidad, nutrientes, eutrofización y factores relevantes.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Lightbulb,
    title: "Diseño de soluciones",
    desc: "Diseño de esquemas de intervención basados en la naturaleza, adaptados al sitio y objetivos del proyecto.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Wrench,
    title: "Implementación de Fito-colmenas",
    desc: "Instalación y puesta en marcha de módulos flotantes en el cuerpo de agua objetivo.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Settings,
    title: "Operación y mantenimiento",
    desc: "Gestión operativa continua del sistema: cosecha, monitoreo, ajustes y mantenimiento de módulos.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: BarChart3,
    title: "Medición de impacto",
    desc: "Cuantificación de beneficios ambientales y volumétricos bajo metodologías estandarizadas.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: FileText,
    title: "Reportes técnicos",
    desc: "Informes detallados para empresas, gobiernos, fondos y aliados sobre el desempeño del proyecto.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Droplets,
    title: "Water stewardship",
    desc: "Estrategias integrales de gestión hídrica responsable alineadas con estándares internacionales.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Rocket,
    title: "Proyectos piloto y escalamiento",
    desc: "Diseño e implementación de pilotos con potencial de escalamiento multianual y multisitio.",
    color: "text-lime-600",
    bg: "bg-lime-50",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            Servicios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Qué <span className="text-green-700">hacemos</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Desde el diagnóstico hasta el reporte de impacto, acompañamos cada etapa del
            proyecto de restauración hídrica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon size={22} className={color} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">{title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
