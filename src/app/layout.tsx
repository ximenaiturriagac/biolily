import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Biolily | Tecnología ambiental para restauración hídrica",
  description:
    "Biolily desarrolla Fito-colmenas, una tecnología de biorremediación flotante para restaurar cuerpos de agua afectados por eutrofización.",
  keywords:
    "Biolily, Fito-colmenas, restauración hídrica, biorremediación, eutrofización, tecnología ambiental, Valle de Bravo, lirio acuático",
  openGraph: {
    title: "Biolily | Tecnología ambiental para restauración hídrica",
    description:
      "Soluciones basadas en la naturaleza para restaurar cuerpos de agua afectados por eutrofización.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
