"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a0f] via-[#1a3a2a] to-[#0d2235]" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: text */}
          <div className="flex flex-col">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 text-justify">
              Restauramos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                ecosistemas acuáticos
              </span>{" "}
              mediante soluciones basadas en la naturaleza
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
              En Biolily diseñamos, implementamos y monitoreamos proyectos de restauración hídrica
              que generan beneficios ambientales y volumétricos medibles para empresas, gobiernos
              y organizaciones comprometidas con el futuro del agua.
            </p>

            <p className="text-gray-400 text-base leading-relaxed text-justify">
              Combinamos innovación ambiental, monitoreo científico y soluciones basadas en la
              naturaleza para transformar desafíos hídricos en resultados verificables.
            </p>
          </div>

          {/* Right: image + CTAs */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-green-800/40 to-blue-900/40 border border-white/10 relative">
              <Image
                src="/render-completo.png"
                alt="Fito-colmenas en Valle de Bravo"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center text-white/30">
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
                  <p className="text-xs">Imagen / Render</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
                <p className="text-white text-xs font-medium">Fito-colmenas en Valle de Bravo</p>
                <p className="text-green-300 text-xs mt-0.5">Tecnología patentada en operación</p>
              </div>
            </div>

            {/* CTAs below image */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/tecnologias"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-green-500/25 hover:scale-105 text-sm"
              >
                Conoce nuestra tecnología
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/impacto"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition-all backdrop-blur-sm text-sm"
              >
                Ver resultados e impacto
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
