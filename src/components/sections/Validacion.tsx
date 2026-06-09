import Image from "next/image";

const institutions = [
  {
    name: "BlueRisk",
    logo: "/logo-bluerisk.png",
    logoClass: "object-contain w-full h-full scale-90",
    containerPad: "p-3",
    desc: "BlueRisk evaluó el potencial de generación de beneficios volumétricos de las Fito-colmenas utilizando metodologías reconocidas internacionalmente. Su análisis permitió validar rangos de beneficio volumétrico y fortalecer la trazabilidad de los resultados ambientales generados por la tecnología.",
  },
  {
    name: "Universidad Nacional Autónoma de México",
    logo: "/logo-unam.png",
    logoClass: "object-contain w-full h-full",
    containerPad: "p-1",
    desc: "La UNAM ha contribuido al desarrollo técnico y científico del proyecto mediante monitoreo, análisis de calidad del agua y evaluación de indicadores ambientales, fortaleciendo el rigor metodológico de las Fito-colmenas.",
  },
  {
    name: "CONAGUA",
    logo: "/logo-conagua.png",
    logoClass: "object-contain w-full h-full",
    containerPad: "p-1",
    desc: "Biolily cuenta con permiso de operación otorgado por CONAGUA para la implementación de Fito-colmenas en Valle de Bravo. Este respaldo institucional demuestra la viabilidad regulatoria de la tecnología.",
  },
  {
    name: "Comité de Operación del Lago de Valle de Bravo",
    logo: "/logo-provalle.png",
    logoClass: "object-contain w-full h-full scale-[1.6]",
    containerPad: "p-0",
    desc: "El proyecto ha sido presentado y acompañado dentro de espacios de gobernanza hídrica donde participan autoridades, instituciones, academia y organizaciones de la sociedad civil.",
  },
  {
    name: "Tecnológico de Monterrey",
    logo: "/logo-itesm.png",
    logoClass: "object-contain w-full h-full scale-[1]",
    containerPad: "p-3",
    desc: "A través de programas de emprendimiento, innovación y aceleración, el Tecnológico de Monterrey ha acompañado el fortalecimiento del modelo de negocio y la consolidación institucional de Biolily.",
  },
];

function InstitutionCard({ name, logo, logoClass, containerPad, desc }: (typeof institutions)[0]) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col" style={{ minHeight: 320 }}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-20 h-20 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden ${containerPad}`}>
          <Image
            src={logo}
            alt={name}
            width={80}
            height={80}
            className={logoClass}
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

        {/* First 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {institutions.slice(0, 3).map((inst) => (
            <InstitutionCard key={inst.name} {...inst} />
          ))}
        </div>

        {/* Last 2 centered using 6-col subgrid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-start-2 md:col-span-2">
            <InstitutionCard {...institutions[3]} />
          </div>
          <div className="md:col-start-4 md:col-span-2">
            <InstitutionCard {...institutions[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
