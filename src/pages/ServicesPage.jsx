import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Services.css'; // ← bu faylga yuqoridagi CSS yoziladi
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import api from '../utils/constants.js';
import ImageWithLoader from "../components/ImageWithLoader";
import LanguageSelector from '../components/LanguageSelector';
import HomeButton from "../components/HomeButton";
import axios from '../utils/api.js';
import Pagination from "../components/Pagination";

const ServicesPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const { t,i18n } = useTranslation();

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const filters = {
        page : currentPage - 1,
        limit : 10,
        categories_id : categoryId
    };

    useEffect(() => {
        axios.get(api.urls.SERVICES, { params: filters })
            .then((response) => {
                const res = response;
                setServices(res.data.rows);
                setTotalItems(res.data.size);
            })
            .catch(reason => {
                console.log(reason);
                setServices([]);
                setTotalItems(0);
            });
    }, [currentPage]);

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
            <Pagination
                currentPage={currentPage}
                itemsPerPage={filters.limit}
                totalItems={totalItems}
                onPageChange={page => setCurrentPage(page)} />
            <Footer/>
        </div>
    );
};

export default ServicesPage;
