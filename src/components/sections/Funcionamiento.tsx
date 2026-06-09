"use client";
import { useState } from "react";
import {
  Waves, Beaker, TrendingUp, Scissors, ArrowDown, Activity,
  ChevronLeft, ChevronRight,
} from "lucide-react";

const steps = [
  { number: 1, icon: Waves, title: "Captación natural", desc: "Las raíces del lirio acuático interactúan directamente con la columna de agua, iniciando el proceso de absorción." },
  { number: 2, icon: Beaker, title: "Absorción de nutrientes", desc: "El sistema captura nitrógeno, fósforo y otros contaminantes presentes en el ecosistema, reduciendo las concentraciones que alimentan la eutrofización." },
  { number: 3, icon: TrendingUp, title: "Hasta 5 veces más eficiente", desc: "La biomasa vegetal se desarrolla dentro de un entorno controlado, maximizando la captación de nutrientes por unidad de área." },
  { number: 4, icon: Scissors, title: "Cosecha", desc: "La biomasa es retirada periódicamente del sistema de forma controlada y programada." },
  { number: 5, icon: ArrowDown, title: "Extracción real de contaminantes", desc: "Los nutrientes y contaminantes salen físicamente del ecosistema mediante la cosecha, logrando una remoción efectiva y cuantificable." },
  { number: 6, icon: Activity, title: "Monitoreo", desc: "Los resultados son cuantificados y reportados mediante indicadores de calidad del agua y alineados con estándares internacionales (VWBA2.0)." },
];

const PER_SLIDE = 3;
const SLIDES = Math.ceil(steps.length / PER_SLIDE);

export default function Funcionamiento({ asGrid = false }: { asGrid?: boolean }) {
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => (s - 1 + SLIDES) % SLIDES);
  const next = () => setSlide((s) => (s + 1) % SLIDES);
  const visible = steps.slice(slide * PER_SLIDE, slide * PER_SLIDE + PER_SLIDE);

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

        {asGrid ? (
          /* Grid layout — all 6 steps at once */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="bg-white rounded-3xl p-8 border border-green-100 shadow-sm flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                      {step.number}
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                      <Icon size={22} className="text-green-700" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-justify text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        ) : (
          /* Slider layout — 3 cards per slide */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[240px]">
              {visible.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="bg-white rounded-3xl p-8 border border-green-100 shadow-sm flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                        {step.number}
                      </div>
                      <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                        <Icon size={22} className="text-green-700" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-justify text-sm">{step.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-6 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-green-400 flex items-center justify-center transition-colors shadow-sm" aria-label="Anterior">
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: SLIDES }).map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} className={`h-2 rounded-full transition-all ${i === slide ? "bg-green-600 w-6" : "bg-gray-300 w-2"}`} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-green-400 flex items-center justify-center transition-colors shadow-sm" aria-label="Siguiente">
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3">{slide + 1} / {SLIDES}</p>
          </div>
        )}
      </div>
    </section>
  );
}
