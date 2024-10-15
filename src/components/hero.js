import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
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
        <div className="hero-container relative min-h-screen overflow-hidden bg-[rgb(45,54,74)]">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="flex flex-col lg:flex-row items-center justify-between p-4 md:p-8 min-h-screen"
            >
                <motion.div variants={itemVariants} className="lg:w-1/2 mb-8 lg:mb-0 z-10 lg:pr-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
                        Welcome to <span className="text-[rgb(170,37,62)] text-center">KeyCAS</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 md:mb-8 text-gray-200 text-center">Empowering Your Digital Journey</p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="https://edit.keycas.cn" className="inline-block">
                            <motion.button
                                className="w-full sm:w-auto bg-[rgb(170,37,62)] hover:bg-[rgb(200,57,82)] text-white px-6 md:px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Involved
                            </motion.button>
                        </a>
                        <motion.button
                            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:bg-white hover:text-[rgb(45,54,74)]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="lg:w-1/2 relative z-10">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, EffectFade]}
                        effect="fade"
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation
                        className="w-full max-w-[500px] h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="h-full">
                                    <ProjectCard project={{...project, size: 'small'}} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url(https://www.keystoneacademy.cn/Public/Uploads/uploadfile/images/20240927/864A2527.png)] bg-cover bg-center opacity-10 z-0"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(45,54,74)] to-transparent z-20"></div>
        </div>
    );
}

export default Hero;
