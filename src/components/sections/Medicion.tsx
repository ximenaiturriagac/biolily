"use client";
import { Activity } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Medicion() {
  const { lang } = useLang();
  const t = translations[lang].medicion;

  return (
    <section id="medicion" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 block mb-3">
              {t.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t.heading}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.p1}</p>
            <p className="text-gray-600 text-base leading-relaxed">{t.p2}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
            <div className="flex items-center gap-2 mb-6">
              <Activity size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                {t.panelTitle}
              </h3>
            </div>
            <div className="space-y-3">
              {t.indicators.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 text-sm leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
