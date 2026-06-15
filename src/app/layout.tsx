import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import HtmlLang from "@/components/HtmlLang";

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
    locale: "es_MX",
    alternateLocale: ["en_US"],
  },
  alternates: {
    canonical: "https://biolily.com.mx",
    languages: {
      "es": "https://biolily.com.mx",
      "en": "https://biolily.com.mx",
      "x-default": "https://biolily.com.mx",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4D56XNTLQN" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4D56XNTLQN');
        `}</Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          <HtmlLang />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
