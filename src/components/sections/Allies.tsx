"use client";
import { Building2, Landmark, Heart, Users, GraduationCap, Home } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const icons = [Building2, Landmark, Heart, Users, GraduationCap, Home];
const styles = [
  { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { color: "text-green-700", bg: "bg-green-50", border: "border-green-100" },
  { color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
  { color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
  { color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
  { color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
];

export default function Allies() {
  const { lang } = useLang();
  const t = translations[lang].allies;

  return (
    <section id="unete" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-3 block">
              {t.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t.heading1} <span className="text-green-700">{t.heading2}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.desc}</p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-200">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                {t.cta}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.items.map(({ title, desc }, i) => {
              const Icon = icons[i];
              const { color, bg, border } = styles[i];
              return (
                <div
                  key={title}
                  className={`p-5 rounded-2xl ${bg} border ${border} hover:shadow-md transition-all group`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Icon size={17} className={color} />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
