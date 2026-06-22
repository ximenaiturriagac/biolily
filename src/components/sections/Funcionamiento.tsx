"use client";
import { useState } from "react";
import {
  Waves, Beaker, TrendingUp, Scissors, ArrowDown, Activity,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const icons = [Waves, Beaker, TrendingUp, Scissors, ArrowDown, Activity];
const PER_SLIDE = 3;
const SLIDES = 2;

export default function Funcionamiento({ asGrid = false }: { asGrid?: boolean }) {
  const [slide, setSlide] = useState(0);
  const { lang } = useLang();
  const t = translations[lang].funcionamiento;

  const steps = t.steps.map((s, i) => ({ ...s, number: i + 1, icon: icons[i] }));

  const prev = () => setSlide((s) => (s - 1 + SLIDES) % SLIDES);
  const next = () => setSlide((s) => (s + 1) % SLIDES);
  const visible = steps.slice(slide * PER_SLIDE, slide * PER_SLIDE + PER_SLIDE);

  return (
    <section id="funcionamiento" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-700 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed text-justify">
            {t.desc}
          </p>
        </div>

        {asGrid ? (
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
              <button onClick={prev} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-green-400 flex items-center justify-center transition-colors shadow-sm" aria-label={t.prev}>
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: SLIDES }).map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} className={`h-2 rounded-full transition-all ${i === slide ? "bg-green-600 w-6" : "bg-gray-300 w-2"}`} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-green-400 flex items-center justify-center transition-colors shadow-sm" aria-label={t.next}>
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
