import { Activity } from "lucide-react";

const indicators = [
  { num: "1", label: "7+ Indicadores de calidad del agua" },
  { num: "2", label: "Biomasa cosechada" },
  { num: "3", label: "Beneficio volumétrico generado" },
  { num: "4", label: "Cobertura implementada" },
  { num: "5", label: "Participación comunitaria y gobernanza" },
  { num: "6", label: "Cumplimiento operativo" },
  { num: "7", label: "Seguimiento de metas del proyecto" },
];

export default function Medicion() {
  return (
    <section id="medicion" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 block mb-3">
              Monitoreo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Lo que no se mide, no se puede escalar
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Cada proyecto desarrollado por Biolily incorpora un esquema de monitoreo, mantenimiento y
              acompañamiento que permite evaluar el desempeño ambiental de la tecnología y documentar
              sus resultados.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              La información recopilada permite construir reportes periódicos de desempeño y
              demostrar resultados de manera transparente ante empresas, gobiernos y
              organizaciones aliadas.
            </p>
          </div>

          {/* Right: indicator dashboard */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
            <div className="flex items-center gap-2 mb-6">
              <Activity size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                Panel de indicadores
              </h3>
            </div>
            <div className="space-y-3">
              {indicators.map(({ num, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {num}
                  </div>
                  <span className="text-gray-700 text-sm leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
