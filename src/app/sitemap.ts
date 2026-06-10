import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://biolily.com.mx";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tecnologias`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/impacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/equipo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/notas`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
