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
  editorial: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  tv: "bg-blue-50 text-blue-700 border border-blue-200",
  podcast: "bg-purple-50 text-purple-700 border border-purple-200",
  revista: "bg-teal-50 text-teal-700 border border-teal-200",
  doc: "bg-indigo-50 text-indigo-700 border border-indigo-200",
};

export default function NotaPage({ nota }: { nota: Nota }) {
  const { lang } = useLang();
  const t = translations[lang].notas as NotasT;

  return (
    <article className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <Link
            href="/notas"
            className="inline-block text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
          >
            {t.back}
          </Link>
          <div className="flex items-center gap-2 mb-5">
            <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[nota.category]}`}>
              {t.categories[nota.category]}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{nota.title}</h1>
          <p className="text-gray-400 text-sm">
            {t.sourceLabel}: <span className="text-gray-600 font-medium">{nota.source}</span>
            <span className="mx-2 text-gray-300">·</span>
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
          className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors px-5 py-4 mb-10"
        >
          <div>
            <p className="text-xs text-gray-400 mb-0.5">{t.readAt} {nota.source}</p>
            <p className="text-sm font-semibold text-gray-800">{nota.urlLabel}</p>
          </div>
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 italic mb-8 border-l-2 border-gray-200 pl-4 leading-relaxed">
          {t.disclaimer}
        </p>

        {/* Body */}
        <div className="space-y-5">
          {nota.body.map((paragraph, i) => (
            <p
              key={i}
              className={`leading-relaxed ${i === 0 ? "text-gray-800 text-base font-medium" : "text-gray-600 text-base"}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl bg-[#0b1a0b] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
