"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function ImpactoBanner() {
  const { lang } = useLang();
  const t = translations[lang].impactoBanner;

  return (
    <section className="bg-green-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0f2a0f] via-[#1a3a2a] to-[#0d2235] px-10 py-12 text-white text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-400 block mb-4">
            {t.eyebrow}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            {t.heading1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {t.heading2}
            </span>{" "}
            {t.heading3}
          </h3>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {t.desc}
          </p>
          <Link
            href="/impacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-green-500/25"
          >
            {t.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
