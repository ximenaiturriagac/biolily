"use client";
import { TriangleAlert, CheckCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const metricColors = [
  "from-green-500 to-emerald-600",
  "from-teal-500 to-cyan-600",
  "from-blue-500 to-indigo-600",
];

export default function Eficiencia() {
  const { lang } = useLang();
  const t = translations[lang].eficiencia;

  return (
    <section
      id="eficiencia"
      className="py-24 bg-gradient-to-br from-[#0f2a0f] via-[#1a3a2a] to-[#0d2235] relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-400 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            {t.heading}
          </h2>
          <p className="text-green-300 text-lg font-medium mb-6 text-center max-w-2xl mx-auto">
            {t.subheading}
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto text-justify">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {t.metrics.map(({ value, label, source, sourceLink, sourceLinkText }, i) => (
            <div key={label} className="rounded-3xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center flex flex-col items-center justify-center">
              <div className={`text-3xl sm:text-4xl font-display font-bold bg-gradient-to-br ${metricColors[i]} bg-clip-text text-transparent mb-3`}>
                {value}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center mb-2">{label}</p>
              {source && (
                <p className="text-gray-500 text-xs leading-relaxed text-center">
                  {sourceLink && sourceLinkText ? (
                    <>
                      {source.replace(sourceLinkText, "")}{" "}
                      <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">
                        {sourceLinkText}
                      </a>
                    </>
                  ) : source}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {t.benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle size={15} className="text-green-400 shrink-0" />
              <span className="text-gray-200 text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto text-justify mb-6">
          {t.note1}
        </p>

        <div className="flex justify-center">
          <div className="inline-flex items-start gap-3 px-5 py-4 rounded-2xl bg-amber-900/30 border border-amber-700/40 max-w-xl">
            <TriangleAlert size={18} className="text-amber-400 mt-0.5 shrink-0" />
            <p className="text-amber-200 text-sm leading-relaxed text-center">
              {t.note2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
