"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { notas, socialLinks, type Nota, type NotaCategory } from "@/lib/notas";
import LinkedInBanner from "@/components/LinkedInBanner";

type NotasT = {
  eyebrow: string;
  heading: string;
  desc: string;
  featured: string;
  all: string;
  readNote: string;
  listen: string;
  watch: string;
  socialEyebrow: string;
  socialTagline: string;
  socialSub: string;
  back: string;
  disclaimer: string;
  readOriginal: string;
  sourceLabel: string;
  readAt: string;
  categories: Record<NotaCategory, string>;
};

const categoryColors: Record<NotaCategory, string> = {
  editorial: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  tv: "bg-blue-50 text-blue-700 border border-blue-200",
  podcast: "bg-purple-50 text-purple-700 border border-purple-200",
  revista: "bg-teal-50 text-teal-700 border border-teal-200",
  doc: "bg-indigo-50 text-indigo-700 border border-indigo-200",
};

function CategoryPill({ category, t }: { category: NotaCategory; t: NotasT }) {
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[category]}`}>
      {t.categories[category]}
    </span>
  );
}

function GradientImage({ gradient, className }: { gradient: string; className?: string }) {
  return (
    <div
      className={className}
      style={{ background: gradient }}
      aria-hidden="true"
    />
  );
}

function FeaturedCard({ nota, t }: { nota: Nota; t: NotasT }) {
  return (
    <Link href={`/notas/${nota.slug}`} className="group block">
      <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all">
        <GradientImage gradient={nota.gradient} className="h-56 md:h-full min-h-[220px]" />
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">{t.featured}</span>
              <span className="text-gray-300">·</span>
              <CategoryPill category={nota.category} t={t} />
            </div>
            <p className="text-xs text-gray-400 mb-2 font-medium">{nota.source} · {nota.date}</p>
            <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-emerald-700 transition-colors">
              {nota.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{nota.excerpt}</p>
          </div>
          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors">
              {t.readNote} →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function NoteCard({ nota, t }: { nota: Nota; t: NotasT }) {
  return (
    <Link href={`/notas/${nota.slug}`} className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all">
      <GradientImage gradient={nota.gradient} className="h-40 w-full" />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <CategoryPill category={nota.category} t={t} />
        </div>
        <p className="text-xs text-gray-400 mb-2">{nota.source} · {nota.date}</p>
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
          {nota.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">{nota.excerpt}</p>
        <div className="mt-4">
          <span className="text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors">
            {t.readNote} →
          </span>
        </div>
      </div>
    </Link>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#000" />
      <path d="M16.5 5a3.5 3.5 0 003.5 3.5v2.5a6 6 0 01-3.5-1.12V15a5 5 0 11-5-5 5.07 5.07 0 01.5.03V12.5a2.5 2.5 0 10-2.5 2.5V5h2.5v.28A6 6 0 0016.5 5z" fill="white" />
    </svg>
  );
}

function SocialBlock({ t }: { t: NotasT }) {
  return (
    <div className="mt-20 rounded-3xl overflow-hidden bg-gradient-to-r from-[#0d3550] to-[#0f4a40]">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">{t.socialEyebrow}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.socialTagline}</h2>
          <p className="text-white/60 text-sm leading-relaxed">{t.socialSub}</p>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors px-4 py-3"
            >
              <span className="flex-shrink-0">
                {link.platform === "Instagram" ? <InstagramIcon /> : <TikTokIcon />}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/40 font-medium">{link.platform}</p>
                <p className="text-sm text-white/80 group-hover:text-white transition-colors truncate">{link.label}</p>
              </div>
              <svg className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NotasIndexPage() {
  const { lang } = useLang();
  const t = translations[lang].notas as NotasT;

  const featured = notas[0];
  const rest = notas.slice(1);

  return (
    <>
      <section className="bg-white min-h-screen">
        {/* Hero banner — mismo verde que el inicio */}
        <div className="bg-gradient-to-r from-[#0d2235] to-[#1a3a2a]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">{t.eyebrow}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.heading}</h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">{t.desc}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-14">
          {/* Featured */}
          <div className="mb-14">
            <FeaturedCard nota={featured} t={t} />
          </div>

          {/* Grid */}
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">{t.all}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((nota) => (
              <NoteCard key={nota.slug} nota={nota} t={t} />
            ))}
          </div>

          {/* Social */}
          <SocialBlock t={t} />
        </div>
      </section>

      <LinkedInBanner />
    </>
  );
}
