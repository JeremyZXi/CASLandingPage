import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import {projects} from "../data/projects";
import {Button} from "./ui/button";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="hero-container relative min-h-screen pt-24 pb-12 px-8 overflow-hidden"
             style={{
                 background: 'linear-gradient(to bottom, rgb(45,54,74), rgb(55,64,84), rgb(65,74,94), rgb(75,84,104), rgb(85,94,114), rgb(135,144,164), rgb(185,194,214), rgb(220,225,235), rgb(255,255,255))'

             }}>
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                style={{backgroundImage: "url('/path/to/your/background-image.jpg')"}}
            ></div>

            <div className="flex flex-col md:flex-row items-center justify-between p-8 min-h-screen">
                <div className="flex flex-col items-start justify-center md:w-1/2 md:pr-8 mb-8 md:mb-0 md:mt-[-20%]">
                    <h1 className="text-4xl font-bold mb-4 text-white">Welcome to KeyCAS</h1>
                    <p className="mb-6 text-white">I am a classy slogan</p>
                    <div className="flex space-x-4 relative z-10">
                        <a href="/editor">
                            <a href="https://edit.keycas.cn">
                                <Button className="bg-[rgb(25,34,54)] hover:bg-[rgb(170,37,62)] text-white px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300">
                                    Get Involved
                                </Button>
                            </a>
                        </a>
                    </div>

                </div>
                <div className="w-full md:w-1/2">
                <Slider {...settings}>
                        {projects.map((project) => (
                            <div key={project.id} className="p-2">
                                <div className="h-[600px]">
                                    <ProjectCard project={{...project, size: 'small'}} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hero;

