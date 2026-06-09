const awards = [
  {
    badge: "Seleccionado",
    badgeColor: "bg-lime-100 text-lime-800",
    title: "ClimateLaunchpad",
    desc: "Seleccionados entre los emprendimientos climáticos más prometedores de México para participar en el principal programa europeo de aceleración de tecnologías climáticas.",
    accentColor: "border-lime-200",
  },
  {
    badge: "Ganador",
    badgeColor: "bg-green-100 text-green-800",
    title: "ALIAR 2025",
    desc: "Ganadores del programa ALIAR del Tecnológico de Monterrey, iniciativa enfocada en fortalecer emprendimientos con alto potencial de impacto social y ambiental.",
    accentColor: "border-green-200",
  },
  {
    badge: "Mención Honorífica",
    badgeColor: "bg-blue-100 text-blue-800",
    title: "Water Disruption Challenge",
    desc: "Mención honorífica por el potencial innovador de las Fito-colmenas para enfrentar desafíos relacionados con la calidad y sostenibilidad del agua.",
    accentColor: "border-blue-200",
  },
  {
    badge: "Finalista",
    badgeColor: "bg-sky-100 text-sky-800",
    title: "Reto Nacional de Sostenibilidad BBVA",
    desc: "Finalistas nacionales por el potencial de generar impacto ambiental positivo y contribuir al desarrollo sostenible.",
    accentColor: "border-sky-200",
  },
  {
    badge: "Reconocido",
    badgeColor: "bg-teal-100 text-teal-800",
    title: "Aquavance",
    desc: "Proyecto reconocido por combinar innovación tecnológica, impacto ambiental y capacidad de escalamiento para enfrentar desafíos hídricos complejos.",
    accentColor: "border-teal-200",
  },
];

export default function Reconocimientos() {
  return (
    <section id="reconocimientos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            Reconocimientos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reconocidos por innovación, impacto y escalabilidad
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {awards.slice(0, 3).map(({ badge, badgeColor, title, desc, accentColor }) => (
            <div key={title} className={`p-6 rounded-2xl bg-white border ${accentColor} hover:shadow-md transition-all`}>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeColor} mb-4`}>{badge}</span>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {awards.slice(3).map(({ badge, badgeColor, title, desc, accentColor }) => (
            <div key={title} className={`p-6 rounded-2xl bg-white border ${accentColor} hover:shadow-md transition-all w-full sm:w-80 lg:w-96`}>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeColor} mb-4`}>{badge}</span>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
