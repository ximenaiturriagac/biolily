import { TriangleAlert, CheckCircle } from "lucide-react";

const metrics = [
  {
    value: "534 kg P/ha/año",
    label: "Fósforo removido",
    color: "from-green-500 to-emerald-600",
  },
  {
    value: "7,843 kg N/ha/año",
    label: "Nitrógeno removido",
    color: "from-teal-500 to-cyan-600",
  },
  {
    value: "15,700–40,300 m³/año",
    label: "Beneficio volumétrico por Fito-colmena",
    color: "from-blue-500 to-indigo-600",
  },
];

const benefits = [
  "Monitoreo continuo",
  "Validación VWBA2.0 por BlueRisk",
  "Inclusión social y gobernanza",
  "Economía circular",
  "Restauración garantizada",
  "Beneficios volumétricos comprobables",
];

export default function Eficiencia() {
  return (
    <section
      id="eficiencia"
      className="py-24 bg-gradient-to-br from-[#0f2a0f] via-[#1a3a2a] to-[#0d2235] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-700/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-700/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-400 block mb-3">
            Resultados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Eficiencia ambiental comprobable
          </h2>
          <p className="text-green-300 text-lg font-medium mb-6">
            Resultados respaldados por evidencia científica
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto">
            Las Fito-colmenas fueron diseñadas para maximizar la captura y extracción de nutrientes
            mediante el crecimiento controlado de biomasa vegetal. A través de la cosecha periódica
            de biomasa, el sistema permite retirar físicamente nutrientes del ecosistema y generar
            beneficios ambientales cuantificables.
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {metrics.map(({ value, label, color }) => (
            <div
              key={label}
              className="rounded-3xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div
                className={`inline-block text-3xl sm:text-4xl font-display font-bold bg-gradient-to-br ${color} bg-clip-text text-transparent mb-3`}
              >
                {value}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{label}</p>
            </div>
          ))}
        </div>

        {/* Benefit grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
            >
              <CheckCircle size={15} className="text-green-400 shrink-0" />
              <span className="text-gray-200 text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>

        {/* Closing copy */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto text-center mb-8">
          Los beneficios volumétricos pueden adaptarse a los objetivos específicos de cada proyecto,
          permitiendo diseñar estrategias alineadas con metas corporativas, territoriales o de
          restauración ecológica.
        </p>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-amber-900/30 border border-amber-700/40 max-w-4xl mx-auto">
          <TriangleAlert size={18} className="text-amber-400 mt-0.5 shrink-0" />
          <p className="text-amber-200 text-sm leading-relaxed">
            Los valores presentados son estimados sujetos a condiciones de cada sitio de implementación.
          </p>
        </div>
      </div>
    </section>
  );
}
