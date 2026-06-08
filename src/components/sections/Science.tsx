import { FlaskConical, BarChart3, Leaf, FileText, Gauge, Globe } from "lucide-react";

const pillars = [
  { icon: Gauge, title: "Monitoreo de calidad del agua", desc: "Seguimiento continuo de parámetros físicos, químicos y biológicos del cuerpo de agua." },
  { icon: FlaskConical, title: "Indicadores de N y P", desc: "Medición de nitrógeno y fósforo para cuantificar la efectividad de la remoción." },
  { icon: Leaf, title: "Biomasa cosechada", desc: "Registro y análisis de la biomasa retirada como indicador de nutrientes extraídos." },
  { icon: BarChart3, title: "Beneficio volumétrico", desc: "Cálculo del impacto hídrico bajo metodologías estandarizadas de medición." },
  { icon: FileText, title: "Reportes técnicos", desc: "Documentación científica y operativa de cada ciclo de implementación." },
  { icon: Globe, title: "Water stewardship", desc: "Alineación con estándares internacionales de gestión responsable del recurso hídrico." },
];

export default function Science() {
  return (
    <section id="ciencia" className="py-24 bg-[#0f1f0f] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-800/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-3 block">
              Ciencia y validación
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Ciencia aplicada a la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                restauración
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Las Fito-colmenas integran principios de fitoremediación, limnología, ingeniería
              ambiental y operación modular. El sistema aprovecha la capacidad del lirio
              acuático para absorber nutrientes, pero lo hace bajo un esquema controlado de
              contención, crecimiento, cosecha y medición.
            </p>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-green-300 text-sm italic leading-relaxed">
                "Confiamos en la infinita sabiduría de la naturaleza — y la complementamos
                con rigor científico y operación controlada."
              </p>
            </div>
          </div>

          {/* Visual representation */}
          <div className="relative">
            {/* TODO: Reemplazar con infografía o fotografía científica oficial */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-900/50 to-blue-900/50 border border-green-700/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-green-500/20 animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute w-32 h-32 rounded-full border-2 border-blue-500/20 animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
                <div className="absolute w-20 h-20 rounded-full bg-green-700/30 flex items-center justify-center">
                  <Leaf size={32} className="text-green-400" />
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
                  Fitoremediación · Limnología · Ingeniería Ambiental
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-800/50 flex items-center justify-center mb-4 group-hover:bg-green-700/50 transition-colors">
                <Icon size={18} className="text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm">{title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
