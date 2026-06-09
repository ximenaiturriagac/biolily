"use client";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const directaOds = [6, 13, 15];
const directaColors = ["#26BDE2", "#3F7E44", "#56C02B"];
const indirectaOds = [2, 17];
const indirectaColors = ["#DDA63A", "#19486A"];

interface ODSCardProps {
  ods: number;
  color: string;
  titulo: string;
  desc: string;
  metas: readonly string[];
  metaLabel: string;
  metasLabel: string;
}

function ODSCard({ ods, color, titulo, desc, metas, metaLabel, metasLabel }: ODSCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-sm"
          style={{ backgroundColor: color }}
        >
          <Image
            src={`/E_SDG_Icons-${String(ods).padStart(2, "0")}.jpg`}
            alt={`ODS ${ods}`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
            ODS {ods}
          </span>
          <h4 className="font-display font-semibold text-gray-900 text-base leading-snug mt-0.5">
            {titulo}
          </h4>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed text-justify">{desc}</p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
          {metas.length === 1 ? metaLabel : metasLabel}
        </p>
        <ul className="space-y-1">
          {metas.map((meta) => (
            <li key={meta} className="flex items-start gap-2 text-xs text-gray-500">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
              {meta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ODS() {
  const { lang } = useLang();
  const t = translations[lang].ods;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
          <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed mt-4">
            {t.desc}
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Directas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-green-100" />
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700 px-3">
                {t.directas}
              </span>
              <div className="h-px flex-1 bg-green-100" />
            </div>
            <div className="space-y-4">
              {t.directasList.map((item, i) => (
                <ODSCard
                  key={item.titulo}
                  ods={directaOds[i]}
                  color={directaColors[i]}
                  titulo={item.titulo}
                  desc={item.desc}
                  metas={item.metas}
                  metaLabel={t.metaLabel}
                  metasLabel={t.metasLabel}
                />
              ))}
            </div>
          </div>

          {/* Right: Indirectas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-blue-100" />
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-700 px-3">
                {t.indirectas}
              </span>
              <div className="h-px flex-1 bg-blue-100" />
            </div>
            <div className="space-y-4">
              {t.indirectasList.map((item, i) => (
                <ODSCard
                  key={item.titulo}
                  ods={indirectaOds[i]}
                  color={indirectaColors[i]}
                  titulo={item.titulo}
                  desc={item.desc}
                  metas={item.metas}
                  metaLabel={t.metaLabel}
                  metasLabel={t.metasLabel}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
          <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
            {t.closing}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t.closingDesc}
          </p>
        </div>

      </div>
    </section>
  );
}
