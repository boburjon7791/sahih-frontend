import React, { useState } from "react";

const VideoWithLoader = ({ src, className, controls = true }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative flex justify-center items-center">
            {loading && (
                <div className="absolute">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}
            <video
                src={src}
                className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                controls={controls}
                onCanPlay={() => setLoading(false)}
                onError={() => setLoading(false)}
            />
        </div>
    );
};

export default VideoWithLoader;
