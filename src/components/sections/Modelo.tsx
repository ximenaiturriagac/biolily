import {
  Search,
  Lightbulb,
  Layers,
  Activity,
  BarChart2,
  Droplets,
  FileText,
  Leaf,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico del ecosistema",
    copy: "Evaluamos el estado del cuerpo de agua, identificamos presiones y definimos metas de restauración.",
  },
  {
    icon: Lightbulb,
    title: "Diseño de la solución",
    copy: "Diseñamos el esquema de implementación adaptado a las condiciones físicas, ecológicas y operativas del sitio.",
  },
  {
    icon: Layers,
    title: "Implementación de nuestra tecnología",
    copy: "Instalamos los módulos flotantes y establecemos el esquema de operación y mantenimiento.",
  },
  {
    icon: Activity,
    title: "Monitoreo científico",
    copy: "Medimos indicadores de calidad del agua, biomasa y cobertura de manera continua.",
  },
  {
    icon: BarChart2,
    title: "Medición de indicadores",
    copy: "Cuantificamos nitrógeno, fósforo y otros parámetros para documentar el desempeño del sistema.",
  },
  {
    icon: Droplets,
    title: "Beneficios volumétricos",
    copy: "Calculamos los beneficios volumétricos generados, verificables bajo metodologías reconocidas.",
  },
  {
    icon: FileText,
    title: "Reportes de impacto",
    copy: "Generamos reportes periódicos de desempeño para empresas, gobiernos y organizaciones aliadas.",
  },
  {
    icon: Leaf,
    title: "Restauración ecológica",
    copy: "El ecosistema recupera su equilibrio a largo plazo, generando beneficios ambientales y sociales sostenibles.",
  },
];

export default function Modelo() {
  return (
    <section id="modelo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            Proceso
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            De la restauración ecológica a los resultados medibles
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            En Biolily no solo implementamos tecnología. Diseñamos proyectos integrales de
            restauración hídrica que permiten medir y demostrar resultados a lo largo del tiempo.
          </p>
        </div>

        {/* Desktop: 2 rows of 4 */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {index % 4 !== 3 && (
                  <div className="absolute top-6 left-[calc(50%+24px)] right-0 h-0.5 bg-green-200 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm mb-3 shrink-0">
                    {index + 1}
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center text-green-700 mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.copy}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-green-200 my-1" />
                  )}
                </div>
                <div className="pb-6 pt-1 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-green-700 shrink-0" />
                    <h3 className="font-semibold text-gray-900 text-sm">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
