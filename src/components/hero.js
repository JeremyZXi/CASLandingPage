import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { Button } from "./ui/button";
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <div className="hero-container relative min-h-screen py-24 px-8 overflow-hidden bg-gradient-to-b from-[rgb(45,54,74)] via-[rgb(85,94,114)] to-[rgb(255,255,255)]">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="flex flex-col lg:flex-row items-center justify-between p-8 min-h-screen"
            >
                <motion.div variants={itemVariants} className="lg:w-1/2 mb-12 lg:mb-0">
                    <h1 className="text-5xl font-bold mb-6 text-white leading-tight">Welcome to <span className="text-[rgb(170,37,62)]">KeyCAS</span></h1>
                    <p className="text-xl mb-8 text-gray-200">Empowering Your Digital Journey</p>
                    <div className="flex space-x-4">
                        <a href="https://edit.keycas.cn">
                            <Button
                                className="bg-[rgb(170,37,62)] hover:bg-[rgb(200,57,82)] text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Involved
                            </Button>
                        </a>
                        <Button
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:bg-white hover:text-[rgb(45,54,74)]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </Button>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="lg:w-1/2">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, EffectCube]}
                        effect="cube"
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="h-[400px] lg:h-[500px]">
                                    <ProjectCard project={{...project, size: 'small'}} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    );
}

export default Hero;
