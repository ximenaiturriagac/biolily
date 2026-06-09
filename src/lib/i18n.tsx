"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Lang = "es" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "es", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("biolily-lang") as Lang | null;
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("biolily-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
