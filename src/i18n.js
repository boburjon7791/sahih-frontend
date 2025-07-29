import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        'Popular Categories': 'Mashhur kategoriyalar',
        'All': 'Hammasi',
        'Categories': 'Kategoriyalar',
      },
    },
  },
  lng: 'uz',
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;