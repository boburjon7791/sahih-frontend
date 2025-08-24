import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./HomePage.css";
import Footer from '../components/Footer';
import api from '../utils/constants.js';
import ImageWithLoader from '../components/ImageWithLoader';
import LanguageSelector from '../components/LanguageSelector';
import HomeButton from "../components/HomeButton";

const HomePage = () => {
    const navigate = useNavigate();
    const { t,i18n } = useTranslation();

    const [categories, setCategories] = useState([]);

    const filters = new URLSearchParams({
        page : 0,
        limit : 10
    });

    useEffect(() => {
        fetch(`${api.urls.CATEGORIES}?${filters.toString()}`,
            {
                method: 'GET',
                headers: {
                    'Accept-Language': localStorage.getItem('lang') || 'uz',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => setCategories(data.rows))
            .catch(err => {
                console.error("API error:", err);
                setCategories([]);
            });
    }, []);

    return (
        <div className="home-container">

            <LanguageSelector/>
            <HomeButton/>

            <h1 className="home-title">{t('l_categories')}</h1>
            {
                categories.length === 0 ? (
                    <p className="no-categories-message">
                        Kategoriyalar mavjud emas
                    </p>
                ) : ''
            }
            <div className="category-grid">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="category-card"
                        onClick={() => navigate(`/category/${cat.id}`)}
                    >
                        {/* Faqat bitta rasm ko'rsatish uchun */}
                        <div className="category-image-container">
                            <img
                                src={cat.image_resources.length > 0 ? `${api.urls.RESOURCES}/${cat.image_resources[0].token}` : '/images/no-image.png'}
                                alt={cat.name || "No name"}
                                className="category-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/images/no-image.png';
                                }}
                            />
                        </div>
                        <p className="category-name">{cat.name ? cat.name : '-'}</p>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;