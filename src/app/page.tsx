import Hero from "@/components/sections/Hero";
import QuienesSomos from "@/components/sections/QuienesSomos";
import Vision from "@/components/sections/Vision";
import Modelo from "@/components/sections/Modelo";
import Tecnologia from "@/components/sections/Tecnologia";
import Medicion from "@/components/sections/Medicion";
import Metodologia from "@/components/sections/Metodologia";
import Validacion from "@/components/sections/Validacion";
import ImpactoSection from "@/components/sections/ImpactoSection";
import Allies from "@/components/sections/Allies";
import Team from "@/components/sections/Team";
import Reconocimientos from "@/components/sections/Reconocimientos";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* #inicio */}
      <Hero />

      {/* #biolily */}
      <div id="biolily">
        <QuienesSomos />
        <Vision />
        <Modelo />
      </div>

      {/* #tecnologias — only the first part (Fito-colmenas intro) */}
      <div id="tecnologias">
        <Tecnologia />
      </div>

      {/* #monitoreo */}
      <div id="monitoreo">
        <Medicion />
        <Metodologia />
      </div>

      {/* #validacion */}
      <Validacion />

      {/* #impacto */}
      <ImpactoSection />

      {/* #unete */}
      <div id="unete">
        <Allies />
        <Team />
      </div>

      {/* #reconocimientos */}
      <Reconocimientos />

      {/* #contacto */}
      <Contact />
    </>
  );
}
