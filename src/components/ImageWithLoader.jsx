import React, { useState } from "react";
import "./MediaLoader.css";

const ImageWithLoader = ({ src, alt, className }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative flex justify-center items-center">
            {loading && (
                <div className="overlay">
                    <div className="spinner"></div>
                </div>
            )}
            <img
                src={src}
                alt={alt || "image"}
                className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                onLoad={() => setLoading(false)}
                onError={onerror}
            />
        </div>
    );
};

export default ImageWithLoader;
