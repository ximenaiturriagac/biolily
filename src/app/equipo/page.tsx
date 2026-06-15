import type { Metadata } from "next";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Equipo | Biolily",
  description:
    "Conoce al equipo de Biolily: expertos en restauración hídrica, tecnología ambiental, ciencias del agua y Water Stewardship comprometidos con la recuperación de ecosistemas acuáticos.",
  openGraph: {
    title: "Equipo | Biolily",
    description:
      "Conoce al equipo de Biolily: expertos en restauración hídrica, tecnología ambiental, ciencias del agua y Water Stewardship comprometidos con la recuperación de ecosistemas acuáticos.",
    type: "website",
    url: "https://biolily.com.mx/equipo",
  },
  alternates: { canonical: "https://biolily.com.mx/equipo" },
};

export default function EquipoPage() {
  return (
    <div className="pt-20">
      <Team />
    </div>
  );
}
