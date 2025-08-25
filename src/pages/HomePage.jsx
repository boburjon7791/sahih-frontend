import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./HomePage.css";
import Footer from '../components/Footer';
import api from '../utils/constants.js';
import ImageWithLoader from '../components/ImageWithLoader';
import LanguageSelector from '../components/LanguageSelector';
import HomeButton from "../components/HomeButton";
import Pagination from "../components/Pagination";
import axios from '../utils/api.js'

const HomePage = () => {
    const navigate = useNavigate();
    const { t,i18n } = useTranslation();

    const [categories, setCategories] = useState([]);

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const filters = {
        page : currentPage - 1,
        limit : 4
    };

    useEffect(() => {
        axios.get(api.urls.CATEGORIES, { params: filters })
            .then((response) => {
                setCategories(response.data.rows);
                setTotalItems(response.data.size); // backend total sonni qaytaradi
            })
            .catch(err => {
                console.error("API error:", err);
                setCategories([]);
                setTotalItems(0);
            });
    }, [currentPage]);

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
            <Pagination
                currentPage={currentPage}
                itemsPerPage={filters.limit}
                totalItems={totalItems}
                onPageChange={page => setCurrentPage(page)} />
            <Footer/>
        </div>
    );
};

export default HomePage;