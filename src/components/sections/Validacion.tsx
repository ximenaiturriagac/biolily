"use client";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const logos = [
  { logo: "/logo-bluerisk.png", logoClass: "object-contain w-full h-full scale-90", containerPad: "p-3" },
  { logo: "/logo-unam.png", logoClass: "object-contain w-full h-full", containerPad: "p-1" },
  { logo: "/logo-conagua.png", logoClass: "object-contain w-full h-full", containerPad: "p-1" },
  { logo: "/logo-provalle.png", logoClass: "object-contain w-full h-full scale-[1.6]", containerPad: "p-0" },
  { logo: "/logo-itesm.png", logoClass: "object-contain w-full h-full scale-[1.1]", containerPad: "p-1" },
];

function InstitutionCard({ name, logo, logoClass, containerPad, desc }: { name: string; logo: string; logoClass: string; containerPad: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col" style={{ minHeight: 320 }}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-20 h-20 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden ${containerPad}`}>
          <Image src={logo} alt={name} width={80} height={80} className={logoClass} />
        </div>
        <h3 className="font-display font-semibold text-white text-base leading-snug">{name}</h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed text-justify">{desc}</p>
    </div>
  );
}

export default function Validacion() {
  const { lang } = useLang();
  const t = translations[lang].validacion;

  const institutions = t.institutions.map((inst, i) => ({ ...inst, ...logos[i] }));

  return (
    <section
      id="validacion"
      className="py-24 bg-gradient-to-br from-[#0d1f3a] via-[#0f2535] to-[#0d2235] relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400 block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed text-justify">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {institutions.slice(0, 3).map((inst) => (
            <InstitutionCard key={inst.name} {...inst} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-start-2 md:col-span-2">
            <InstitutionCard {...institutions[3]} />
          </div>
          <div className="md:col-start-4 md:col-span-2">
            <InstitutionCard {...institutions[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
