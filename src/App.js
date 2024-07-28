import React, { useState, useEffect, useRef  } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { GraduationCap, Code, Palette, Microscope, Search, Menu, Layout, Box, Layers, Sliders, X } from 'lucide-react';
import Slider from "react-slick";
import * as echarts from 'echarts';


// Make sure to import the CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Google Font
import '@fontsource/blinker';
import '@fontsource/blinker/400.css';
import '@fontsource/blinker/700.css';

const colorSchemes = {
    default: {
        background: 'bg-[rgb(25,34,54)]',
        text: 'text-white',
        description: 'text-blue-200',
        button: 'bg-[rgb(170,37,62)] text-[rgb(255,255,255)] hover:bg-white hover:text-[rgb(170,37,62)]',
    },
    red: {
        background: 'bg-[rgb(170,37,62)]',
        text: 'text-white',
        description: 'text-red-200',
        button: 'bg-[rgb(25,34,54)] text-[rgb(255,255,255)] hover:bg-white hover:text-[rgb(25,34,54)]',
    },
    blue: {
        background: 'bg-blue-700',
        text: 'text-white',
        description: 'text-blue-200',
        button: 'bg-blue-500 hover:bg-blue-600',
    },
    green: {
        background: 'bg-green-700',
        text: 'text-white',
        description: 'text-green-200',
        button: 'bg-green-500 hover:bg-green-600',
    },
    purple: {
        background: 'bg-purple-700',
        text: 'text-white',
        description: 'text-purple-200',
        button: 'bg-purple-500 hover:bg-purple-600',
    },
    orange: {
        background: 'bg-orange-700',
        text: 'text-white',
        description: 'text-orange-200',
        button: 'bg-orange-500 hover:bg-orange-600',
    },
};

const projects = [
    {
        id: 1,
        title: "AI Chatbot",
        student: "Alice Smith",
        category: "Computer Science",
        icon: Code,
        size: "tall",
        description: "An advanced AI chatbot that uses natural language processing to provide human-like conversations and assist with various tasks.",
        image: "/assests/WechatIMG56.jpg",
        color: "orange"

    },
    {
        id: 2,
        title: "Sustainable City",
        student: "Bob Johnson",
        category: "Environmental Science",
        icon: Palette,
        size: "wide",
        description: "A comprehensive model of a sustainable city, showcasing innovative green technologies and urban planning strategies.",
        image: "/assests/WechatIMG56.jpg",
        color: "red"
    },
    {
        id: 3,
        title: "Quantum Computing",
        student: "Charlie Brown",
        category: "Physics",
        icon: Microscope,
        size: "small",
        description: "A simulation of quantum computing principles, demonstrating the potential of qubits in solving complex problems.",
        image: "/assests/WechatIMG56.jpg"
    },
    {
        id: 4,
        title: "Language Learning",
        student: "Diana Prince",
        category: "Education",
        icon: GraduationCap,
        size: "small",
        description: "An interactive application that uses gamification to make language learning more engaging and effective.",
        image:"/assests/WechatIMG56.jpg",
        color: "green"
    },
    {
        id: 5,
        title: "Robotics Project",
        student: "Eva Green",
        category: "Engineering",
        icon: Code,
        size: "medium",
        description: "An autonomous robot designed to assist in household tasks, showcasing advancements in robotics and AI integration.",
        image: "/assests/WechatIMG56.jpg"
    },
    {
        id: 6,
        title: "Biodiversity Study",
        student: "Frank White",
        category: "Biology",
        icon: Microscope,
        size: "medium",
        description: "A comprehensive study of local ecosystem biodiversity, highlighting the importance of preserving various species in maintaining ecological balance.",
        image: "/assests/WechatIMG56.jpg"
    },
    {
        id: 7,
        title: "Open Source Web builder",
        student: "BobC",
        category: "Computer Science",
        icon: Code,
        size: "small",
        description: "Platform for students to present their work in and beyond Keystone community",
        image: "/assests/WechatIMG56.jpg",
        url: "https://jeremyztest.netlify.app/"
    },
    {
        id: 8,
        title: "Nepal Trip",
        student: "Baldeep",
        category: "Education",
        icon: Palette,
        size: "wide",
        description: "help kids in nepal, moonlight school"
    },
    {
        id: 9,
        title: "blablblab",
        student: "Baldeep",
        category: "Education",
        icon: Palette,
        size: "small",
        description: "help kids in nepal, moonlight school",
        image: "/api/placeholder/600/200"
    },
];


const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    const colorScheme = colorSchemes[project.color] || colorSchemes.default;

    const sizeClasses = {
        small: "col-span-1 row-span-1",
        medium: "col-span-1 row-span-2",
        wide: "col-span-2 row-span-1",
        tall: "col-span-1 row-span-3",
    };

    const titleSizeClasses = {
        small: "text-lg",
        medium: "text-xl",
        wide: "text-xl",
        tall: "text-2xl",
    };

    const contentClasses = {
        small: "text-sm",
        medium: "text-base",
        wide: "text-base",
        tall: "text-lg",
    };

    const buttonSizeClasses = {
        small: "text-xs px-2 py-1",
        medium: "text-sm px-3 py-1.5",
        wide: "text-sm px-3 py-1.5",
        tall: "text-base px-4 py-2",
    };

    return (
        <Card className={`${sizeClasses[project.size]} ${colorScheme.background} ${colorScheme.text} flex flex-col overflow-hidden`}>
            {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-1/3 object-cover" />
            )}
            <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${titleSizeClasses[project.size]}`}>
                    <Icon className={project.size === 'tall' ? "h-8 w-8" : "h-6 w-6"} />
                    {project.title}
                </CardTitle>
                <CardDescription className={`${colorScheme.description} ${contentClasses[project.size]}`}>{project.student}</CardDescription>
            </CardHeader>
            <CardContent className={`flex-grow ${contentClasses[project.size]}`}>
                <p>{project.category}</p>
                <p className="mt-2">{project.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button
                    className={`${colorScheme.button} ${buttonSizeClasses[project.size]}`}
                    onClick={() => window.open(project.url, "_blank")}
                >
                    View Project
                </Button>
            </CardFooter>
        </Card>
    );
};


const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const bannerHeight = 300;

            if (scrollY > bannerHeight) {
                const alpha = Math.min((scrollY - bannerHeight) / 100, 1);
                setNavbarBackground(`rgba(25,34,54,${alpha})`);
            } else {
                setNavbarBackground('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed w-full top-0 z-50 transition-colors duration-300" style={{ backgroundColor: navbarBackground }}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-4">
                            <Link to="/">
                                <img src="assests/KeyArchlogo.svg" alt="Logo" className="h-8" />
                            </Link>
                            <Link to="/" className="text-white text-2xl font-bold">KA CAS Archive</Link>
                        </div>
                        <button onClick={toggleMenu} className="md:hidden text-white">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <div className="hidden md:flex gap-4">
                            <Link to="/" className="text-white hover:text-blue-200">Home</Link>
                            <Link to="/about" className="text-white hover:text-blue-200">About</Link>
                            <Link to="/editor" className="text-white hover:text-blue-200">Web Editor</Link>
                            <Link to="https://jeremyzxi.github.io/" className="text-white hover:text-blue-200">Support</Link>
                            <Link to="https://jeremyzxi.github.io/" className="text-white hover:text-blue-200">Docs</Link>
                            <Link to="/casguide" className="text-white hover:text-blue-200">CAS Guide</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-[rgb(25,34,54)] z-50 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <img src="assests/KeyArchlogo.svg" alt="Logo" className="h-8" />
                                <span className="text-white text-2xl font-bold">KA CAS Archive</span>
                            </div>
                            <button onClick={toggleMenu} className="text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 text-lg">
                            <Link to="/" className="text-white hover:text-blue-200">Home</Link>
                            <Link to="/about" className="text-white hover:text-blue-200">About</Link>
                            <Link to="/editor" className="text-white hover:text-blue-200">Web Editor</Link>
                            <Link to="https://jeremyzxi.github.io/" className="text-white hover:text-blue-200">Support</Link>
                            <Link to="https://jeremyzxi.github.io/" className="text-white hover:text-blue-200">Docs</Link>
                            <Link to="/casguide" className="text-white hover:text-blue-200">CAS Guide</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


//banner for home AKA landing page
const Banner = ({ title, showButton = false, button_text = "Get Started", button_link = "/editor" }) => {
    const [scrollY, setScrollY] = useState(0);

    // 监听页面滚动事件
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
        <div className="relative h-72 md:h-80 overflow-hidden"> {/* 使用 overflow-hidden 隐藏多出来的部分 */}
            <div style={{ transform: `translateY(-${scrollY}px)` }}> {/* 根据页面滚动调整 Banner 组件的位置 */}
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
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold text-white mb-8 text-center font-blinker">{title}</h1>
            </div>
        </div>
    );
};







const Footer = () => (
    <footer className="bg-[rgb(25,34,54)] text-white p-4 mt-8">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Key. All rights reserved.</p>
        </div>
    </footer>
);

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[rgb(255,255,255)]">
            <Navbar />
            <Banner title="Welcome"/>
            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-blue-100">
            <Navbar />
            <Banner title="About"/>
            <main className="container mx-auto p-4">
                <Card className="bg-white p-6 shadow-lg mt-8">
                    <CardContent>
                        <p className="text-lg mb-4">
                            Welcome to our Student Project Showcase! This platform is dedicated to highlighting the incredible work of our talented students across various disciplines.
                        </p>
                        {/* ... (rest of the AboutPage content remains unchanged) */}
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};
const CASguide = () => {
    return (
        <div className="min-h-screen bg-blue-100">
            <Navbar />
            <Banner title="Guide"/>
            <main className="container mx-auto p-4">
                <Card className="bg-white p-6 shadow-lg mt-8">
                    <CardContent>
                        <p className="text-lg mb-4">
                            Creativity, activity, service (CAS) is one of the three essential elements that every student must complete as part of the Diploma Programme (DP).
                        </p>
                        {/* ... (rest of the AboutPage content remains unchanged) */}
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};
const FeatureCard = ({ icon: Icon, title, description }) => (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
            <Icon className="w-12 h-12 text-blue-500 mb-4" />
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600">{description}</p>
        </CardContent>
    </Card>
);




const EditorPage = () => {
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
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            <Navbar />
            <header className="bg-[rgb(25,34,54)] text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Create Stunning Websites with{' '}
                        <u>
                            <a href="https://www.silex.me/" style={{ color: "white" }}>
                                <span className="hover:text-[rgb(236,98,124)]">SILEX</span>
                            </a>
                        </u>
                    </h1>

                    <p className="text-xl mb-8">The open-source website builder for creative professionals</p>
                    <div className="flex justify-center gap-4">
                        <a href="https://v3.silex.me">
                            <Button className="bg-[rgb(170,37,62)] text-[rgb(255,255,255)] hover:bg-white hover:text-[rgb(170,37,62)] px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300">
                                Start Creating
                            </Button>
                        </a>
                        <a href="https://your-index-website-url.com">
                            <Button className="bg-[rgb(170,37,62)] text-[rgb(255,255,255)] hover:bg-white hover:text-[rgb(170,37,62)] px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300">
                                Request Indexing
                            </Button>
                        </a>
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-4 py-16">
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
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

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">1. Choose a Template</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Start with a pre-designed template or a blank canvas</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">2. Customize Your Design</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Use the drag & drop editor to personalize your website</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">3. Publish Your Site</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Deploy your website with a single click</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Ready to Go?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">Create Your Own Free Website NOW!</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="https://v3.silex.me">
                                <Button className="bg-[rgb(25,34,54)] hover:bg-[rgb(170,37,62)] text-white px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300">
                                    Get Started
                                </Button>
                                </a>
                            </CardContent>
                        </Card>

                        {/* 使用 Flexbox 实现居中对齐 */}
                        <div className="flex items-center justify-center col-span-1 md:col-span-1 text-5xl font-bold">
                            <h1>OR</h1>
                        </div>

                        <Card className="bg-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">Get Your Website Indexed NOW!</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button className="bg-[rgb(25,34,54)] hover:bg-[rgb(170,37,62)] text-white px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300">
                                    Request Indexing
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>



            </main>
            <Footer />
        </div>
    );
};

const StatisticsPage = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Initialize ECharts
        const chart = echarts.init(chartRef.current);

        // Mock data
        const data = [
            { domain: 'example.com', visits: 1000 },
            { domain: 'test.com', visits: 1500 },
            { domain: 'demo.com', visits: 800 },
        ];

        // Chart options
        const option = {
            title: {
                text: 'Domain Visit Statistics'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: data.map(item => item.domain)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: data.map(item => item.visits),
                type: 'bar'
            }]
        };

        // Set chart options
        chart.setOption(option);

        // Clean up
        return () => {
            chart.dispose();
        };
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
                <Navbar />
                <Banner title="Stats" />
            <main className="container mx-auto px-4 py-16">
                <Card className="bg-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Visit Count Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};



const App = () => {
    return (
        <Router>
            <div className="font-blinker flex flex-col min-h-screen overflow-x-hidden">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/casguide" element={<CASguide />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;