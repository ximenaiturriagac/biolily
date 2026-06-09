import Image from "next/image";

const features = ["Modular", "Flotante", "Controlada", "Medible", "Escalable", "Patentada"];

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-4">
            Nuestra Tecnología
          </span>
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-principal-fitocolmenas.svg"
              alt="Fito-colmenas"
              width={320}
              height={100}
              className="h-20 w-auto"
            />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Fito-colmenas
          </h2>
          <p className="text-gray-500 text-lg">
            Tecnología patentada para la restauración hídrica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
          {/* Left: text */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
              Las Fito-colmenas son un sistema modular flotante diseñado para aprovechar la
              capacidad natural del lirio acuático para absorber nutrientes presentes en cuerpos
              de agua afectados por procesos de eutrofización. A diferencia del crecimiento
              descontrolado del lirio, las Fito-colmenas permiten contener, acelerar, monitorear
              y cosechar la biomasa vegetal de manera controlada, convirtiendo un problema
              ambiental en una herramienta de restauración.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {features.map((f) => (
                <div
                  key={f}
                  className="px-4 py-3 rounded-xl bg-green-50 border border-green-100 text-center"
                >
                  <span className="text-green-800 text-sm font-semibold">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: render image */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-green-100 to-teal-100 border border-green-200 relative">
            {/* TODO: Ensure /render-fito-colmena.png is uploaded to public/ */}
            <Image
              src="/render-fito-colmena.png"
              alt="Módulo Fito-colmena"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center text-green-400">
                <div className="w-16 h-16 rounded-full border-2 border-green-300 flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-200" />
                </div>
                <p className="text-xs font-medium text-green-500">Imagen / Render</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
