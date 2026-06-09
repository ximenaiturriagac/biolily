import { Building2, Landmark, Heart, Users, GraduationCap, Home } from "lucide-react";

const allies = [
  {
    icon: Building2,
    title: "Empresas",
    desc: "Con metas de agua, sostenibilidad y estrategias de water stewardship.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Landmark,
    title: "Gobiernos y organismos",
    desc: "Operadores de sistemas de agua, municipios y autoridades ambientales.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: Heart,
    title: "Fundaciones ambientales",
    desc: "Organizaciones enfocadas en conservación, restauración y cambio climático.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Users,
    title: "Asociaciones civiles",
    desc: "Grupos de la sociedad civil comprometidos con el medio ambiente y el agua.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: GraduationCap,
    title: "Instituciones académicas",
    desc: "Universidades y centros de investigación en ciencias ambientales y agua.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Home,
    title: "Comunidades locales",
    desc: "Poblaciones que dependen de los cuerpos de agua para su vida y desarrollo.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
];

export default function Allies() {
  return (
    <section id="unete" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
              Diseñado para colaborar
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Construyamos juntos la <span className="text-green-700">restauración del agua</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Biolily trabaja con empresas, gobiernos, organizaciones civiles, academia y
              comunidades para diseñar proyectos de restauración hídrica con impacto
              ambiental medible.
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-200">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "El futuro del agua se construye a través de la colaboración."
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Hablemos de tu proyecto
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allies.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div
                key={title}
                className={`p-5 rounded-2xl ${bg} border ${border} hover:shadow-md transition-all group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={17} className={color} />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
