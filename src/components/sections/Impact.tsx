import { Beaker, TrendingUp, Layers, Clock, TriangleAlert } from "lucide-react";

const cards = [
  {
    icon: Beaker,
    title: "Remoción de nutrientes",
    value: "N & P",
    desc: "Capacidad de remover nitrógeno y fósforo mediante biomasa vegetal cosechada periódicamente.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: TrendingUp,
    title: "Comparativo técnico",
    value: "Superior",
    desc: "Estimaciones comparativas han mostrado potencial de remoción de fósforo y nitrógeno superior frente a referencias tradicionales de manejo de lirio acuático.",
    color: "from-blue-500 to-cyan-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Layers,
    title: "Beneficio volumétrico",
    value: "15,700–40,300 m³/año",
    desc: "Cada Fito-colmena puede generar beneficios volumétricos estimados dentro de este rango por año, dependiendo de condiciones de operación, sitio, escala y metodología de medición.",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
  },
  {
    icon: Layers,
    title: "Escalabilidad",
    value: "190 unidades",
    desc: "Un despliegue de 190 unidades puede representar beneficios ambientales significativos para cuerpos de agua estratégicos.",
    color: "from-lime-500 to-green-600",
    bg: "bg-lime-50",
    border: "border-lime-200",
  },
  {
    icon: Clock,
    title: "Enfoque de largo plazo",
    value: "Multianual",
    desc: "La tecnología está diseñada para integrarse a programas multianuales de restauración, monitoreo y water stewardship.",
    color: "from-amber-500 to-yellow-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

export default function Impact() {
  return (
    <section id="impacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            Rendimiento e impacto
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Impacto medible para la{" "}
            <span className="text-green-700">restauración hídrica</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Generamos beneficios ambientales cuantificables alineados con metodologías de
            water stewardship y estándares de medición internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cards.map(({ icon: Icon, title, value, desc, color, bg, border }) => (
            <div
              key={title}
              className={`rounded-3xl p-8 ${bg} border ${border} hover:shadow-lg transition-all group`}
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}
              >
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-base mb-2">{title}</h3>
              <div className="font-display text-2xl font-bold text-gray-900 mb-3">{value}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-amber-50 border border-amber-200 max-w-4xl mx-auto">
          <TriangleAlert size={18} className="text-amber-500 mt-0.5 shrink-0" />
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Nota:</strong> Los resultados pueden variar según las condiciones del
            cuerpo de agua, clima, operación, mantenimiento, biomasa cosechada y metodología
            de medición. Los datos presentados son estimaciones técnicas sujetas a
            condiciones operativas específicas.
          </p>
        </div>
      </div>
    </section>
  );
}
