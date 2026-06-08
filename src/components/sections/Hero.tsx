"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a0f] via-[#1a3a2a] to-[#0d2235]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-green-700/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-900/20 blur-3xl" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Tagline pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-700/20 border border-green-500/30 text-green-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Tecnología validada en campo · Respaldada por ciencia · Diseñada para escalar
        </div>

        {/* Main headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
          Tecnología ambiental{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            inspirada en la naturaleza
          </span>{" "}
          para restaurar cuerpos de agua
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          En Biolily desarrollamos soluciones basadas en la naturaleza para tratar agua{" "}
          <em>in situ</em>, combatir la eutrofización y recuperar el equilibrio ecológico
          de lagos, presas y embalses.
        </p>

        {/* Origin story */}
        <div className="max-w-2xl mx-auto mb-12 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
            "Biolily nace en Valle de Bravo con una visión clara: transformar el lirio
            acuático, comúnmente visto como un problema, en una herramienta controlada,
            medible y escalable para la restauración hídrica."
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#fito-colmenas"
            className="group flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-green-500/25 hover:scale-105"
          >
            Conoce las Fito-colmenas
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#impacto"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition-all backdrop-blur-sm"
          >
            Ver impacto
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 px-8 py-4 border border-green-500/50 hover:border-green-400 text-green-300 hover:text-white font-semibold rounded-full transition-all"
          >
            Contáctanos
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Explorar</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
