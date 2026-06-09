import type { Metadata } from "next";
import ImpactoSection from "@/components/sections/ImpactoSection";
import ODS from "@/components/sections/ODS";

export const metadata: Metadata = {
  title: "Impacto y Agenda 2030 | Biolily",
  description:
    "Conoce el impacto ambiental, social e institucional de Biolily y cómo nuestros proyectos de restauración hídrica se alinean con los Objetivos de Desarrollo Sostenible de la ONU.",
  openGraph: {
    title: "Impacto y Agenda 2030 | Biolily",
    description:
      "Conoce el impacto ambiental, social e institucional de Biolily y cómo nuestros proyectos de restauración hídrica se alinean con los Objetivos de Desarrollo Sostenible de la ONU.",
    type: "website",
  },
};

export default function ImpactoPage() {
  return (
    <div className="pt-20">
      <ImpactoSection />
      <ODS />
    </div>
  );
}
