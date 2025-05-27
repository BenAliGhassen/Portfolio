import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr', // 👈 Default if language can't be detected or isn't supported

    debug: true,

    interpolation: {
      escapeValue: false
    },

    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'] // optional: remembers last chosen language
    }
  });

export default i18n;
