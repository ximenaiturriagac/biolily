"use client";
import { Leaf, Droplets, FlaskConical, BarChart2, TrendingUp, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const icons = [Leaf, Droplets, FlaskConical, BarChart2, TrendingUp, Users];

export default function QuienesSomos() {
  const { lang } = useLang();
  const t = translations[lang].quienesSomos;

  return (
    <section id="biolily" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-700 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            {t.heading1} <span className="text-green-700">{t.heading2}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.pillars.map(({ title, desc }, i) => {
            const Icon = icons[i];
            return (
              <div
                key={title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-green-700" />
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
