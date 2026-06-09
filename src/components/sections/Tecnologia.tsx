import Image from "next/image";

const features = ["Modular", "Flotante", "Controlada", "Medible", "Escalable", "Patentada"];

export default function Tecnologia({ showCTA = true }: { showCTA?: boolean }) {
  return (
    <section id="tecnologias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-4">
            Nuestras Tecnologías
          </span>
          <div className="flex justify-center items-center mb-6">
            <Image
              src="/logo-principal-fitocolmenas.svg"
              alt="Fito-colmenas"
              width={323}
              height={97}
              className="h-[91px] w-auto mx-auto block"
            />
          </div>
          <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto">
            Tecnología patentada para la restauración hídrica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
          {/* Left: text + feature badges + CTA */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
              Las Fito-colmenas son un sistema modular flotante diseñado para aprovechar la
              capacidad natural del lirio acuático para absorber nutrientes presentes en cuerpos
              de agua afectados por procesos de eutrofización. A diferencia del crecimiento
              descontrolado del lirio, las Fito-colmenas permiten contener, acelerar, monitorear
              y cosechar la biomasa vegetal de manera controlada, convirtiendo un problema
              ambiental en una herramienta de restauración.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {features.map((f) => (
                <div
                  key={f}
                  className="px-4 py-3 rounded-xl bg-green-50 border border-green-100 text-center"
                >
                  <span className="text-green-800 text-sm font-semibold">{f}</span>
                </div>
              ))}
            </div>
            {showCTA && (
              <a
                href="/tecnologias"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Conoce más
              </a>
            )}
          </div>

          {/* Right: render image */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-green-100 to-teal-100 border border-green-200 relative">
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
