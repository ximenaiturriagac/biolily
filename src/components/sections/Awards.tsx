import { Award, Star, Trophy, CheckCircle } from "lucide-react";

const awards = [
  {
    icon: Star,
    title: "The Next Decade: Water Disruption Challenge 2024",
    badge: "Mención Honorífica",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
  },
  {
    icon: Trophy,
    title: "Reto Nacional de Sostenibilidad BBVA",
    badge: "Finalista",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-800",
  },
  {
    icon: Award,
    title: "Programa ALIAR 2025 · Tecnológico de Monterrey",
    badge: "Ganador",
    color: "from-green-600 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
  },
  {
    icon: Star,
    title: "ClimateLaunchpad México 2025",
    badge: "Seleccionado",
    color: "from-lime-500 to-green-600",
    bg: "bg-lime-50",
    border: "border-lime-200",
    text: "text-lime-800",
  },
  {
    icon: Trophy,
    title: "Aquavance",
    badge: "Finalista destacado",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-800",
  },
  {
    icon: CheckCircle,
    title: "Aval y acompañamiento de actores vinculados a Valle de Bravo",
    badge: "Validado",
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-800",
  },
  {
    icon: CheckCircle,
    title: "Permiso operativo de CONAGUA para implementación en Valle de Bravo",
    badge: "Autorizado",
    color: "from-amber-500 to-yellow-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-800",
  },
  {
    icon: CheckCircle,
    title: "Validación y acompañamiento científico de especialistas vinculados a UNAM",
    badge: "Respaldado",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-800",
  },
];

export default function Awards() {
  return (
    <section id="reconocimientos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            Reconocimientos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Reconocimiento <span className="text-green-700">institucional</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Biolily ha sido reconocida y validada por programas líderes en innovación,
            sostenibilidad y tecnología ambiental a nivel nacional e internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map(({ icon: Icon, title, badge, color, bg, border, text }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 ${bg} border ${border} hover:shadow-md transition-all group`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform`}
              >
                <Icon size={18} className="text-white" />
              </div>
              <span
                className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${text} bg-white/70 mb-3`}
              >
                {badge}
              </span>
              <p className="text-gray-700 text-sm font-medium leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
