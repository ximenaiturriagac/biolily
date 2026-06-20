import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contáctanos | Biolily",
  description:
    "¿Tu organización tiene metas de agua, sostenibilidad o restauración ecológica? Contacta a Biolily y diseñemos juntos un proyecto de restauración hídrica con resultados verificables.",
  openGraph: {
    title: "Contáctanos | Biolily",
    description:
      "¿Tu organización tiene metas de agua, sostenibilidad o restauración ecológica? Contacta a Biolily y diseñemos juntos un proyecto de restauración hídrica con resultados verificables.",
    type: "website",
    url: "https://www.biolily.com.mx/contacto",
  },
  alternates: { canonical: "https://www.biolily.com.mx/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
