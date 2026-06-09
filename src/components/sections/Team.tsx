import Image from "next/image";
import { GraduationCap, Briefcase, Microscope, Leaf } from "lucide-react";

const team = [
  {
    name: "José Eduardo Caballero Murillo",
    role: "Fundador y CEO",
    company: "Biolily",
    bio: "Eduardo Caballero Murillo es ingeniero en biotecnología, emprendedor ambiental y fundador de Biolily. Originario de Valle de Bravo, ha dedicado los últimos años al desarrollo de las Fito-colmenas como una solución tecnológica para restaurar cuerpos de agua afectados por eutrofización. Su experiencia combina innovación, gestión de proyectos, sostenibilidad, alianzas estratégicas y desarrollo de modelos de negocio de impacto ambiental.",
    highlights: [
      { icon: GraduationCap, text: "Ingeniero en Biotecnología · Tecnológico de Monterrey" },
      { icon: Briefcase, text: "Experiencia en project management, innovación y sostenibilidad" },
      { icon: Leaf, text: "Fundador y líder del proyecto Fito-colmenas" },
      { icon: Microscope, text: "Enfoque en convertir ciencia aplicada en soluciones escalables" },
    ],
    gradient: "from-green-700 to-emerald-600",
    initials: "EC",
    photo: "/eduardo-caballero.jpeg",
  },
  {
    name: "Dr. Jorge Alberto Ramírez Zierold",
    role: "Cofundador y Director Científico",
    company: "Asesor científico · Fito-colmenas",
    bio: "Jorge Alberto Ramírez Zierold es Doctor en Ciencias y especialista vinculado al estudio de sistemas acuáticos, calidad del agua y limnología. Su experiencia científica ha sido clave para fortalecer el fundamento técnico de las Fito-colmenas, el monitoreo de cuerpos de agua y la interpretación de indicadores ambientales.",
    highlights: [
      { icon: GraduationCap, text: "Doctor en Ciencias" },
      { icon: Microscope, text: "Experiencia académica en UNAM" },
      { icon: Leaf, text: "Especialista en agua, limnología y calidad ambiental" },
      { icon: Briefcase, text: "Monitoreo hídrico y recuperación sustentable de Valle de Bravo" },
    ],
    gradient: "from-blue-700 to-cyan-600",
    initials: "JR",
    photo: "/jorge-ramirez.jpg",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            Quiénes somos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            El equipo detrás de <span className="text-green-700">Biolily</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {team.map(({ name, role, company, bio, highlights, gradient, initials, photo }) => (
            <div
              key={name}
              className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`h-32 bg-gradient-to-br ${gradient} relative`}>
                <div className="absolute bottom-0 left-8 translate-y-1/2">
                  <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                        <span className="text-white font-bold text-2xl">{initials}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-14 pb-8 px-8">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">{name}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                    {role}
                  </span>
                  <span className="text-gray-400 text-xs">{company}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{bio}</p>

                <ul className="space-y-2.5">
                  {highlights.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={13} className="text-green-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
