import type { Metadata } from "next";
import Media from "@/components/sections/Media";

export const metadata: Metadata = {
  title: "Medios | Cobertura sobre Restauración Hídrica — Biolily",
  description:
    "Biolily en los medios: notas de prensa, menciones, reconocimientos y cobertura sobre Fito-colmenas® y los proyectos de restauración hídrica en Valle de Bravo y México.",
  openGraph: {
    title: "Medios | Cobertura sobre Restauración Hídrica — Biolily",
    description:
      "Biolily en los medios: notas de prensa, menciones, reconocimientos y cobertura sobre Fito-colmenas® y los proyectos de restauración hídrica en Valle de Bravo y México.",
    type: "website",
    url: "https://www.biolily.com.mx/notas",
  },
  alternates: { canonical: "https://www.biolily.com.mx/notas" },
};

export default function NotasPage() {
  return (
    <div className="pt-20">
      <Media />
    </div>
  );
}
