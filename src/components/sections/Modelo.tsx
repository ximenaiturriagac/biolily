"use client";
import {
  Search,
  Lightbulb,
  Layers,
  Activity,
  BarChart2,
  Droplets,
  FileText,
  Leaf,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const icons = [Search, Lightbulb, Layers, Activity, BarChart2, Droplets, FileText, Leaf];

export default function Modelo() {
  const { lang } = useLang();
  const t = translations[lang].modelo;

  return (
    <section id="modelo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed text-justify">
            {t.desc}
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={step.title}
                className="flex flex-col p-6 rounded-2xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {idx + 1}
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                    <Icon size={18} className="text-green-700" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed text-justify">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="md:hidden space-y-0">
          {t.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.title} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">
                    {index + 1}
                  </div>
                  {index < t.steps.length - 1 && <div className="w-0.5 flex-1 bg-green-200 my-1" />}
                </div>
                <div className="pb-6 pt-1 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-green-700 shrink-0" />
                    <h3 className="font-semibold text-gray-900 text-sm">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed text-justify">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
