"use client";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const badgeColors = [
  "bg-lime-100 text-lime-800",
  "bg-green-100 text-green-800",
  "bg-blue-100 text-blue-800",
  "bg-sky-100 text-sky-800",
  "bg-teal-100 text-teal-800",
];
const accentColors = [
  "border-lime-200",
  "border-green-200",
  "border-blue-200",
  "border-sky-200",
  "border-teal-200",
];

export default function Reconocimientos() {
  const { lang } = useLang();
  const t = translations[lang].reconocimientos;

  const awards = t.items.map((item, i) => ({
    ...item,
    badgeColor: badgeColors[i],
    accentColor: accentColors[i],
  }));

  return (
    <section id="reconocimientos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {awards.slice(0, 3).map(({ badge, badgeColor, org, desc, accentColor }) => (
            <div key={org} className={`p-6 rounded-2xl bg-white border ${accentColor} hover:shadow-md transition-all`}>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeColor} mb-4`}>{badge}</span>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{org}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {awards.slice(3).map(({ badge, badgeColor, org, desc, accentColor }) => (
            <div key={org} className={`p-6 rounded-2xl bg-white border ${accentColor} hover:shadow-md transition-all w-full sm:w-80 lg:w-96`}>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeColor} mb-4`}>{badge}</span>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{org}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
