"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a0f] via-[#1a3a2a] to-[#0d2235]" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 w-full">
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
              En Biolily diseñamos e implementamos proyectos de restauración hídrica que generan 
              beneficios ambientales y volumétricos medibles mediante soluciones basadas en la 
              naturaleza, monitoreo científico y colaboración multisectorial.
            </p>
          </div>

          {/* Right: image + CTAs */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-green-800/40 to-blue-900/40 border border-white/10 relative">
              <Image
                src="/render-completo.png"
                alt="Tecnologia patentada en operacion"
                fill
                className="object-contain"
                priority
              />
              <div className="hidden lg:block absolute bottom-9 left-3 max-w-[160px] px-3 py-2 rounded-xl bg-black/55 backdrop-blur-sm border border-white/15">
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
              <Link
                href="/#impacto"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition-all backdrop-blur-sm text-sm"
              >
                Ver resultados e impacto
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
