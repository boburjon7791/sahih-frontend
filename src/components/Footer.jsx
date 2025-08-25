// components/Footer.jsx
// import React from 'react';
import React, {useEffect, useState} from 'react';
import "./Footer.css";
import { useTranslation } from 'react-i18next';
import api from '../utils/constants'

const Footer = () => {
    const { t,i18n } = useTranslation();
    const [contacts, setContacts] = useState({});

    useEffect(() => {
        const filters = new URLSearchParams({
            page: 0,
            limit: 10
        });

        fetch(`${api.urls.CONTACTS}?${filters.toString()}`,
            {
                method: 'GET',
                headers: {
                    'Accept-Language': localStorage.getItem('lang') || 'uz',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setContacts(data);
                } else {
                    setContacts({});
                }
            })
            .catch(err => {
                console.error("API error:", err);
                setContacts({});
            });
    }, []); // ✅ dependency qo‘shildi

    return (
        <footer className="site-footer">
            <div className="footer-logo">
                <img src="/images/logo2.png" alt="Logo"/>
            </div>
            <p className="footer-description">
                {t('l_footer_description')}
            </p>
            <h4>{t('l_connection')}:</h4>
            <div className="footer-contacts">
                <a href={`mailto:${contacts.email ? contacts.email : ''}`}>
                    📧 {contacts.email ? contacts.email : '-'}
                </a>

                <p>
                    📞 <a href={`tel:${contacts.first_phone ? contacts.first_phone : ''}`}>
                    {contacts.first_phone ? contacts.first_phone : '-'}
                </a>,{' '}
                    <a href={`tel:${contacts.second_phone ? contacts.second_phone : ''}`}>
                        {contacts.second_phone ? contacts.second_phone : '-'}
                    </a>
                </p>
            </div>
            <p className="footer-copy">
                © 2025. {t('l_all_rights_reserved')} <br/>
                <span>Made ❤️ by <a href={contacts.programmer_contact ? contacts.programmer_contact : '-'} target="_blank"
                                    rel="noopener noreferrer">Soliyev Boburjon</a></span>
            </p>
        </footer>
    );
};

export default Footer;
