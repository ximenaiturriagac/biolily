import Tecnologia from "@/components/sections/Tecnologia";
import Funcionamiento from "@/components/sections/Funcionamiento";
import Eficiencia from "@/components/sections/Eficiencia";

export default function TecnologiasPage() {
  return (
    <div className="pt-20">
      <Tecnologia />
      <Funcionamiento />
      <Eficiencia />
    </div>
  );
}
