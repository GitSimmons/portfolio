import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { defaultLocale, isLocale, Locale } from '../data/locales';

export const useLocale: () => { locale: Locale } = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const { lang } = useRouter().query;

  useEffect(() => {
    if (typeof lang === 'string' && isLocale(lang) && locale !== lang) {
      setLocale(lang);
    }
  }, [lang, locale]);
  return { locale };
};

export default useLocale;
