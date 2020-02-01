import React from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

enum Locale {
  en = "en",
  fr = "fr"
}
const locales: Locale[] = [Locale.en, Locale.fr];
const isLocale = (tested: string): tested is Locale =>
  locales.some(locale => locale === tested);

export function getInitialLocale(): Locale {
  // the language setting of the browser
  const [browserSetting] = navigator.language.split("-");
  if (isLocale(browserSetting)) {
    return browserSetting;
  }
  return Locale.en;
}

const Index: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/[lang]", `/${getInitialLocale()}`);
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
