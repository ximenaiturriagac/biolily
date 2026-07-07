"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { type Nota, type NotaCategory } from "@/lib/notas";
import LinkedInBanner from "@/components/LinkedInBanner";

type NotasT = {
  back: string;
  sourceLabel: string;
  readAt: string;
  disclaimer: string;
  readOriginal: string;
  categories: Record<NotaCategory, string>;
};

const categoryColors: Record<NotaCategory, string> = {
  editorial: "bg-emerald-50/20 text-emerald-300 border border-emerald-500/30",
  tv: "bg-blue-50/20 text-blue-300 border border-blue-500/30",
  podcast: "bg-purple-50/20 text-purple-300 border border-purple-500/30",
  revista: "bg-teal-50/20 text-teal-300 border border-teal-500/30",
  doc: "bg-indigo-50/20 text-indigo-300 border border-indigo-500/30",
};

export default function NotaPage({ nota }: { nota: Nota }) {
  const { lang } = useLang();
  const t = translations[lang].notas as NotasT;

  return (
    <>
      <article className="bg-white min-h-screen">
        {/* Header banner */}
        <div className="bg-gradient-to-r from-[#0d2235] to-[#1a3a2a]">
          <div className="max-w-3xl mx-auto px-6 py-14">
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
            <h1 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight mb-4">{nota.title}</h1>
            <p className="text-white/50 text-sm">
              {t.sourceLabel}: <span className="text-white/80 font-medium">{nota.source}</span>
              <span className="mx-2 text-white/20">·</span>
              {nota.date}
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-10">
          {/* Top CTA banner */}
          <a
            href={nota.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-[#0d2235] to-[#1a3a2a] hover:opacity-90 transition-opacity px-5 py-4 mb-10"
          >
            <div>
              <p className="text-xs text-white/50 mb-0.5">{t.readAt} {nota.source}</p>
              <p className="text-sm font-semibold text-white">{nota.urlLabel}</p>
            </div>
            <svg className="w-5 h-5 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* Disclaimer */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-8">
            <p className="text-xs text-gray-500 italic leading-relaxed">
              {t.disclaimer}
            </p>
          </div>

          {/* Editorial image — centrada dentro del artículo */}
          {nota.image && (
            <div className="flex justify-center mb-8">
              <figure className="w-full max-w-xl rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src={nota.image}
                  alt={nota.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </div>
          )}

          {/* Gradient strip when no image */}
          {!nota.image && (
            <div
              className="w-full h-2 rounded-full mb-8 opacity-60"
              style={{ background: nota.gradient }}
              aria-hidden="true"
            />
          )}

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
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#0d2235] to-[#1a3a2a] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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

      <LinkedInBanner />
    </>
  );
}
