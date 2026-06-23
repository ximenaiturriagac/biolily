import type { Metadata } from "next";
import Tecnologia from "@/components/sections/Tecnologia";
import Funcionamiento from "@/components/sections/Funcionamiento";
import Eficiencia from "@/components/sections/Eficiencia";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Fito-colmenas® | Tecnología de restauración hídrica — Biolily",
  description:
    "Conoce las Fito-colmenas®, tecnología patentada de Biolily para la restauración hídrica mediante el control del lirio acuático. Modular, flotante, medible y validada científicamente.",
  openGraph: {
    title: "Fito-colmenas® | Tecnología de restauración hídrica — Biolily",
    description:
      "Conoce las Fito-colmenas®, tecnología patentada de Biolily para la restauración hídrica mediante el control del lirio acuático. Modular, flotante, medible y validada científicamente.",
    type: "website",
    url: "https://www.biolily.com.mx/tecnologias",
  },
  alternates: { canonical: "https://www.biolily.com.mx/tecnologias" },
};

export default function TecnologiasPage() {
  return (
    <div className="pt-20">
      <Tecnologia showCTA={false} />
      <Funcionamiento asGrid={true} />
      <Eficiencia />
      <FAQ variant="tecnologias" />
      <div className="py-4 text-center">
        <p className="text-gray-400 text-xs">Última actualización: junio 2026</p>
      </div>
    </div>
  );
}
