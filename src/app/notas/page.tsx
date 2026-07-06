import type { Metadata } from "next";
import NotasIndexPage from "@/components/notas/NotasIndexPage";

export const metadata: Metadata = {
  title: "Notas y menciones | Biolily en los medios — Restauración Hídrica",
  description:
    "Cobertura, entrevistas y menciones sobre Fito-colmenas y los proyectos de restauración hídrica de Biolily en Valle de Bravo y México.",
  openGraph: {
    title: "Notas y menciones | Biolily en los medios — Restauración Hídrica",
    description:
      "Cobertura, entrevistas y menciones sobre Fito-colmenas y los proyectos de restauración hídrica de Biolily en Valle de Bravo y México.",
    type: "website",
    url: "https://www.biolily.com.mx/notas",
  },
  alternates: { canonical: "https://www.biolily.com.mx/notas" },
};

export default function NotasPage() {
  return (
    <div className="pt-20">
      <NotasIndexPage />
    </div>
  );
}
