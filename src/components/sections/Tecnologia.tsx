"use client";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Tecnologia({ showCTA = true }: { showCTA?: boolean }) {
  const { lang } = useLang();
  const t = translations[lang].tecnologia;

  return (
    <section id="tecnologias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-700 block mb-4">
            {t.eyebrow}
          </span>
          <div className="flex justify-center items-center mb-6">
            <Image
              src="/logo-principal-fitocolmenas.svg"
              alt="Fito-colmenas"
              width={323}
              height={97}
              className="h-[91px] w-auto mx-auto block"
            />
          </div>
          <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
              {t.desc}
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {t.features.map((f) => (
                <div
                  key={f}
                  className="px-4 py-3 rounded-xl bg-green-50 border border-green-100 text-center"
                >
                  <span className="text-green-800 text-sm font-semibold">{f}</span>
                </div>
              ))}
            </div>
            {showCTA && (
              <a
                href="/tecnologias"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                {t.cta}
              </a>
            )}
          </div>

          <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-green-100 to-teal-100 border border-green-200 relative">
            <Image
              src="/render-fito-colmena.png"
              alt="Módulo Fito-colmena"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
