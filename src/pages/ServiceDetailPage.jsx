import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';
import Footer from '../components/Footer';
import api from "../utils/constants";
import ImageWithLoader from "../components/ImageWithLoader";
import VideoWithLoader from "../components/VideoWithLoader";
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import HomeButton from "../components/HomeButton";
import axios from '../utils/api.js';
import ImageWithPreview from "../components/ImageWIthPreview";

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { t,i18n } = useTranslation();

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const filters = {
        page: 0,
        limit: 10,
        id: serviceId
    };

    useEffect(() => {

        axios.get(api.urls.SERVICES, { params: filters })
            .then(response =>{
                const res = response;
                if (res.data.rows.length === 0){
                    console.log(res.data + ' data not found');
                    return;
                }
                setService(res.data.rows[0]);
            })
            .catch(reason => {
                console.log(reason);
                setService({});
            });

    }, [serviceId]); // ✅ dependency qo‘shildi

    return (
        <div className='service-detail-container'>

            <LanguageSelector/>
            <HomeButton/>

            <h2 className='service-title'>{service.name ? service.name : '-' || "Loading..."}</h2>

            <div className='media-wrapper'>
                {/* Rasmlar */}
                {service?.image_resources?.length > 0 ? (
                    service.image_resources.map(img => (
                        <img
                            src={api.urls.RESOURCES+'/'+img.token}
                        alt={service.name}
                        className='media-image'
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/no-image.png";
                        }}
                    />
                    ))
                ) : (
                    <p class="no-service-image">{t('l_messages.l_no_image')}</p>
                )}

                {/* Videolar */}
                {service?.video_resources?.length > 0 ? (
                    service.video_resources.map(video => (
                        <video
                            key={video.id}
                            src={`${api.urls.RESOURCES}/${video.token}`}
                            controls
                            className='media-video'
                        />
                    ))
                ) : (
                    <p class="no-service-video">{t('l_messages.l_no_video')}</p>
                )}
            </div>

            <p className='service-description'>
                {service.description ? service.description : '-'}
            </p>

            <Footer/>
        </div>
    );
};

export default ServiceDetailPage;
