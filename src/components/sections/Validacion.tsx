import Image from "next/image";

const institutions = [
  {
    badge: "BR",
    name: "BlueRisk",
    logo: "/logo-bluerisk.png",
    color: "bg-blue-700",
    desc: "BlueRisk evaluó el potencial de generación de beneficios volumétricos de las Fito-colmenas utilizando metodologías reconocidas internacionalmente. Su análisis permitió validar rangos de beneficio volumétrico y fortalecer la trazabilidad de los resultados ambientales generados por la tecnología.",
  },
  {
    badge: "UN",
    name: "Universidad Nacional Autónoma de México",
    logo: "/logo-unam.png",
    color: "bg-indigo-700",
    desc: "La UNAM ha contribuido al desarrollo técnico y científico del proyecto mediante monitoreo, análisis de calidad del agua y evaluación de indicadores ambientales, fortaleciendo el rigor metodológico de las Fito-colmenas.",
  },
  {
    badge: "CNA",
    name: "CONAGUA",
    logo: "/logo-conagua.png",
    color: "bg-teal-700",
    desc: "Biolily cuenta con permiso de operación otorgado por CONAGUA para la implementación de Fito-colmenas en Valle de Bravo. Este respaldo institucional demuestra la viabilidad regulatoria de la tecnología.",
  },
  {
    badge: "CVB",
    name: "Comité de Operación del Lago de Valle de Bravo",
    logo: "/logo-provalle.png",
    color: "bg-emerald-700",
    desc: "El proyecto ha sido presentado y acompañado dentro de espacios de gobernanza hídrica donde participan autoridades, instituciones, academia y organizaciones de la sociedad civil.",
  },
  {
    badge: "TM",
    name: "Tecnológico de Monterrey",
    logo: "/logo-itesm.png",
    color: "bg-cyan-700",
    desc: "A través de programas de emprendimiento, innovación y aceleración, el Tecnológico de Monterrey ha acompañado el fortalecimiento del modelo de negocio y la consolidación institucional de Biolily.",
  },
];

function InstitutionCard({ badge, name, logo, color, desc }: (typeof institutions)[0]) {
  void badge; void color;
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden p-1">
          <Image
            src={logo}
            alt={name}
            width={48}
            height={48}
            className="object-contain w-full h-full"
          />
        </div>
        <h3 className="font-display font-semibold text-white text-base leading-snug">{name}</h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed text-justify">{desc}</p>
    </div>
  );
}

export default function Validacion() {
  return (
    <section
      id="validacion"
      className="py-24 bg-gradient-to-br from-[#0d1f3a] via-[#0f2535] to-[#0d2235] relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400 block mb-3">
            Validación y respaldo institucional
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Respaldados por ciencia, instituciones y experiencia en campo
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed text-justify">
            La solidez de Biolily se construye sobre evidencia científica, monitoreo técnico y
            colaboración con instituciones líderes en agua, sostenibilidad y restauración ecológica.
          </p>
        </div>

        {/* Uniform 5-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutions.map((inst) => (
            <InstitutionCard key={inst.name} {...inst} />
          ))}
        </div>
      </div>
    </section>
  );
}
