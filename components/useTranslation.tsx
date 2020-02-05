import { useLocale } from './useLocale';
import { defaultLocale } from '../data/locales';
import text from '../data/text';

// Returns a function that grabs translation text from data/text by key based on current locale.
// Usage looks like ${t('about')}, and returns a text string in locale

export const useTranslation = (): {
  t: (textTitle: string) => string,
  locale: string
} => {
  const { locale } = useLocale();
  const t = (textTitle: string): string => {
    return text[textTitle][locale] || text[textTitle][defaultLocale] || '';
  };
  return { t, locale };
};

export default useTranslation;
