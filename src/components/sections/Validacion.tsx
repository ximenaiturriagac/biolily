const institutions = [
  {
    badge: "BR",
    name: "BlueRisk",
    color: "bg-blue-700",
    desc: "BlueRisk evaluó el potencial de generación de beneficios volumétricos de las Fito-colmenas utilizando metodologías reconocidas internacionalmente. Su análisis permitió validar rangos de beneficio volumétrico y fortalecer la trazabilidad de los resultados ambientales generados por la tecnología.",
  },
  {
    badge: "UN",
    name: "UNAM",
    color: "bg-indigo-700",
    desc: "La UNAM ha contribuido al desarrollo técnico y científico del proyecto mediante monitoreo, análisis de calidad del agua y evaluación de indicadores ambientales, fortaleciendo el rigor metodológico de las Fito-colmenas.",
  },
  {
    badge: "CNA",
    name: "CONAGUA",
    color: "bg-teal-700",
    desc: "Biolily cuenta con permiso de operación otorgado por CONAGUA para la implementación de Fito-colmenas en Valle de Bravo. Este respaldo institucional demuestra la viabilidad regulatoria de la tecnología.",
  },
  {
    badge: "CVB",
    name: "Comité de Operación del Lago de Valle de Bravo",
    color: "bg-emerald-700",
    desc: "El proyecto ha sido presentado y acompañado dentro de espacios de gobernanza hídrica donde participan autoridades, instituciones, academia y organizaciones de la sociedad civil.",
  },
  {
    badge: "TM",
    name: "Tecnológico de Monterrey",
    color: "bg-cyan-700",
    desc: "A través de programas de emprendimiento, innovación y aceleración, el Tecnológico de Monterrey ha acompañado el fortalecimiento del modelo de negocio y la consolidación institucional de Biolily.",
  },
];

export default function Validacion() {
  return (
    <section
      id="validacion"
      className="py-24 bg-gradient-to-br from-[#0d1f3a] via-[#0f2535] to-[#0d2235] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-teal-700/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400 block mb-3">
            Respaldo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Respaldados por ciencia, instituciones y experiencia en campo
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            La solidez de Biolily se construye sobre evidencia científica, monitoreo técnico y
            colaboración con instituciones líderes en agua, sostenibilidad y restauración ecológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutions.map(({ badge, name, color, desc }) => (
            <div
              key={name}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${color} text-white flex items-center justify-center font-bold text-sm shrink-0`}
                >
                  {badge}
                </div>
                <h3 className="font-display font-semibold text-white text-base leading-snug">
                  {name}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
