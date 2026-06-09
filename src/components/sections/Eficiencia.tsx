import { TriangleAlert, CheckCircle } from "lucide-react";

const metrics = [
  { value: "534 kg P/ha/año", label: "Fósforo removido", color: "from-green-500 to-emerald-600" },
  { value: "7,843 kg N/ha/año", label: "Nitrógeno removido", color: "from-teal-500 to-cyan-600" },
  { value: "15,700–40,300 m³/año", label: "Beneficio volumétrico por Fito-colmena", color: "from-blue-500 to-indigo-600" },
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-400 block mb-3">
            Resultados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Eficiencia ambiental comprobable
          </h2>
          <p className="text-green-300 text-lg font-medium mb-6 text-center max-w-2xl mx-auto">
            Resultados respaldados por evidencia científica
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto text-justify">
            Las Fito-colmenas fueron diseñadas para maximizar la captura y extracción de nutrientes
            mediante el crecimiento controlado de biomasa vegetal. A través de la cosecha periódica
            de biomasa, el sistema permite retirar físicamente nutrientes del ecosistema y generar
            beneficios ambientales cuantificables.
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {metrics.map(({ value, label, color }) => (
            <div key={label} className="rounded-3xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center flex flex-col items-center justify-center">
              <div className={`text-3xl sm:text-4xl font-display font-bold bg-gradient-to-br ${color} bg-clip-text text-transparent mb-3`}>
                {value}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">{label}</p>
            </div>
          ))}
        </div>

        {/* Benefit grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle size={15} className="text-green-400 shrink-0" />
              <span className="text-gray-200 text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>

        {/* Closing copy */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto text-justify mb-6">
          Los beneficios volumétricos pueden adaptarse a los objetivos específicos de cada proyecto,
          permitiendo diseñar estrategias alineadas con metas corporativas, territoriales o de
          restauración ecológica.
        </p>

        {/* Disclaimer — centered, auto-width */}
        <div className="flex justify-center">
          <div className="inline-flex items-start gap-3 px-5 py-4 rounded-2xl bg-amber-900/30 border border-amber-700/40 max-w-xl">
            <TriangleAlert size={18} className="text-amber-400 mt-0.5 shrink-0" />
            <p className="text-amber-200 text-sm leading-relaxed text-center">
              Los valores presentados son estimados sujetos a condiciones de cada sitio de implementación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
