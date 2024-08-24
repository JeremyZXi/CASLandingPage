import React from 'react';
import ReactGA from "react-ga4";

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Card, CardContent } from "../components/ui/card";
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';

const About = () => {
    ReactGA.send({ hitType: "pageview", page: "/about", title: "About" });
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="Discover KeyCAS, a cutting-edge platform for Keystone students to present their innovative projects across diverse fields. Join a community of visionaries and start your journey today!" />
                <meta property="og:title" content="About KeyCAS - Keystone Innovation Hub" />
                <meta property="og:description" content="Discover KeyCAS, a cutting-edge platform for Keystone students to present their innovative projects across diverse fields. Join a community of visionaries and start your journey today!" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
                <Navbar />
                <Banner title="About Us"/>
                <main className="container mx-auto p-4 md:p-8">
                    <motion.div {...fadeIn}>
                        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <CardContent className="p-6 md:p-10">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to KeyCAS</h2>
                                <p className="text-lg mb-6 text-gray-600">
                                    At Keystone, we believe in the power of innovation and the potential of every student. Our KeyCAS is more than just a platform – it's a launchpad for the next generation of visionaries, thinkers, and creators.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Our Mission</h3>
                                <p className="text-lg mb-6 text-gray-600">
                                    We aim to provide a space where students can:
                                </p>
                                <ul className="list-disc list-inside mb-6 text-gray-600">
                                    <li>Showcase their groundbreaking projects</li>
                                    <li>Collaborate with like-minded peers</li>
                                    <li>Gain recognition for their innovative work</li>

                                </ul>

                                <h3 className="text-2xl font-semibold mb-4 text-gray-700">What We Offer</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-gray-100 p-4 rounded-lg">
                                        <h4 className="text-xl font-semibold mb-2 text-gray-700">Project Visibility</h4>
                                        <p className="text-gray-600">Your innovations deserve the spotlight. Our platform ensures your projects reach a wide audience of peers, mentors, and potential collaborators.</p>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg">
                                        <h4 className="text-xl font-semibold mb-2 text-gray-700">Skill Development</h4>
                                        <p className="text-gray-600">Enhance your project management, presentation, and collaboration skills as you showcase your work to a diverse audience.</p>
                                    </div>

                                </div>

                                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Join Our Community</h3>
                                <p className="text-lg mb-6 text-gray-600">
                                    Whether you're working on a cutting-edge tech solution, a groundbreaking research project, or an innovative art installation, there's a place for you in our showcase. Join us today and be part of a community that's shaping the future.
                                </p>

                                <div className="text-center">
                                    <a href="/register" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                                        Start Your Journey
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default About;
