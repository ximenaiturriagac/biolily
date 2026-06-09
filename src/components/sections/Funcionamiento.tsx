"use client";
import { useState } from "react";
import { Waves, Beaker, TrendingUp, Scissors, ArrowDown, Activity, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { number: 1, icon: Waves, title: "Captación natural", desc: "Las raíces del lirio acuático interactúan directamente con la columna de agua, iniciando el proceso de absorción." },
  { number: 2, icon: Beaker, title: "Absorción de nutrientes", desc: "El sistema captura nitrógeno, fósforo y otros contaminantes presentes en el ecosistema, reduciendo las concentraciones que alimentan la eutrofización." },
  { number: 3, icon: TrendingUp, title: "Hasta 5 veces más eficiente", desc: "La biomasa vegetal se desarrolla dentro de un entorno controlado, maximizando la captación de nutrientes por unidad de área." },
  { number: 4, icon: Scissors, title: "Cosecha", desc: "La biomasa es retirada periódicamente del sistema de forma controlada y programada." },
  { number: 5, icon: ArrowDown, title: "Extracción real de contaminantes", desc: "Los nutrientes y contaminantes salen físicamente del ecosistema mediante la cosecha, logrando una remoción efectiva y cuantificable." },
  { number: 6, icon: Activity, title: "Monitoreo", desc: "Los resultados son cuantificados y reportados mediante indicadores de calidad del agua y alineados con estándares internacionales (VWBA2.0)." },
];

export default function Funcionamiento() {
  const [slide, setSlide] = useState(0);
  const total = steps.length;

  const prev = () => setSlide((s) => (s - 1 + total) % total);
  const next = () => setSlide((s) => (s + 1) % total);

  const current = steps[slide];
  const Icon = current.icon;

  return (
    <section id="funcionamiento" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            Proceso
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo funcionan?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed text-justify">
            Cada Fito-colmena sigue un ciclo continuo de captación, absorción, cosecha y monitoreo
            para convertir procesos naturales en resultados medibles.
          </p>
        </div>

        {/* Slider — all viewports */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-10 border border-green-100 shadow-sm min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {current.number}
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <Icon size={22} className="text-green-700" />
                </div>
              </div>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-3">{current.title}</h3>
              <p className="text-gray-500 leading-relaxed text-justify">{current.desc}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-green-400 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <div className="flex gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all ${i === slide ? "bg-green-600 w-6" : "bg-gray-300 w-2"}`}
                  aria-label={`Paso ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-green-400 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
          <p className="text-center text-gray-400 text-xs mt-3">{slide + 1} / {total}</p>
        </div>
      </div>
    </section>
  );
}
