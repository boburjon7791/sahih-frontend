import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';
import Footer from '../components/Footer';

const ServiceDetailPage = () => {
    const { serviceId } = useParams();

    return (
        <div className='service-detail-container'>
            <h2 className='service-title'>Servis nomi</h2>

            <div className='media-wrapper'>
                <img
                    src='/images/detail.png'
                    alt='Detail'
                    className='media-image'
                />
                <video
                    src='/videos/sample.mp4'
                    controls
                    className='media-video'
                />
            </div>

            <p className='service-description'>
                Bu yerda servisning to‘liq va batafsil tavsifi yoziladi. Tavsif uzun bo‘lishi mumkin. Har bir servisga xos rasm va video yuqorida joylashgan.
            </p>
            <Footer/>
        </div>
    );
};

export default ServiceDetailPage;
