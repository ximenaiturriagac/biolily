"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function FAQ({ variant = "tecnologias", lastUpdated }: { variant?: "tecnologias" | "impacto"; lastUpdated?: string }) {
  const { lang } = useLang();
  const t = translations[lang].faq;
  const cta = variant === "impacto" ? t.ctaImpacto : t.ctaTecnologias;

  const [open, setOpen] = useState<number>(0);

  const toggle = (idx: number) => setOpen(open === idx ? -1 : idx);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-3 block">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">{t.subheading}</p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {t.items.map((item, idx) => {
            const isOpen = open === idx;
            const answerId = `faq-answer-${idx}`;
            const buttonId = `faq-btn-${idx}`;
            return (
              <div key={idx} className="bg-white">
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-green-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-400"
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-green-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 pt-1">
                    {item.a.map((paragraph, pi) => (
                      <p key={pi} className={`text-gray-600 text-sm leading-relaxed ${pi > 0 ? "mt-3" : ""}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-green-700 to-emerald-600 p-8 sm:p-10 text-center">
          <p className="text-white font-display text-xl sm:text-2xl font-bold mb-3 leading-snug">
            {cta.heading}
          </p>
          <p className="text-green-100 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            {cta.desc}
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-green-800 font-semibold rounded-full text-sm hover:bg-green-50 transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            {cta.button}
          </Link>
        </div>

      {lastUpdated && (
        <p className="text-gray-400 text-xs text-center mt-6">{t.lastUpdated}</p>
      )}
      </div>
    </section>
  );
}
