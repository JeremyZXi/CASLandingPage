import React, { useState, useEffect } from 'react';
import ReactGA from "react-ga4";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Layout, Box, Layers, Sliders, } from 'lucide-react';
import { Link } from 'react-router-dom';
import CASguide from "./CASguide";
import {Helmet} from "react-helmet";

const Editor = () => {
    ReactGA.send({ hitType: "pageview", page: "/editor", title: "Editor Info" });
    const [activeTab, setActiveTab] = useState(0); // State to manage active tab, defaulting to the first tab
    const [autoplay, setAutoplay] = useState(true); // State to manage autoplay feature

    const featureCards = [
        { icon: Layout, title: 'Drag & Drop Editor', description: 'Intuitive interface for easy website creation without coding' },
        { icon: Box, title: '100% Under Your Control', description: 'Your design, your way! You have full control over your project'},
        { icon: Layers, title: 'Responsive Design', description: 'Create websites that look great on all devices' },
        { icon: Sliders, title: 'Advanced Controls', description: 'Fine-tune your design with professional-grade tools' }
    ];

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const startAutoplay = () => {
        setAutoplay(true);
    };

    const stopAutoplay = () => {
        setAutoplay(false);
    };

    // Auto cycle through tabs every 5 seconds
    useEffect(() => {
        let intervalId;

        if (autoplay) {
            intervalId = setInterval(() => {
                setActiveTab(prevTab => (prevTab + 1) % featureCards.length);
            }, 5000); // Change tabs every 5 seconds (5000 milliseconds)
        }

        return () => clearInterval(intervalId);
    }, [autoplay]); // Dependency on autoplay state

    return (
        <>
        <Helmet>
            <title>KeyCAS:Code free web builder</title>
            <meta name="description" content="Create stunning websites in seconds, and facilitate your project." />
            <meta property="og:title" content="KeyCAS:Code free web builder" />
            <meta property="og:description" content="Create stunning websites in seconds, and facilitate your project." />
            <meta property="og:image" content="https://example.com/image.jpg" />
        </Helmet>
        <div className="min-h-screen ">
            <Navbar />
            <header className="bg-gradient-to-br from-[rgb(20,29,49)] via-[rgb(25,34,54)] to-[rgb(40,50,70)] text-white min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>

                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Create Stunning Websites with{' '}
                        <a href="https://www.silex.me/" className="relative inline-block group">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-400 transition-all duration-500">SILEX</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                        </a>
                    </h1>

                    <p className="text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">The open-source website builder for creative professionals. Create stunning websites without any knowledge of coding.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <a href="https://keycas-doc.github.io/" className="group">
                            <Button className="bg-gradient-to-r from-[rgb(170,37,62)] to-[rgb(200,57,82)] text-white hover:from-white hover:to-white hover:text-[rgb(170,37,62)] px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-64">
                                <span className="group-hover:scale-110 inline-block transition-transform duration-300">View Docs</span>
                            </Button>
                        </a>
                        <a href="https://your-index-website-url.com" className="group">
                            <Button className="bg-gradient-to-r from-[rgb(170,37,62)] to-[rgb(200,57,82)] text-white hover:from-white hover:to-white hover:text-[rgb(170,37,62)] px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-64">
                                <span className="group-hover:scale-110 inline-block transition-transform duration-300">Request Indexing</span>
                            </Button>
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <a href="https://edit.keycas.cn/en/connectors/" className="group">
                            <Button className="bg-gradient-to-r from-[rgb(170,37,62)] to-[rgb(200,57,82)] text-white hover:from-white hover:to-white hover:text-[rgb(170,37,62)] px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 h-16 w-80 flex items-center justify-center">
                                <img src="assests/KeyCAS_keystoneblue_round.svg" alt="Logo" className="h-10 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                                <span className="group-hover:scale-110 inline-block transition-transform duration-300">Start Creating</span>
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <svg className="animate-bounce w-6 h-6 text-white opacity-50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </header>



            <main className="container mx-auto px-4 py-16">
                <section className="mb-20">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Key Features</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Build website in seconds without any coding</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-[rgb(25,34,54)] inline-flex"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featureCards.map((card, index) => (
                            <div
                                key={index}
                                className="cursor-pointer"
                                onMouseEnter={() => {
                                    handleTabChange(index);
                                    stopAutoplay(); // Pause autoplay when mouse enters card
                                }}
                                onMouseLeave={() => {
                                    startAutoplay(); // Resume autoplay when mouse leaves card
                                }}
                            >
                                <FeatureCard
                                    icon={card.icon}
                                    title={card.title}
                                    description={card.description}
                                    isActive={activeTab === index}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Placeholder for tab content */}
                    <div className="mt-8 relative">
                        {/* Conditional rendering based on activeTab */}
                        <div
                            className="absolute top-0 left-0 w-full h-full transition-all duration-500"

                        />
                        <div className="relative z-10">
                            {activeTab === 0 && (
                                <Card className="bg-white shadow-lg flex" style={{ height: '500px', width: '100%' }}>
                                    <div className="flex-1 relative">
                                        <img src="assests/drag_drop.png" alt="Description of the image" className="absolute inset-0 h-full w-full object-cover rounded-l-lg " style={{ height: '100%', objectPosition: 'left top' }}/>
                                    </div>
                                    <div className="flex-1 p-4">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold">Drag and Drop Editor</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600">Thanks to the open source project GrapesJS, Silex comes with a set of built-in blocks, in this way you're able to build your templates faster. If the default set is not enough you can always add your own custom blocks.</p>
                                        </CardContent>
                                    </div>
                                </Card>
                            )}
                            {activeTab === 1 && (
                                <Card className="bg-white shadow-lg flex" style={{ height: '500px', width: '100%' }}>
                                    <div className="flex-1 relative">
                                        <img src="assests/drag_drop.png" alt="Description of the image" className="absolute inset-0 h-full w-full object-cover rounded-l-lg " style={{ height: '100%', objectPosition: 'left top' }}/>
                                    </div>
                                    <div className="flex-1 p-4">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold">100% Under Your Control</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600">Your design, your way! Your work on silex will result in HTML pages stored on your computer or your chosen storage(i.e. Gitlab or Your own server. You may host it anywhere you like! Here are some possible storage/hosting platform:</p>
                                            <div className="flex">
                                                <Link to="https://gitlab.com" className="mr-4">
                                                    <img src="assests/gitlab-logo-100.svg" alt="GitLab" className="h-20" />
                                                </Link>
                                                <Link to="https://www.netlify.com/" className="mr-4">
                                                    <img src="assests/logo-netlify-large-fullcolor-lightmode.svg" alt="Netlify" className="h-20" />
                                                </Link>
                                                <Link to="https://github.com/" className="mr-4">
                                                    <img src="assests/github-mark.svg" alt="Netlify" className="h-20" />
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            )}
                            {activeTab === 2 && (
                                <Card className="bg-white shadow-lg flex" style={{ height: '500px', width: '100%' }}>
                                    <div className="flex-1 relative">
                                        <img src="assests/responsive.png" alt="Description of the image" className="absolute inset-0 h-full w-full object-cover rounded-l-lg " style={{ height: '90%', objectPosition: 'center center' }}/>
                                    </div>
                                    <div className="flex-1 p-4">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold">Responsive Design</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600">Responsive design is a way to put together a website so that it automatically scales its content and elements to match the screen size on which it is viewed.</p>
                                        </CardContent>
                                    </div>
                                </Card>
                            )}
                            {activeTab === 3 && (
                                <Card className="bg-white shadow-lg flex" style={{ height: '500px', width: '100%' }}>
                                    <div className="flex-1 relative">
                                        <img src="assests/customize.png" alt="Description of the image" className="absolute inset-0 h-full w-full object-cover rounded-l-lg " style={{ height: '100%', objectPosition: 'left top' }}/>
                                    </div>
                                    <div className="flex-1 p-4">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold">Drag and Drop Editor</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600">Thanks to the open source project GrapesJS, Silex comes with a set of built-in blocks, in this way you're able to build your templates faster. If the default set is not enough you can always add your own custom blocks.</p>
                                        </CardContent>
                                    </div>
                                </Card>
                            )}
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">How It Works</h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Build website in seconds without any coding</p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-[rgb(25,34,54)] inline-flex"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[rgb(25,34,54)] mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout-template"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Choose a Template</h2>
                                    <p className="leading-relaxed text-base">Start with a pre-designed template and get yourself live in seconds or start from a blank canva from scratch</p>
                                    <a className="mt-3 text-[rgb(25,34,54)] inline-flex items-center" href="https://keycas-doc.github.io/docs/quick-start">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                             viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[rgb(25,34,54)] mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Customize Your Design</h2>
                                    <p className="leading-relaxed text-base">Use the drag & drop editor to personalize your website</p>
                                    <a className="mt-3 text-[rgb(25,34,54)] inline-flex items-center" href="https://keycas-doc.github.io/docs/quick-start">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                             viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[rgb(25,34,54)] mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Publish Your Site</h2>
                                    <p class="leading-relaxed text-base">Deploy your website with a single click, and ask for a free domain.</p>
                                    <a class="mt-3 text-[rgb(25,34,54)] inline-flex items-center" href="https://keycas-doc.github.io/docs/quick-start">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="https://edit.keycas.cn">
                        <button class="flex mx-auto mt-16 text-white bg-[rgb(25,34,54)] border-0 py-2 px-8 focus:outline-none hover:bg-[rgb(170,37,62)] rounded text-lg">Get Started</button>
                        </a>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Ready to Go?</h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Elevate your presence now</p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-[rgb(25,34,54)] inline-flex"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                            <Card className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:translate-y-[-8px]">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-[rgb(25,34,54)]">Create Your Free Website</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <p className="mb-6 text-gray-600">Launch your professional website in minutes.</p>
                                    <a href="https://edit.keycas.cn" className="block">
                                        <Button className="w-full bg-[rgb(25,34,54)] hover:bg-[rgb(170,37,62)] text-white px-6 py-3 rounded text-lg font-semibold transition-colors duration-300">
                                            Get Started
                                        </Button>
                                    </a>
                                </CardContent>
                            </Card>

                            <div className="flex flex-col items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(170,37,62)] to-[rgb(25,34,54)] flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">OR</span>
                                </div>
                            </div>

                            <Card className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:translate-y-[-8px]">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-[rgb(25,34,54)]">Get Indexed</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <p className="mb-6 text-gray-600">Request a free subdomain</p>
                                    <Button className="w-full bg-[rgb(170,37,62)] hover:bg-[rgb(25,34,54)] text-white px-6 py-3 rounded text-lg font-semibold transition-colors duration-300">
                                        Request Indexing
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>






            </main>
            <Footer />
        </div>
        </>
    );
};

export default Editor;