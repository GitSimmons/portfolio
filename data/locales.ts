export enum Locale {
  en = 'en',
  fr = 'fr',
}

export const defaultLocale = Locale.en;
export const locales: Locale[] = [Locale.en, Locale.fr];
export const isLocale = (tested: string): tested is Locale =>
  locales.some((locale) => locale === tested);

export const getInitialLocale = (): Locale => {
  // get the language setting of the browser
  const [browserSetting] = navigator.language.split('-');
  if (isLocale(browserSetting)) {
    return browserSetting;
  }
  return defaultLocale;
};
