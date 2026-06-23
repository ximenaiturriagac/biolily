import type { Metadata } from "next";
import ImpactoSection from "@/components/sections/ImpactoSection";
import ODS from "@/components/sections/ODS";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Impacto Ambiental y ODS | Restauración Hídrica con Resultados Medibles — Biolily",
  description:
    "Proyectos de restauración hídrica alineados con Objetivos de Desarrollo Sostenible 6, 13 y 15. Impacto ambiental medible. Para empresas, gobiernos y organizaciones ambientales.",
  openGraph: {
    title: "Impacto Ambiental y ODS | Restauración Hídrica con Resultados Medibles — Biolily",
    description:
      "Proyectos de restauración hídrica alineados con Objetivos de Desarrollo Sostenible 6, 13 y 15. Impacto ambiental medible. Para empresas, gobiernos y organizaciones ambientales.",
    type: "website",
    url: "https://www.biolily.com.mx/impacto",
  },
  alternates: { canonical: "https://www.biolily.com.mx/impacto" },
};

export default function ImpactoPage() {
  return (
    <div className="pt-20">
      <ImpactoSection />
      <ODS />
      <FAQ variant="impacto" />
    </div>
  );
}
