import type { Metadata } from "next";
import Media from "@/components/sections/Media";

export const metadata: Metadata = {
  title: "Notas y menciones | Biolily",
  description:
    "Biolily en los medios: notas de prensa, menciones, reconocimientos y cobertura sobre Fito-colmenas® y los proyectos de restauración hídrica en Valle de Bravo y México.",
  openGraph: {
    title: "Notas y menciones | Biolily",
    description:
      "Biolily en los medios: notas de prensa, menciones, reconocimientos y cobertura sobre Fito-colmenas® y los proyectos de restauración hídrica en Valle de Bravo y México.",
    type: "website",
  },
};

export default function NotasPage() {
  return (
    <div className="pt-20">
      <Media />
    </div>
  );
}
