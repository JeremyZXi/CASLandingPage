import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const [logoSrc, setLogoSrc] = useState('assests/KeyArchlogo.svg'); // 初始浅色logo
    const [textColor, setTextColor] = useState('text-white');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const bannerHeight = 100; // Adjust this value as needed

            if (scrollY > bannerHeight) {
                const alpha = Math.min((scrollY - bannerHeight) / 100, 1); // Adjust the divisor for how quickly you want the color to change
                setNavbarBackground(`rgba(255, 255, 255, ${alpha})`);
                setLogoSrc('assests/KeyCAS_logo_b.svg'); // Change to dark logo when scrolling down
                setTextColor('text-gray-600'); // Change text color to gray when scrolling down
            } else {
                setNavbarBackground('transparent');
                setLogoSrc('assests/KeyArchlogo.svg'); // Default light logo when at the top
                setTextColor('text-white'); // Default text color when at the top
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
                                <img src={logoSrc} alt="Logo" className="h-8" />
                            </Link>
                            <Link to="/" className={`text-2xl font-bold ${textColor}`}>KA CAS Archive</Link>
                        </div>
                        <button onClick={toggleMenu} className="md:hidden text-white">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <div className="hidden md:flex gap-4">
                            <Link to="/" className={`hover:text-blue-200 ${textColor}`}>Home</Link>
                            <Link to="/about" className={`hover:text-blue-200 ${textColor}`}>About</Link>
                            <Link to="/editor" className={`hover:text-blue-200 ${textColor}`}>Web Editor</Link>
                            <Link to="https://jeremyzxi.github.io/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-200 ${textColor}`}>Support</Link>
                            <a href="https://keycas-doc.github.io/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-200 ${textColor}`}>Docs</a>
                            <Link to="/casguide" className={`hover:text-blue-200 ${textColor}`}>CAS Guide</Link>
                        </div>

                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-[rgb(25,34,54)] z-50 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <img src={logoSrc} alt="Logo" className="h-8" />
                                <span className={`text-2xl font-bold ${textColor}`}>KA CAS Archive</span>
                            </div>
                            <button onClick={toggleMenu} className="text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 text-lg">
                            <Link to="/" className={`hover:text-blue-200 ${textColor}`}>Home</Link>
                            <Link to="/about" className={`hover:text-blue-200 ${textColor}`}>About</Link>
                            <Link to="/editor" className={`hover:text-blue-200 ${textColor}`}>Web Editor</Link>
                            <Link to="https://jeremyzxi.github.io/" className={`hover:text-blue-200 ${textColor}`}>Support</Link>
                            <Link to="https://keycas-doc.github.io/" className={`hover:text-blue-200 ${textColor}`}>Docs</Link>
                            <Link to="/casguide" className={`hover:text-blue-200 ${textColor}`}>CAS Guide</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
