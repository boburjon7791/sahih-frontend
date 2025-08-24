import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeButton.css"

const HomeButton = ({ logoUrl, alt = "Home" }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/"); // bosh sahifaga qaytaradi
    };

    return (
        <img
            src="/images/logo2.png"
            alt="Home"
            class="logo"
            onClick={handleClick}
            style={{
                cursor: "pointer",
                height: "50px", // kerakli o'lchamni sozlashingiz mumkin
                width: "auto",
            }}
        />
    );
};

export default HomeButton;
