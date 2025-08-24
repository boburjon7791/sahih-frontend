import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css'; // faqat til selector css

const LanguageSelector = () => {
    const {t, i18n } = useTranslation();

    // Tilni localStorage dan olish yoki default
    const checkLang = (lang) => {
        const allowed = ['uz', 'uk', 'ru'];
        const finalLang = allowed.includes(lang) ? lang : 'uz';
        localStorage.setItem('lang', finalLang);
        return finalLang;
    };

    const [lang, setLang] = useState(checkLang(localStorage.getItem('lang')));

    // Til o'zgartirish funksiyasi
    const handleChangeLanguage = (e) => {
        const newLang = e.target.value;
        setLang(newLang);                       // state yangilanadi
        localStorage.setItem('lang', newLang);  // localStorage yangilanadi
        i18n.changeLanguage(newLang);           // i18next tilini ham o'zgartirish

        // 🔥 Til o‘zgarganida sahifani qayta yuklash
        window.location.reload();
    };

    return (
        <div className="language-selector">
            <label htmlFor="language">{t('l_lang')}:</label>
            <select id="language" value={lang} onChange={handleChangeLanguage}>
                <option value="uz">O'zbekcha</option>
                <option value="uk">Ўзбекча</option>
                <option value="ru">Русский</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
