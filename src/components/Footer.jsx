// components/Footer.jsx
import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-logo">
                <img src="/images/logo2.png" alt="Logo"/>
            </div>
            <p>
                Keng tanlov va past narxlar reklama sohasi uchun! Bannerlar, akril, LED diodlar,
                bo‘yoqlar va tashqi reklama uchun barcha mahsulotlar — qulay onlayn do‘konda, tez yetkazib berish
                bilan.
            </p>
            <h4>Bog‘lanish:</h4>
            <div className="footer-contacts">
                <a href="mailto:reklamarkaz@gmail.com">📧 reklamarkaz@gmail.com</a>
                <p>📞 +998885730777, +998974360777</p>
            </div>
            <p className="footer-copy">
                © 2025. Barcha huquqlar himoyalangan. <br/>
                <span>Made ❤️ by <a href="https://www.linkedin.com/in/boburjon-soliyev-3b2ab01b2/" target="_blank"
                                    rel="noopener noreferrer">Soliyev Boburjon</a></span>
            </p>
        </footer>
    );
};

export default Footer;
