import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        'l_popular_categories': 'Mashhur kategoriyalar',
        'l_all': 'Hammasi',
        'l_lang': 'Til',
        'l_categories': 'Kategoriyalar',
        'l_services': 'Servislar',
        'l_footer_description': 'Keng tanlov va past narxlar reklama sohasi uchun! Bannerlar, akril, LED diodlar, bo‘yoqlar va tashqi reklama uchun barcha mahsulotlar — qulay onlayn do‘konda, tez yetkazib berish bilan.',
        'l_connection': 'Bog\'lanish',
        'l_all_rights_reserved': 'Barcha huquqlar himoyalangan.',
        'l_messages': {
          'l_services_not_found_by_this_category': 'Ushbu kategoriya bo\'yicha servislar mavjud emas',
          'l_no_video': 'Video mavjud emas',
          'l_no_image': 'Rasm mavjud emas',
        },
      },
    },
    ru: {
      translation: {
        'l_popular_categories': 'Популярные категории',
        'l_all': 'Все',
        'l_lang': 'Язык',
        'l_categories': 'Категории',
        'l_services': 'Услуги',
        'l_footer_description': 'Широкий выбор и низкие цены для рекламной индустрии! Баннеры, акрил, светодиоды, краски и все товары для наружной рекламы — в удобном интернет-магазине, с быстрой доставкой.',
        'l_connection': 'Связь',
        'l_all_rights_reserved': 'Все права защищены.',
        'l_messages': {
          'l_services_not_found_by_this_category': 'В этой категории нет услуг.',
          'l_no_video': 'Видео недоступно.',
          'l_no_image': 'Изображение недоступно.',
        },
      },
    },
    uk: {
      translation: {
        'l_popular_categories': 'Машҳур категориялар',
        'l_all': 'Ҳаммаси',
        'l_lang': 'Тил',
        'l_categories': 'Категориялар',
        'l_services': 'Сервислар',
        'l_footer_description': 'Кенг танлов ва паст нархлар реклама соҳаси учун! Баннерлар, акрил, ЛЕД диодлар, бўёқлар ва ташқи реклама учун барча маҳсулотлар — қулай онлайн дўконда, тез етказиб бериш билан.',
        'l_connection': 'Боғланиш',
        'l_all_rights_reserved': 'Барча ҳуқуқлар ҳимояланган.',
        'l_messages': {
          'l_services_not_found_by_this_category': 'Ушбу категория бўйича сервислар мавжуд эмасъ',
          'l_no_video': 'Видео мавжуд эмас. ',
          'l_no_image': 'Расм мавжуд эмас.',
        },
      },
    },
  },
  lng: localStorage.getItem('lang') || 'uz',
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;