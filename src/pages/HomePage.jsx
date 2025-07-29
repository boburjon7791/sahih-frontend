import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./Home.css"
import Footer from '../components/Footer';

const categories = [
    { id: 1, name: 'Bannerlar', image: '/images/banner.png' },
    { id: 2, name: 'Led diodlar', image: '/images/led.png' },
    // Yana qo‘shilsa ham qo‘llab-quvvatlaydi
];

const HomePage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <div class="home-logo">
                <img
                    src="/images/logo2.png"
                    alt="Logo"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/no-image.png';
                    }}
                />
            </div>
            <h1 className="home-title">{t('Categories')}</h1>
            <div className="category-grid">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="category-card"
                        onClick={() => navigate(`/category/${cat.id}`)}
                    >
                        <img src={cat.image} alt={cat.name} className="category-image"
                             onError={(e) => {
                                 e.target.onerror = null; // infinite loop ni oldini olish
                                 e.target.src = '/images/no-image.png';
                             }}
                        />
                        <p className="category-name">{cat.name}</p>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;
