import { Leaf, Droplets, FlaskConical, BarChart2, TrendingUp, Users } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Restauración ecológica",
    copy: "Diseñamos intervenciones que devuelven el equilibrio a ecosistemas acuáticos degradados.",
  },
  {
    icon: Droplets,
    title: "Water Stewardship",
    copy: "Generamos beneficios volumétricos y ambientales verificables para empresas y territorios.",
  },
  {
    icon: FlaskConical,
    title: "Innovación ambiental",
    copy: "Combinamos procesos naturales con tecnología patentada para maximizar el impacto.",
  },
  {
    icon: BarChart2,
    title: "Medición de impacto",
    copy: "Cada proyecto incorpora indicadores de desempeño que documentan resultados en el tiempo.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    copy: "Nuestra tecnología modular permite adaptar soluciones a distintas escalas y contextos.",
  },
  {
    icon: Users,
    title: "Gobernanza colaborativa",
    copy: "Articulamos empresas, gobierno, academia y comunidades en torno a proyectos de largo plazo.",
  },
];

export default function QuienesSomos() {
  return (
    <section id="biolily" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            Quiénes somos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Somos <span className="text-green-700">Biolily</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            Biolily es una empresa mexicana especializada en el diseño e implementación de soluciones
            basadas en la naturaleza para la restauración de cuerpos de agua. Nuestra misión es
            acelerar la recuperación de ecosistemas acuáticos mediante tecnologías que combinan
            procesos naturales, monitoreo científico e indicadores verificables de impacto.
            Trabajamos con empresas, gobiernos, organizaciones civiles e instituciones académicas
            para desarrollar proyectos capaces de generar beneficios ambientales, sociales y
            volumétricos de largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center mb-4 transition-colors">
                <Icon size={22} className="text-green-700" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
