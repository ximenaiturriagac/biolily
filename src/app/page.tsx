import Hero from "@/components/sections/Hero";
import QuienesSomos from "@/components/sections/QuienesSomos";
import Vision from "@/components/sections/Vision";
import Modelo from "@/components/sections/Modelo";
import Tecnologia from "@/components/sections/Tecnologia";
import Funcionamiento from "@/components/sections/Funcionamiento";
import Eficiencia from "@/components/sections/Eficiencia";
import Medicion from "@/components/sections/Medicion";
import Metodologia from "@/components/sections/Metodologia";
import Validacion from "@/components/sections/Validacion";
import ImpactoSection from "@/components/sections/ImpactoSection";
import Allies from "@/components/sections/Allies";
import Team from "@/components/sections/Team";
import Reconocimientos from "@/components/sections/Reconocimientos";
import Media from "@/components/sections/Media";
import Contact from "@/components/sections/Contact";
import Privacidad from "@/components/sections/Privacidad";

export default function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <Vision />
      <Modelo />
      <Tecnologia />
      <Funcionamiento />
      <Eficiencia />
      <Medicion />
      <Metodologia />
      <Validacion />
      <ImpactoSection />
      <Allies />
      <Team />
      <Reconocimientos />
      {/* Anchor bridge for #notas navbar link — Media.tsx uses id="medios" and cannot be modified */}
      <div id="notas" />
      <Media />
      <Contact />
      <Privacidad />
    </>
  );
}
