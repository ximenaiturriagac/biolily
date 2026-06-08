"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a0f] via-[#1a3a2a] to-[#0d2235]" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-green-700/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-900/20 blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Badge pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Water Stewardship",
                "Soluciones basadas en la naturaleza",
                "Beneficios volumétricos",
                "Monitoreo científico",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-green-700/20 border border-green-500/30 text-green-300 text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Restauramos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                ecosistemas acuáticos
              </span>{" "}
              mediante soluciones basadas en la naturaleza
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              En Biolily diseñamos, implementamos y monitoreamos proyectos de restauración hídrica
              que generan beneficios ambientales y volumétricos medibles para empresas, gobiernos
              y organizaciones comprometidas con el futuro del agua.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Combinamos innovación ambiental, monitoreo científico y soluciones basadas en la
              naturaleza para transformar desafíos hídricos en resultados verificables.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#tecnologia"
                className="group flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Conoce nuestra tecnología
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#impacto"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition-all backdrop-blur-sm"
              >
                Ver resultados e impacto
              </a>
            </div>
          </div>

          {/* Right: visual placeholder */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-green-800/40 to-blue-900/40 border border-white/10 flex items-end p-6">
              {/* TODO: Replace with real image or video of Fito-colmenas in Valle de Bravo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/30">
                  <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                  </div>
                  <p className="text-sm">Imagen / Video</p>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl bg-white shadow-xl border border-gray-100">
              <p className="text-xs text-gray-500 font-medium">Beneficio volumétrico</p>
              <p className="text-green-700 font-bold text-sm">Validado por BlueRisk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Explorar</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
