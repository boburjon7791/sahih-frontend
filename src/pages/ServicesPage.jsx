import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Services.css'; // ← bu faylga yuqoridagi CSS yoziladi
import Footer from '../components/Footer';

const services = [
    { id: 1, name: 'Plotter qirqish', image: '/images/banner.png' },
    { id: 2, name: 'UV bosma', image: '/images/led.png' },
];

const ServicesPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    return (
        <div className="services-wrapper">
            <h2 className="services-title text-center">Servislar</h2>
            <ul className="service-list">
                {services.map((s) => (
                    <li
                        key={s.id}
                        className="service-item"
                        onClick={() => navigate(`/service/${s.id}`)}
                    >
                        <div className="service-image-wrapper">
                            <img src={s.image} alt={s.name} />
                        </div>
                        <p className="service-name">{s.name}</p>
                    </li>
                ))}
            </ul>
            <Footer/>
        </div>
    );
};

export default ServicesPage;
