import type { Metadata } from "next";
import Script from "next/script";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Equipo | Expertos en Restauración Hídrica — Biolily",
  description:
    "Conoce al equipo de Biolily: expertos en restauración hídrica, tecnología ambiental, ciencias del agua y Water Stewardship comprometidos con la recuperación de ecosistemas acuáticos.",
  openGraph: {
    title: "Equipo | Expertos en Restauración Hídrica — Biolily",
    description:
      "Conoce al equipo de Biolily: expertos en restauración hídrica, tecnología ambiental, ciencias del agua y Water Stewardship comprometidos con la recuperación de ecosistemas acuáticos.",
    type: "website",
    url: "https://www.biolily.com.mx/equipo",
  },
  alternates: { canonical: "https://www.biolily.com.mx/equipo" },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Person",
      "position": 1,
      "name": "Eduardo Caballero Murillo",
      "jobTitle": "Fundador y CEO",
      "worksFor": { "@type": "Organization", "name": "Biolily", "url": "https://www.biolily.com.mx" },
      "description": "Ingeniero en Biotecnología por el Tecnológico de Monterrey. Fundador de Biolily y líder del desarrollo de las Fito-colmenas® como solución tecnológica para la restauración hídrica.",
      "sameAs": "https://www.linkedin.com/in/eduardo-caballero-murillo/",
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Tecnológico de Monterrey" }
    },
    {
      "@type": "Person",
      "position": 2,
      "name": "Jorge Ramírez Zierold",
      "jobTitle": "Cofundador y Director Científico",
      "worksFor": { "@type": "Organization", "name": "Biolily", "url": "https://www.biolily.com.mx" },
      "description": "Doctor en Ciencias especialista en limnología, calidad del agua y sistemas acuáticos. Experiencia académica en la UNAM. Responsable del fundamento técnico y monitoreo científico de las Fito-colmenas®.",
      "sameAs": [
        "https://www.linkedin.com/in/jorge-ram%C3%ADrez-zierold-50582142/",
        "https://web.siia.unam.mx/siia-publico/c/busqueda_individual.php?id=98334",
        "https://www.fciencias.unam.mx/directorio/48606"
      ],
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Universidad Nacional Autónoma de México" }
    },
    {
      "@type": "Person",
      "position": 3,
      "name": "Carolina Flores Q.",
      "jobTitle": "Cofundadora y CFO",
      "worksFor": { "@type": "Organization", "name": "Biolily", "url": "https://www.biolily.com.mx" },
      "description": "Especialista en finanzas corporativas, sostenibilidad y análisis de datos. Licenciada en Contaduría y Gestión Empresarial por la Universidad Iberoamericana. Responsable de la estrategia financiera y ESG de Biolily.",
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Universidad Iberoamericana" }
    }
  ]
};

export default function EquipoPage() {
  return (
    <div className="pt-20">
      <Script id="team-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <Team />
    </div>
  );
}
