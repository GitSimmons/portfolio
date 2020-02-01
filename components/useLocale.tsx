import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { defaultLocale, isLocale, Locale } from "../data/locales";

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const lang = useRouter().query.lang;

  useEffect(() => {
    if (typeof lang === "string" && isLocale(lang) && locale !== lang) {
      setLocale(lang);
    }
  }, [lang, locale]);
  return { locale };
};
