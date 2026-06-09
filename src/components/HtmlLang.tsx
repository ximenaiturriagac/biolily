"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/i18n";

export default function HtmlLang() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
