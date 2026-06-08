import {
  Waves,
  Sprout,
  TrendingUp,
  Scissors,
  BarChart2,
  CheckCircle2,
  XCircle,
  FlaskConical,
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Waves,
    title: "Captación natural",
    desc: "El agua entra en contacto con las raíces del lirio acuático dentro del sistema flotante.",
  },
  {
    num: "02",
    icon: FlaskConical,
    title: "Remoción de nutrientes",
    desc: "Las plantas absorben nitrógeno y fósforo, dos nutrientes asociados a la eutrofización.",
  },
  {
    num: "03",
    icon: Sprout,
    title: "Crecimiento acelerado",
    desc: "El diseño de las Fito-colmenas favorece un crecimiento rápido y controlado de biomasa vegetal.",
  },
  {
    num: "04",
    icon: Scissors,
    title: "Cosecha y manejo",
    desc: "La biomasa se retira periódicamente, extrayendo físicamente los nutrientes acumulados.",
  },
  {
    num: "05",
    icon: BarChart2,
    title: "Beneficio volumétrico",
    desc: "El sistema permite cuantificar beneficios ambientales y volumétricos bajo metodologías de medición.",
  },
];

const problems = [
  "Eutrofización",
  "Exceso de nitrógeno y fósforo",
  "Florecimientos de cianobacterias",
  "Pérdida de calidad del agua",
  "Deterioro ecológico",
  "Falta de soluciones escalables y de bajo impacto",
];

const advantages = [
  "No introduce químicos al cuerpo de agua",
  "No requiere infraestructura invasiva",
  "Opera dentro del cuerpo de agua",
  "Usa procesos naturales de fitoremediación",
  "Permite control del lirio acuático",
  "Puede escalarse por módulos",
  "Puede medirse con indicadores ambientales",
];

export default function FitoColmenas() {
  return (
    <section id="fito-colmenas" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            Nuestra Tecnología
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Fito-colmenas: biorremediación flotante,{" "}
            <span className="text-green-700">controlada y escalable</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Las Fito-colmenas son estructuras modulares flotantes diseñadas para alojar,
            contener y acelerar el crecimiento controlado del lirio acuático. A diferencia
            del crecimiento descontrolado del lirio en cuerpos de agua, las Fito-colmenas
            mantienen la biomasa contenida dentro de módulos flotantes que permiten
            aprovechar su capacidad natural de absorber nutrientes sin permitir su
            dispersión libre.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-24">
          <h3 className="font-display text-2xl font-bold text-gray-800 text-center mb-12">
            ¿Cómo funcionan?
          </h3>
          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-blue-300" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map(({ num, icon: Icon, title, desc }) => (
                <div key={num} className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-lg border-2 border-green-200 group-hover:border-green-500 flex flex-col items-center justify-center mb-5 transition-all">
                    <Icon size={28} className="text-green-600" />
                    <span className="text-xs font-bold text-green-400 mt-1">{num}</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">{title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problems + Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="p-8 rounded-3xl bg-red-50 border border-red-100">
            <h3 className="font-display text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <XCircle size={22} className="text-red-400" />
              ¿Qué problema resuelven?
            </h3>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Advantages */}
          <div className="p-8 rounded-3xl bg-green-50 border border-green-200">
            <h3 className="font-display text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <CheckCircle2 size={22} className="text-green-500" />
              ¿Por qué es diferente?
            </h3>
            <ul className="space-y-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom visual accent */}
        <div className="mt-16 text-center">
          {/* TODO: Agregar imagen/foto oficial de las Fito-colmenas */}
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-700 to-blue-700 text-white text-sm font-medium shadow-lg">
            Tecnología diseñada y operada en México · Validada científicamente
          </div>
        </div>
      </div>
    </section>
  );
}
