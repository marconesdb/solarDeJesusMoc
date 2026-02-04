import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/translation.json';
import es from '../locales/es/translation.json';
import fr from '../locales/fr/translation.json';
import pt from '../locales/pt/translation.json';

// Inicializando o i18next
i18n
  .use(initReactI18next) // Passando o i18next para o React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      pt: { translation: pt },
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz isso
    },
    react: {
      useSuspense: false // evita problemas com SSR
    }
  });

export default i18n;
