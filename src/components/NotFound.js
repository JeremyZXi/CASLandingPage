// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-black relative">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[url(https://www.keystoneacademy.cn/Public/Uploads/uploadfile/images/20240927/864A2527.png)] bg-cover bg-center opacity-20 z-0"
            ></div>
            <h1 className="text-8xl font-bold text-white mb-2 relative z-10">404</h1>
            <h1 className="text-6xl font-bold text-white mb-4 relative z-10">Page Not Found</h1>
            <p className="text-gray-300 mb-8 relative z-10">
                Oops! The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="bg-black bg-opacity-10 text-white border border-white py-2 px-4 rounded transition duration-300 relative z-10 hover:bg-opacity-40 hover:text-[#B1E3F3]" // Changed hover text color
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;