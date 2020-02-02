import { useLocale } from "./useLocale";
import text from "../data/text";

// Returns a function that grabs translation text from data/text by key based on current locale.
// Usage looks like ${t('about')}, and returns a text string in locale

export const useTranslation = () => {
  const { locale } = useLocale();
  const t = (textTitle: string) => {
    if (!text[textTitle]) {
      console.warn(`No text string is available under title ${textTitle}`);
    }
    if (!text[textTitle][locale]) {
      console.warn(`No translation is available in ${locale} for ${textTitle}`);
    }
    return text[textTitle][locale];
  };
  return { t, locale };
};

export default useTranslation;
