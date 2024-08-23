import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Card, CardContent } from "../components/ui/card";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openItems, setOpenItems] = useState({});

    const faqItems = [
        {
            question: "What is KeyCAS?",
            answer:`
                <p>The Student Project Showcase is a cutting-edge platform for Keystone students to present their innovative projects across diverse fields. It offers:</p>
                <ul>
                    <li>A gateway to share groundbreaking ideas</li>
                    <li>Opportunities for collaboration</li>
                    <li>Recognition for visionary work</li>
                </ul>
                <p>Visit our <a href="/about" class="text-blue-600 hover:underline">About page</a> to learn more.</p>`
        }
    ];

    const toggleItem = (index) => {
        setOpenItems(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <>
            <Helmet>
                <title>FAQ - KeyCAS</title>
                <meta name="description" content="Explore our comprehensive FAQ for the Student Project Showcase. Discover how to showcase your innovations, collaborate with peers, and navigate our cutting-edge platform." />
                <meta property="og:title" content="FAQ - Student Project Showcase" />
                <meta property="og:description" content="Explore our comprehensive FAQ for the Student Project Showcase. Discover how to showcase your innovations, collaborate with peers, and navigate our cutting-edge platform." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
                <Navbar />
                <Banner title="Frequently Asked Questions"/>
                <main className="container mx-auto p-4 md:p-8">
                    <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <CardContent className="p-6 md:p-10">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Explore Our FAQ</h2>
                            <p className="text-lg mb-8 text-gray-600">
                                Discover everything you need to know about KeyCAS. Can't find your answer? Our support team is just a click away.
                            </p>
                            <div className="space-y-6">
                                {faqItems.map((item, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-6">
                                        <button
                                            className="flex justify-between items-center w-full text-left font-semibold text-xl text-gray-700 hover:text-gray-900 transition-colors duration-300"
                                            onClick={() => toggleItem(index)}
                                        >
                                            {item.question}
                                            <motion.span
                                                animate={{ rotate: openItems[index] ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                ▼
                                            </motion.span>
                                        </button>
                                        <AnimatePresence>
                                            {openItems[index] && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div
                                                        className="mt-4 text-gray-600 leading-relaxed faq-answer"
                                                        dangerouslySetInnerHTML={{ __html: item.answer }}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default FAQ;
