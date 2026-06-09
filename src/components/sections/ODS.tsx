import Image from "next/image";

const directas = [
  {
    ods: 6,
    color: "#26BDE2",
    titulo: "Agua limpia y saneamiento",
    desc: "La restauración de cuerpos de agua es el núcleo de nuestro trabajo. A través de las Fito-colmenas impulsamos la mejora de la calidad del agua, la captura de contaminantes y la generación de beneficios volumétricos medibles respaldados por monitoreo científico.",
    metas: ["6.3 Calidad del agua", "6.5 Gestión integrada de los recursos hídricos", "6.b Participación de comunidades locales"],
  },
  {
    ods: 13,
    color: "#3F7E44",
    titulo: "Acción por el clima",
    desc: "Implementamos soluciones basadas en la naturaleza que fortalecen la resiliencia de ecosistemas acuáticos frente a los desafíos ambientales y climáticos.",
    metas: ["13.1 Adaptación y resiliencia climática"],
  },
  {
    ods: 15,
    color: "#56C02B",
    titulo: "Vida de ecosistemas terrestres",
    desc: "Nuestros proyectos contribuyen a la recuperación de ecosistemas degradados y al fortalecimiento de los servicios ambientales asociados a cuerpos de agua estratégicos.",
    metas: ["15.1 Conservación y restauración de ecosistemas", "15.3 Restauración de ecosistemas degradados"],
  },
];

const indirectas = [
  {
    ods: 2,
    color: "#DDA63A",
    titulo: "Hambre cero",
    desc: "La recuperación de ecosistemas acuáticos saludables contribuye indirectamente a fortalecer actividades productivas vinculadas al agua y a promover sistemas más resilientes para las comunidades que dependen de estos recursos.",
    metas: ["2.4 Sistemas alimentarios sostenibles y resilientes"],
  },
  {
    ods: 17,
    color: "#19486A",
    titulo: "Alianzas para lograr los objetivos",
    desc: "La restauración hídrica requiere colaboración. Por ello trabajamos con empresas, gobiernos, academia, organizaciones civiles y comunidades para desarrollar proyectos con impacto verificable.",
    metas: ["17.16 Cooperación multisectorial", "17.17 Alianzas público-privadas y sociales"],
  },
];

interface ODSItem {
  ods: number;
  color: string;
  titulo: string;
  desc: string;
  metas: string[];
}

function ODSCard({ ods, color, titulo, desc, metas }: ODSItem) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-sm"
          style={{ backgroundColor: color }}
        >
          <Image
            src={`/E_SDG_Icons-${String(ods).padStart(2, "0")}.jpg`}
            alt={`ODS ${ods}`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
            ODS {ods}
          </span>
          <h4 className="font-display font-semibold text-gray-900 text-base leading-snug mt-0.5">
            {titulo}
          </h4>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">{desc}</p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
          {metas.length === 1 ? "Meta relacionada" : "Metas relacionadas"}
        </p>
        <ul className="space-y-1">
          {metas.map((meta) => (
            <li key={meta} className="flex items-start gap-2 text-xs text-gray-500">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
              {meta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ODS() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            Agenda 2030
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Objetivos de Desarrollo Sostenible
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Contribuciones directas e indirectas
          </p>
          <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed mt-4">
            Los proyectos desarrollados por Biolily generan impactos que contribuyen a diversos
            Objetivos de Desarrollo Sostenible de las Naciones Unidas. Algunas contribuciones
            están directamente relacionadas con la restauración hídrica y la calidad del agua,
            mientras que otras se generan de manera indirecta a través de la recuperación de
            ecosistemas, la colaboración multisectorial y el fortalecimiento de comunidades
            vinculadas al agua.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Directas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-green-100" />
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700 px-3">
                Contribuciones directas
              </span>
              <div className="h-px flex-1 bg-green-100" />
            </div>
            <div className="space-y-4">
              {directas.map((item) => (
                <ODSCard key={item.ods} {...item} />
              ))}
            </div>
          </div>

          {/* Right: Indirectas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-blue-100" />
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-700 px-3">
                Contribuciones indirectas
              </span>
              <div className="h-px flex-1 bg-blue-100" />
            </div>
            <div className="space-y-4">
              {indirectas.map((item) => (
                <ODSCard key={item.ods} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
          <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
            Restaurar el agua genera beneficios que van más allá del agua
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cada proyecto desarrollado por Biolily contribuye a la recuperación de ecosistemas,
            el fortalecimiento de comunidades y la construcción de alianzas que permiten generar
            impacto ambiental medible y de largo plazo.
          </p>
        </div>

      </div>
    </section>
  );
}
