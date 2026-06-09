"use client";
import { Leaf, Droplets, BarChart2, Microscope, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const icons = [Leaf, Droplets, BarChart2, Microscope, FileText];
const iconBgs = ["bg-green-50", "bg-blue-50", "bg-teal-50", "bg-violet-50", "bg-amber-50"];
const iconColors = ["text-green-600", "text-blue-600", "text-teal-600", "text-violet-600", "text-amber-600"];

export default function Metodologia() {
  const { lang } = useLang();
  const t = translations[lang].metodologia;

  return (
    <section id="metodologia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {t.items.slice(0, 3).map(({ title, desc }, i) => {
            const Icon = icons[i];
            return (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
                <div className={`w-10 h-10 rounded-xl ${iconBgs[i]} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={iconColors[i]} />
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {t.items.slice(3).map(({ title, desc }, i) => {
            const idx = i + 3;
            const Icon = icons[idx];
            return (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all group w-full sm:w-80 lg:w-96">
                <div className={`w-10 h-10 rounded-xl ${iconBgs[idx]} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={iconColors[idx]} />
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
