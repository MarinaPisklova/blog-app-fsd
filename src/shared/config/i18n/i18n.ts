import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: __IS_DEV__,
    ns: ['main', 'translation', 'about', 'profile'],
    defaultNS: 'translation',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    saveMissing: true,
    backend: {
      // Указываете пути к файлам для каждого пространства имен
      loadPath: (lngs: string[], namespaces: string[]) =>
        `/locales/${lngs}/${namespaces}.json`,
      addPath: (lng: string, namespace: string) =>
        `/locales/${lng}/${namespace}.missing.json`,
    },
  });

export default i18n;
