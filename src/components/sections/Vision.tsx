"use client";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Vision() {
  const { lang } = useLang();
  const t = translations[lang].vision;

  return (
    <section
      id="vision"
      className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-200/30 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-teal-200/20 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            {t.heading}
          </h2>

          <div className="space-y-6 text-left max-w-3xl mx-auto mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">{t.p1}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{t.p2}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{t.p3}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-green-400 to-teal-400" />
          <div className="pl-8 py-4">
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 leading-tight italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-green-600 text-sm font-medium uppercase tracking-widest">
              {t.quoteAttr}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
