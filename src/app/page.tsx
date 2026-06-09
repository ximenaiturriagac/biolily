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
import Reconocimientos from "@/components/sections/Reconocimientos";
import LinkedInBanner from "@/components/LinkedInBanner";

export default function Home() {
  return (
    <>
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

      <Allies />

      <Reconocimientos />

      <LinkedInBanner />
    </>
  );
}
