import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Biolily | Restauración hídrica y soluciones basadas en la naturaleza",
  description:
    "Biolily diseña, implementa y monitorea proyectos de restauración hídrica mediante Fito-colmenas®, una tecnología patentada que genera beneficios ambientales y volumétricos medibles.",
  keywords:
    "Biolily, Fito-colmenas, restauración hídrica, water stewardship, beneficios volumétricos, soluciones basadas en la naturaleza, eutrofización, lirio acuático, calidad del agua, BlueRisk, Valle de Bravo",
  openGraph: {
    title: "Biolily | Restauración hídrica y soluciones basadas en la naturaleza",
    description:
      "Biolily diseña, implementa y monitorea proyectos de restauración hídrica mediante Fito-colmenas®, una tecnología patentada que genera beneficios ambientales y volumétricos medibles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
