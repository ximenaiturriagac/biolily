"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { type Nota, type NotaCategory } from "@/lib/notas";

type NotasT = {
  back: string;
  sourceLabel: string;
  readAt: string;
  disclaimer: string;
  readOriginal: string;
  categories: Record<NotaCategory, string>;
};

const categoryColors: Record<NotaCategory, string> = {
  editorial: "bg-emerald-900/60 text-emerald-300 border border-emerald-700/40",
  tv: "bg-blue-900/60 text-blue-300 border border-blue-700/40",
  podcast: "bg-purple-900/60 text-purple-300 border border-purple-700/40",
  revista: "bg-teal-900/60 text-teal-300 border border-teal-700/40",
  doc: "bg-indigo-900/60 text-indigo-300 border border-indigo-700/40",
};

export default function NotaPage({ nota }: { nota: Nota }) {
  const { lang } = useLang();
  const t = translations[lang].notas as NotasT;

  return (
    <article className="bg-[#050d05] min-h-screen">
      {/* Dark header */}
      <div className="bg-[#0b1a0b] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-18">
          <Link
            href="/notas"
            className="inline-block text-sm text-white/50 hover:text-white transition-colors mb-8"
          >
            {t.back}
          </Link>
          <div className="flex items-center gap-2 mb-5">
            <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[nota.category]}`}>
              {t.categories[nota.category]}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4">{nota.title}</h1>
          <p className="text-white/50 text-sm">
            {t.sourceLabel}: <span className="text-white/70 font-medium">{nota.source}</span>
            <span className="mx-2 text-white/20">·</span>
            {nota.date}
          </p>
        </div>
      </div>

      {/* Gradient image hero */}
      <div
        className="w-full h-52 md:h-72"
        style={{ background: nota.gradient }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Top CTA banner */}
        <a
          href={nota.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-5 py-4 mb-10"
        >
          <div>
            <p className="text-xs text-white/40 mb-0.5">{t.readAt} {nota.source}</p>
            <p className="text-sm font-semibold text-white">{nota.urlLabel}</p>
          </div>
          <svg className="w-5 h-5 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Disclaimer */}
        <p className="text-xs text-white/30 italic mb-8 border-l-2 border-white/10 pl-4 leading-relaxed">
          {t.disclaimer}
        </p>

        {/* Body */}
        <div className="space-y-5">
          {nota.body.map((paragraph, i) => (
            <p
              key={i}
              className={`leading-relaxed ${i === 0 ? "text-white/90 text-base font-medium" : "text-white/65 text-base"}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom dark CTA */}
        <div className="mt-14 rounded-2xl bg-[#0b1a0b] border border-white/10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">{t.sourceLabel}</p>
            <p className="text-white font-bold text-lg">{nota.source}</p>
          </div>
          <a
            href={nota.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            {t.readOriginal}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
