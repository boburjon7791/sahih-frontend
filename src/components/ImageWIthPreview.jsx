import React, { useState, useEffect } from "react";
import "./ImageWithPreview.css";

const ImageWithPreview = ({ src, alt, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openPreview = () => setIsOpen(true);
    const closePreview = () => setIsOpen(false);

    /*// scrollni boshqarish
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => document.body.classList.remove("no-scroll");
    }, [isOpen]);*/

    return (
        <>
            {/* Thumbnail */}
            <img
                src={src}
                alt={alt}
                className={className}
                onClick={openPreview}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/no-image.png";
                }}
            />

            {/* Preview */}
            {/*{isOpen && (
                <div className="preview-box">
          <span className="close-btn" onClick={closePreview}>
            &times;
          </span>
                    <img
                        src={src}
                        alt={alt}
                        className="preview-img"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/no-image.png";
                        }}
                    />
                </div>
            )}*/}
        </>
    );
};

export default ImageWithPreview;
