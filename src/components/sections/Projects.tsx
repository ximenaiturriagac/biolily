import { MapPin, Users, Microscope, Waves, Building2 } from "lucide-react";

const vbFeatures = [
  { icon: Microscope, text: "Pilotos y pruebas en Valle de Bravo" },
  { icon: Waves, text: "Implementación de Fito-colmenas para manejo integral del lirio acuático" },
  { icon: Users, text: "Colaboración con actores científicos, sociales e institucionales" },
  { icon: MapPin, text: "Enfoque en restauración ecológica, calidad del agua y beneficio volumétrico" },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            Proyectos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Nuestros <span className="text-green-700">proyectos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Valle de Bravo */}
          <div className="rounded-3xl overflow-hidden bg-white shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
            {/* TODO: Reemplazar con fotografía oficial de Valle de Bravo */}
            <div className="h-52 bg-gradient-to-br from-[#1a3a2a] to-[#0d2235] relative flex items-end p-8">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 70%, #2d6a2d 0%, transparent 60%), radial-gradient(circle at 70% 30%, #1a5276 0%, transparent 60%)"
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-green-300 text-xs font-semibold uppercase tracking-widest mb-2">
                  <MapPin size={12} />
                  Estado de México
                </div>
                <h3 className="font-display text-3xl font-bold text-white">Valle de Bravo</h3>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                Biolily y el proyecto Fito-colmenas nacen en Valle de Bravo, uno de los
                cuerpos de agua más importantes del centro de México. Este embalse forma
                parte del sistema hídrico que abastece a millones de personas y enfrenta
                retos asociados a contaminación, eutrofización y deterioro ambiental.
              </p>
              <ul className="space-y-3">
                {vbFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm pt-1">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Empresas y aliados */}
          <div className="rounded-3xl overflow-hidden bg-white shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="h-52 bg-gradient-to-br from-[#0d2235] to-[#1a3a2a] relative flex items-end p-8">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 60% 40%, #1a5276 0%, transparent 60%), radial-gradient(circle at 30% 70%, #2d6a2d 0%, transparent 50%)"
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-2">
                  <Building2 size={12} />
                  Colaboraciones
                </div>
                <h3 className="font-display text-3xl font-bold text-white">Empresas y aliados</h3>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                Biolily trabaja en esquemas de colaboración con empresas, organizaciones
                e instituciones interesadas en restauración hídrica, beneficios
                volumétricos y estrategias de water stewardship.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Diagnóstico ambiental",
                  "Diseño de proyecto",
                  "Implementación",
                  "Medición de impacto",
                  "Water stewardship",
                  "Reportes técnicos",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-3 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-full transition-all"
                >
                  Explorar colaboración
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
