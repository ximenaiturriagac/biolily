import type { Metadata } from "next";
import Script from "next/script";
import Tecnologia from "@/components/sections/Tecnologia";
import Funcionamiento from "@/components/sections/Funcionamiento";
import Eficiencia from "@/components/sections/Eficiencia";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Fito-colmenas | Tecnología de restauración hídrica — Biolily",
  description:
    "Conoce las Fito-colmenas, tecnología patentada de Biolily para la restauración hídrica mediante el control del lirio acuático. Modular, flotante, medible y validada científicamente.",
  openGraph: {
    title: "Fito-colmenas | Tecnología de restauración hídrica — Biolily",
    description:
      "Conoce las Fito-colmenas, tecnología patentada de Biolily para la restauración hídrica mediante el control del lirio acuático. Modular, flotante, medible y validada científicamente.",
    type: "website",
    url: "https://www.biolily.com.mx/tecnologias",
  },
  alternates: { canonical: "https://www.biolily.com.mx/tecnologias" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué es una Fito-colmena?", "acceptedAnswer": { "@type": "Answer", "text": "Una Fito-colmena es un sistema flotante modular diseñado para apoyar la restauración hídrica de cuerpos de agua eutróficos mediante soluciones basadas en la naturaleza. Su diseño permite contener y aprovechar el crecimiento del lirio acuático de forma controlada, utilizando su capacidad natural para absorber nutrientes presentes en el agua, especialmente nitrógeno y fósforo." } },
    { "@type": "Question", "name": "¿Cómo ayudan las Fito-colmenas a restaurar cuerpos de agua?", "acceptedAnswer": { "@type": "Answer", "text": "Las Fito-colmenas funcionan como sistemas vivos de restauración hídrica. A través del crecimiento controlado del lirio acuático, la tecnología contribuye a capturar nutrientes, reducir cargas contaminantes y generar biomasa que puede ser cosechada y retirada del sistema, extrayendo nutrientes del cuerpo de agua y apoyando la recuperación gradual del ecosistema acuático." } },
    { "@type": "Question", "name": "¿Qué relación tienen las Fito-colmenas con la eutrofización?", "acceptedAnswer": { "@type": "Answer", "text": "La eutrofización ocurre cuando un cuerpo de agua recibe un exceso de nutrientes, principalmente nitrógeno y fósforo, favoreciendo el crecimiento excesivo de algas y alterando el equilibrio ecológico. Las Fito-colmenas fueron diseñadas para intervenir en esta problemática mediante la captura controlada de nutrientes y la cosecha periódica de biomasa." } },
    { "@type": "Question", "name": "¿Las Fito-colmenas eliminan el lirio acuático?", "acceptedAnswer": { "@type": "Answer", "text": "Las Fito-colmenas no parten de la eliminación del lirio acuático como único objetivo. Su enfoque consiste en contenerlo, controlarlo y aprovecharlo como una herramienta de restauración hídrica. Bajo un sistema diseñado, monitoreado y contenido, el lirio acuático puede capturar nutrientes y generar beneficios ambientales medibles." } },
    { "@type": "Question", "name": "¿Qué nutrientes ayudan a remover las Fito-colmenas?", "acceptedAnswer": { "@type": "Answer", "text": "Las Fito-colmenas aprovechan la capacidad del lirio acuático para absorber nitrógeno y fósforo, los principales nutrientes asociados con la eutrofización y el deterioro de la calidad del agua. La remoción ocurre mediante el crecimiento de biomasa vegetal y su posterior cosecha." } },
    { "@type": "Question", "name": "¿Qué son los beneficios volumétricos?", "acceptedAnswer": { "@type": "Answer", "text": "Los beneficios volumétricos son una forma de estimar el volumen de agua que se beneficia ambientalmente a partir de una intervención de restauración hídrica. En Biolily, estos beneficios se calculan mediante metodologías reconocidas internacionalmente — validados por BlueRisk mediante VWBA 2.0 — y permiten traducir el impacto ambiental de las Fito-colmenas en métricas comprensibles para empresas, gobiernos y organizaciones." } },
    { "@type": "Question", "name": "¿Cómo se mide el impacto de las Fito-colmenas?", "acceptedAnswer": { "@type": "Answer", "text": "El impacto se mide mediante monitoreo científico, indicadores de calidad del agua, seguimiento de biomasa cosechada y estimación de beneficios ambientales y volumétricos. Biolily integra medición, operación y reportes para que los proyectos puedan evaluarse con información verificable y trazable." } },
    { "@type": "Question", "name": "¿Las Fito-colmenas sustituyen otros métodos de tratamiento de agua?", "acceptedAnswer": { "@type": "Answer", "text": "No necesariamente. Las Fito-colmenas pueden formar parte de una estrategia integral de restauración hídrica, complementando otras acciones de saneamiento, manejo de cuenca, control de descargas, restauración ecológica y gestión de nutrientes." } },
    { "@type": "Question", "name": "¿En qué cuerpos de agua pueden implementarse las Fito-colmenas?", "acceptedAnswer": { "@type": "Answer", "text": "Las Fito-colmenas están diseñadas para cuerpos de agua afectados por eutrofización, exceso de nutrientes o crecimiento descontrolado de vegetación acuática. Su implementación depende de un diagnóstico previo, condiciones del sitio, objetivos del proyecto, permisos aplicables y viabilidad técnica, ambiental y operativa." } },
    { "@type": "Question", "name": "¿Por qué Biolily utiliza soluciones basadas en la naturaleza?", "acceptedAnswer": { "@type": "Answer", "text": "Porque los ecosistemas tienen procesos naturales capaces de contribuir a su propia recuperación cuando son entendidos, diseñados y gestionados correctamente. Biolily aprovecha estos procesos mediante tecnología, monitoreo científico y operación controlada para generar proyectos de restauración hídrica con beneficios ambientales medibles." } }
  ]
};

export default function TecnologiasPage() {
  return (
    <div className="pt-20">
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Tecnologia showCTA={false} />
      <Funcionamiento asGrid={true} />
      <Eficiencia />
      <FAQ variant="tecnologias" lastUpdated="junio 2026" />
    </div>
  );
}
