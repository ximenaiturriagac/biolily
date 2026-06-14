"use client";
import Image from "next/image";
import { GraduationCap, Briefcase, Microscope, Leaf } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const memberStyles = [
  { gradient: "from-green-700 to-emerald-600", initials: "EC", photo: "/eduardo-caballero.jpeg" },
  { gradient: "from-blue-700 to-cyan-600", initials: "JR", photo: "/jorge-ramirez.jpg" },
  { gradient: "from-purple-700 to-violet-600", initials: "CF", photo: "/carolina-flores.jpg" },
];

const bulletIcons = [
  [GraduationCap, Briefcase, Leaf, Microscope],
  [GraduationCap, Microscope, Leaf, Briefcase],
  [GraduationCap, Briefcase, Microscope, Leaf],
];

export default function Team() {
  const { lang } = useLang();
  const t = translations[lang].team;

  return (
    <section id="equipo" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            {t.heading1} <span className="text-green-700">{t.heading2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:[&>*:last-child:nth-child(odd)]:col-span-2 lg:[&>*:last-child:nth-child(odd)]:max-w-[calc(50%-20px)] lg:[&>*:last-child:nth-child(odd)]:mx-auto">
          {t.members.map((member, idx) => {
            const { gradient, initials, photo } = memberStyles[idx];
            const icons = bulletIcons[idx];
            return (
              <div
                key={member.name}
                className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`h-32 bg-gradient-to-br ${gradient} relative`}>
                  <div className="absolute bottom-0 left-8 translate-y-1/2">
                    <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                          <span className="text-white font-bold text-2xl">{initials}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-14 pb-8 px-8">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                      {member.role}
                    </span>
                    <span className="text-gray-400 text-xs">{member.org}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                  <ul className="space-y-2.5">
                    {member.bullets.map((text, i) => {
                      const Icon = icons[i];
                      return (
                        <li key={text} className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon size={13} className="text-green-600" />
                          </div>
                          <span className="text-gray-600 text-sm">{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
