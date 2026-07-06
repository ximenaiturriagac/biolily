import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { notas } from "@/lib/notas";
import NotaPage from "@/components/notas/NotaPage";

export function generateStaticParams() {
  return notas.map((nota) => ({ slug: nota.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const nota = notas.find((n) => n.slug === slug);
  if (!nota) return {};
  return {
    title: `${nota.title} — Biolily`,
    description: nota.excerpt,
    openGraph: {
      title: `${nota.title} — Biolily`,
      description: nota.excerpt,
      type: "article",
      url: `https://www.biolily.com.mx/notas/${nota.slug}`,
    },
    alternates: { canonical: `https://www.biolily.com.mx/notas/${nota.slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const nota = notas.find((n) => n.slug === slug);
  if (!nota) notFound();
  return (
    <div className="pt-20">
      <NotaPage nota={nota} />
    </div>
  );
}
