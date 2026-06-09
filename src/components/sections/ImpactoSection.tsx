"use client";
import { Leaf, Users, Building2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const styles = [
  { color: "text-green-600", bg: "bg-green-50", border: "border-green-100", icon: Leaf },
  { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", icon: Users },
  { color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100", icon: Building2 },
];

export default function ImpactoSection() {
  const { lang } = useLang();
  const t = translations[lang].impacto;

  return (
    <section id="impacto" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.blocks.map(({ title, desc }, i) => {
            const { color, bg, border, icon: Icon } = styles[i];
            return (
              <div
                key={title}
                className={`p-8 rounded-3xl ${bg} border ${border} text-center hover:shadow-md transition-all`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <Icon size={28} className={color} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
