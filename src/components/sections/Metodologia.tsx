import { Leaf, Droplets, BarChart2, Microscope, FileText } from "lucide-react";

const components = [
  {
    title: "Nature Based Solutions",
    desc: "Adoptamos los principios de Soluciones Basadas en la Naturaleza para diseñar tecnologías que ayudan al planeta a ser más eficiente.",
    Icon: Leaf,
    color: "bg-green-600",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Water Stewardship",
    desc: "Generamos beneficios volumétricos verificables alineados con estándares internacionales de gestión responsable del agua.",
    Icon: Droplets,
    color: "bg-blue-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "VWBA 2.0",
    desc: "Aplicamos metodologías reconocidas para el cálculo y verificación de beneficios volumétricos de agua en proyectos de restauración.",
    Icon: BarChart2,
    color: "bg-teal-600",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "Monitoreo científico",
    desc: "Cada proyecto incluye un protocolo de monitoreo con indicadores definidos, mediciones periódicas y análisis de resultados.",
    Icon: Microscope,
    color: "bg-violet-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Reportes de desempeño",
    desc: "Generamos reportes periódicos que documentan avances, resultados y cumplimiento de metas para cada parte interesada.",
    Icon: FileText,
    color: "bg-amber-600",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function Metodologia() {
  return (
    <section id="metodologia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            Metodología
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Un enfoque alineado con estándares internacionales
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Nuestros proyectos integran principios de Soluciones Basadas en la Naturaleza, Water
            Stewardship y monitoreo científico para generar resultados verificables y escalables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {components.slice(0, 3).map(({ title, desc, Icon, iconBg, iconColor }) => (
            <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
              <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                <Icon size={20} className={iconColor} />
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {components.slice(3).map(({ title, desc, Icon, iconBg, iconColor }) => (
            <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all group w-full sm:w-80 lg:w-96">
              <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                <Icon size={20} className={iconColor} />
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
