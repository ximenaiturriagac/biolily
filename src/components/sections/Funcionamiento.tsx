import { Waves, Beaker, TrendingUp, Scissors, ArrowDown, Activity } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Waves,
    title: "Captación natural",
    desc: "Las raíces del lirio acuático interactúan directamente con la columna de agua, iniciando el proceso de absorción.",
  },
  {
    number: 2,
    icon: Beaker,
    title: "Absorción de nutrientes",
    desc: "El sistema captura nitrógeno, fósforo y otros contaminantes presentes en el ecosistema, reduciendo las concentraciones que alimentan la eutrofización.",
  },
  {
    number: 3,
    icon: TrendingUp,
    title: "Hasta 5 veces más eficiente",
    desc: "La biomasa vegetal se desarrolla dentro de un entorno controlado, maximizando la captación de nutrientes por unidad de área.",
  },
  {
    number: 4,
    icon: Scissors,
    title: "Cosecha",
    desc: "La biomasa es retirada periódicamente del sistema de forma controlada y programada.",
  },
  {
    number: 5,
    icon: ArrowDown,
    title: "Extracción real de contaminantes",
    desc: "Los nutrientes y contaminantes salen físicamente del ecosistema mediante la cosecha, logrando una remoción efectiva y cuantificable.",
  },
  {
    number: 6,
    icon: Activity,
    title: "Monitoreo",
    desc: "Los resultados son cuantificados y reportados mediante indicadores de calidad del agua y alineados con estándares internacionales (VWBA2.0).",
  },
];

export default function Funcionamiento() {
  return (
    <section id="funcionamiento" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            Proceso
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo funcionan?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada Fito-colmena sigue un ciclo continuo de captación, absorción, cosecha y monitoreo
            para convertir procesos naturales en resultados medibles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ number, icon: Icon, title, desc }) => (
            <div
              key={number}
              className="bg-white rounded-2xl p-6 border border-green-100 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {number}
                </div>
                <div className="w-9 h-9 rounded-xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                  <Icon size={18} className="text-green-700" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
