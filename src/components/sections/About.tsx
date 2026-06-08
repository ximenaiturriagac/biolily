import { Droplets, Leaf, FlaskConical, BarChart3, Layers, Shield } from "lucide-react";

const points = [
  { icon: Droplets, label: "Restauración de cuerpos de agua", color: "text-blue-600" },
  { icon: Leaf, label: "Tecnología basada en naturaleza", color: "text-green-600" },
  { icon: FlaskConical, label: "Tratamiento in situ", color: "text-teal-600" },
  { icon: Layers, label: "Diseño modular y escalable", color: "text-emerald-600" },
  { icon: BarChart3, label: "Impacto ambiental medible", color: "text-lime-600" },
  { icon: Shield, label: "Operación segura y controlada", color: "text-green-700" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
              Quiénes somos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Somos una empresa mexicana de{" "}
              <span className="text-green-700">tecnología ambiental</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Biolily desarrolla, implementa y opera tecnologías de biorremediación para
              cuerpos de agua afectados por contaminación, exceso de nutrientes y
              eutrofización.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nuestra solución principal, las Fito-colmenas, utiliza procesos naturales de
              fitoremediación controlada para remover nitrógeno y fósforo del agua, reducir
              condiciones que favorecen florecimientos de cianobacterias y generar
              beneficios ambientales medibles.
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Nacidos en Valle de Bravo · Proyectados para escalar
            </div>
          </div>

          {/* Points grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={20} className={color} />
                </div>
                <span className="text-gray-700 font-medium text-sm leading-snug pt-2">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider stat bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2020", label: "Inicio del proyecto" },
            { value: "Valle de Bravo", label: "Origen y sitio piloto" },
            { value: "190+", label: "Unidades proyectadas" },
            { value: "CONAGUA", label: "Permiso operativo" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100"
            >
              <div className="font-display text-2xl font-bold text-green-800 mb-1">
                {value}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
