import Script from "next/script";
import Hero from "@/components/sections/Hero";
import QuienesSomos from "@/components/sections/QuienesSomos";
import Vision from "@/components/sections/Vision";
import Modelo from "@/components/sections/Modelo";
import Tecnologia from "@/components/sections/Tecnologia";
import Medicion from "@/components/sections/Medicion";
import Metodologia from "@/components/sections/Metodologia";
import Validacion from "@/components/sections/Validacion";
import ImpactoSection from "@/components/sections/ImpactoSection";
import ImpactoBanner from "@/components/ImpactoBanner";
import Allies from "@/components/sections/Allies";
import Reconocimientos from "@/components/sections/Reconocimientos";
import LinkedInBanner from "@/components/LinkedInBanner";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Biolily",
  "alternateName": "Fito-colmenas by Biolily",
  "url": "https://www.biolily.com.mx",
  "logo": "https://www.biolily.com.mx/logo-horizontal-biolily.svg",
  "foundingDate": "2020",
  "description": "Empresa mexicana de tecnología ambiental especializada en restauración hídrica mediante Fito-colmenas®, sistema flotante patentado que utiliza lirio acuático de forma controlada para remover nitrógeno y fósforo de cuerpos de agua eutróficos. Con sede en Valle de Bravo, México.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Valle de Bravo",
    "addressRegion": "Estado de México",
    "addressCountry": "MX"
  },
  "email": "ad.biolily@gmail.com",
  "sameAs": ["https://www.linkedin.com/company/fito-colmenas-by-biolily"],
  "founder": [
    { "@type": "Person", "name": "Eduardo Caballero Murillo", "url": "https://www.linkedin.com/in/eduardo-caballero-murillo/" },
    { "@type": "Person", "name": "Jorge Ramírez Zierold", "url": "https://www.linkedin.com/in/jorge-ram%C3%ADrez-zierold-50582142/" },
    { "@type": "Person", "name": "Carolina Flores Q." }
  ],
  "areaServed": "MX",
  "knowsAbout": ["restauración hídrica", "eutrofización", "lirio acuático", "soluciones basadas en la naturaleza", "water stewardship", "fitorremediación", "beneficios volumétricos"]
};

export default function Home() {
  return (
    <>
      <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Hero />

      <div>
        <QuienesSomos />
        <Vision />
        <Modelo />
      </div>

      <Tecnologia />

      <div id="monitoreo">
        <Medicion />
        <Metodologia />
      </div>

      <Validacion />

      <ImpactoSection />

      <ImpactoBanner />

      <Allies />

      <Reconocimientos />

      <LinkedInBanner />
    </>
  );
}
