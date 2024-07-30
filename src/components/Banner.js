import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

const Banner = ({ title, showButton = false, button_text = "Get Started", button_link = "/editor" }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="relative h-1/2 md:h-1/2 overflow-hidden">
            <div >
                <Slider {...settings}>
                    <div>
                        <img src="assests/WechatIMG244.jpg" alt="Project 1" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src="assests/WechatIMG248.jpg" alt="Project 2" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src="assests/WechatIMG249.jpg" alt="Project 3" className="w-full h-full object-cover" />
                    </div>
                </Slider>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-450 to-transparent">
                <h1 className="text-4xl font-bold text-white mb-8 text-center font-blinker">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;
