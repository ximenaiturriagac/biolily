"use client";
import { ExternalLink, FileText, Link2, Newspaper, Headphones, Play, Tv, Radio } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const mediaItems = [
  {
    icon: Newspaper,
    source: "TecScience",
    title: "El EXATEC que usa el lirio acuático para limpiar la presa de Valle de Bravo",
    desc: "Nota sobre Eduardo Caballero y el desarrollo de un sistema flotante para limpiar ríos y lagos contaminados.",
    url: "https://tecscience.tec.mx/es/biotecnologia/lirio-acuatico-contra-contaminantes/",
    tag: "Nota periodística",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Headphones,
    source: "Podcast",
    title: "Fito-colmenas: limpieza del agua con soluciones basadas en la naturaleza",
    desc: "Dos científicos expertos en materia hídrica exploran el proceso de limpieza con Fito-colmenas, la eutrofización, y las ventajas frente a soluciones tradicionales de tratamiento de agua.",
    url: "https://open.spotify.com/episode/0T89v3gTOAFELlE069Lo4Y",
    tag: "Podcast",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Tv,
    source: "Televisa / Foro TV",
    title: "Expertos revelan solución natural para limpiar contaminación en el Cutzamala",
    desc: "Especialistas presentan en Hora 21 la tecnología de Fito-colmenas como solución natural para la limpieza de cuerpos de agua contaminados.",
    url: "https://www.nmas.com.mx/foro-tv/programas/hora-21/videos/expertos-revelan-solucion-natural-para-limpiar-contaminacion-cutzamala/",
    tag: "Televisión",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: Tv,
    source: "TV Azteca",
    title: "Vivir sin agua en Valle de Bravo: crisis hídrica y soluciones",
    desc: "Cobertura sobre la grave crisis de agua en Valle de Bravo, Estado de México, y las alternativas tecnológicas para enfrentarla.",
    url: "https://www.facebook.com/AztecaNoticias/videos/vivirsinagua-en-valle-de-bravo-edomex-enfrentamos-una-grave-crisis-de-agua-la-po/1031448298536735/",
    tag: "Televisión",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: Play,
    source: "YouTube",
    title: "Fito-colmenas en acción — Valle de Bravo",
    desc: "Video documental sobre la implementación de Fito-colmenas y su impacto en la restauración hídrica de la presa de Valle de Bravo.",
    url: "https://youtu.be/NilM8_ECKdg",
    tag: "Video",
    color: "from-red-600 to-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: Newspaper,
    source: "Milenio",
    title: "Presa Valle de Bravo: nivel repleta de aguas negras",
    desc: "Reportaje sobre la situación crítica de la presa de Valle de Bravo y las estrategias para su recuperación ambiental.",
    url: "https://www.milenio.com/politica/comunidad/presa-valle-bravo-nivel-repleta-aguas-negras",
    tag: "Nota periodística",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: Radio,
    source: "Milenio · TikTok",
    title: "Fito-colmenas: tecnología contra la contaminación del agua",
    desc: "Milenio difunde en TikTok la tecnología de Fito-colmenas como alternativa innovadora para el manejo del lirio acuático.",
    url: "https://vm.tiktok.com/ZMMJqQLCQ/",
    tag: "Redes sociales",
    color: "from-gray-800 to-gray-900",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
  {
    icon: Newspaper,
    source: "La Jornada Estado de México",
    title: "Valle de Bravo: van por saneamiento de presa con lirio acuático",
    desc: "Reportaje sobre el proyecto de saneamiento de la presa de Valle de Bravo utilizando lirio acuático como herramienta de restauración.",
    url: "https://lajornadaestadodemexico.com/valle-de-bravo-van-por-saneamiento-de-presa-con-lirio-acuatico/",
    tag: "Nota periodística",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Newspaper,
    source: "Notipress",
    title: "Lirio acuático: posible respuesta para limpiar la presa de Valle de Bravo",
    desc: "Nota sobre cómo el lirio acuático, aprovechado mediante tecnología Fito-colmenas, puede ser la solución para restaurar la presa de Valle de Bravo.",
    url: "https://notipress.mx/estado-de-mexico/lirio-acuatico-posible-respuesta-limpiar-presa-valle-de-bravo-20604",
    tag: "Nota periodística",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Link2,
    source: "Instagram",
    title: "Fito-colmenas · Publicación en Instagram",
    desc: "Publicación sobre la tecnología de Fito-colmenas y su impacto en la restauración hídrica de cuerpos de agua.",
    url: "https://www.instagram.com/p/DPB4uL2AR7e/",
    tag: "Redes sociales",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    icon: Play,
    source: "Instagram · Reel",
    title: "Fito-colmenas en acción · Reel",
    desc: "Reel mostrando la tecnología de Fito-colmenas y su aplicación en cuerpos de agua eutróficos.",
    url: "https://www.instagram.com/reel/DTgWNPGkQdi/?igsh=aTBsNzZyZGczYXg0",
    tag: "Redes sociales",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    icon: Play,
    source: "Instagram · Reel (Milenio)",
    title: "Milenio · Cobertura de Fito-colmenas",
    desc: "Reel de Milenio sobre la implementación de Fito-colmenas en la presa de Valle de Bravo.",
    url: "https://www.instagram.com/reel/C3l_vtqtrjB/?igsh=MXcyeHhwZGRsdWY0bw==",
    tag: "Redes sociales",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    icon: Link2,
    source: "LinkedIn oficial",
    title: "Fito-colmenas by Biolily",
    desc: "Publicaciones oficiales sobre Biolily, las Fito-colmenas, tecnología ambiental y soluciones basadas en la naturaleza.",
    url: "https://es.linkedin.com/posts/fito-colmenas-by-biolily-innovations_biolilyinnovations-fitocolmenas-innovaci%C3%B3nambiental-activity-7299983063822839809-qDG2",
    tag: "Redes sociales",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: Link2,
    source: "LinkedIn",
    title: "Fito-colmenas: tecnología en acción",
    desc: "Publicación sobre el funcionamiento, beneficios ambientales y potencial de las Fito-colmenas.",
    url: "https://es.linkedin.com/posts/fito-colmenas-by-biolily-innovations_tecnolog%C3%ADaambiental-beneficiosambientales-activity-7300207576590286849-ASB-",
    tag: "Redes sociales",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    icon: FileText,
    source: "ANEAS · Agua y Saneamiento No. 95",
    title: "Fito-colmenas mencionadas en revista especializada — pág. 57",
    desc: "La revista de la Asociación Nacional de Empresas de Agua y Saneamiento documenta las Fito-colmenas como solución innovadora para el manejo del lirio acuático.",
    url: "https://www.aneas.com.mx/wp-content/uploads/2024/08/AyS-95.pdf",
    tag: "Revista especializada",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    icon: FileText,
    source: "Scribd / Informe técnico 2023",
    title: "Informe de implementación de las Fito-colmenas para el manejo integral del lirio acuático",
    desc: "Documento técnico sobre la implementación de Fito-colmenas en Valle de Bravo.",
    url: "https://www.scribd.com/document/675128324/Informe-IMPLEMENTACIO-N-DE-LAS-FITO-COLMENAS-PARA-EL-MANEJO-INTEGRAL-DEL-LIRIO-ACUA-TICO-Julio2023-2",
    tag: "Informe técnico",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: FileText,
    source: "Observatorio Valle de Bravo · UNAM",
    title: "Monitoreo hídrico permanente para la recuperación sustentable de Valle de Bravo",
    desc: "Documento técnico que menciona colmenas de fitorremediación con lirio acuático como estrategia de largo plazo.",
    url: "https://observatoriovalle.org.mx/wp-content/uploads/2024/06/ProValle-de-Bravo-UNAM_Monitoreo-del-Lago_mayo2022.pdf",
    tag: "Documento científico",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
];

export default function Media() {
  const { lang } = useLang();
  const t = translations[lang].media;

  return (
    <section id="medios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3 block">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.heading1} <span className="text-green-700">{t.heading2}</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mediaItems.map(({ icon: Icon, source, title, desc, url, tag, color, bg, border }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-2xl p-6 ${bg} border ${border} hover:shadow-lg transition-all flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon size={18} className="text-white" />
                </div>
                <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors mt-1" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{source}</span>
              <h4 className="font-semibold text-gray-800 text-sm mb-2 leading-snug flex-1">{title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{desc}</p>
              <span className="inline-block px-2.5 py-1 rounded-full bg-white/70 text-xs text-gray-600 font-medium border border-gray-200 self-start">
                {tag}
              </span>
            </a>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0d2235] to-[#1a3a2a] p-10 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#0A66C2"/>
              <path d="M7.5 9.5H5V18H7.5V9.5Z" fill="white"/>
              <circle cx="6.25" cy="6.75" r="1.5" fill="white"/>
              <path d="M13 12.5C13 11.4 13.9 10.5 15 10.5C16.1 10.5 17 11.4 17 12.5V18H19.5V12.5C19.5 10 17.5 8 15 8C13.8 8 12.7 8.5 12 9.3V9.5H9.5V18H12V12.5H13Z" fill="white"/>
            </svg>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-300">LinkedIn</span>
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">{t.siguenos}</h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">{t.siguenosDesc}</p>
          <a
            href="https://www.linkedin.com/company/fito-colmenas-by-biolily/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#0856A0] text-white font-semibold rounded-full transition-all shadow-lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 9.5H5V18H7.5V9.5ZM6.25 8.25C5.56 8.25 5 7.69 5 7C5 6.31 5.56 5.75 6.25 5.75C6.94 5.75 7.5 6.31 7.5 7C7.5 7.69 6.94 8.25 6.25 8.25ZM19 18H16.5V13.5C16.5 12.4 15.6 11.5 14.5 11.5C13.4 11.5 12.5 12.4 12.5 13.5V18H10V9.5H12.5V10.8C13.2 9.9 14.3 9.3 15.5 9.3C17.4 9.3 19 10.9 19 12.8V18Z"/>
            </svg>
            Biolily
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
