import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Services.css'; // ← bu faylga yuqoridagi CSS yoziladi
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import api from '../utils/constants.js';
import ImageWithLoader from "../components/ImageWithLoader";
import LanguageSelector from '../components/LanguageSelector';
import HomeButton from "../components/HomeButton";

const ServicesPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const { t,i18n } = useTranslation();

    useEffect(() => {
        const filters = new URLSearchParams({
            page : 0,
            limit : 10,
            categories_id : categoryId
        })
        fetch(`${api.urls.SERVICES}?${filters.toString()}`,
            {
                method: 'GET',
                headers: {
                    'Accept-Language': localStorage.getItem('lang') || 'uz',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => setServices(data.rows))
            .catch(err => {
                console.error("API error:", err);
                setServices([]);
            });
    }, []);

    return (
        <div className="services-wrapper">

            <LanguageSelector/>
            <HomeButton/>

            <h2 className="services-title text-center">{t('l_services')}</h2>
            {
                services.length === 0 ? (
                    <p className="no-services-message">
                        {t('l_messages.l_services_not_found_by_this_category')}
                    </p>
                ) : ''
            }
            <ul className="service-list">
                {services.map((s) => (
                    <li
                        key={s.id}
                        className="service-item"
                        onClick={() => navigate(`/service/${s.id}`)}
                    >
                        <div className="service-image-wrapper">
                            <img
                                src={s.image_resources.length>0 ? `${api.urls.RESOURCES}/${s.image_resources[0].token}` : '/images/no-image.png'}
                                alt={s.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/images/no-image.png';
                                }}
                            />
                        </div>
                        <p className="service-name">{s.name ? s.name : '-'}</p>
                    </li>
                ))}
            </ul>
            <Footer/>
        </div>
    );
};

export default ServicesPage;
