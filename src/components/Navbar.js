import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const [logoSrc, setLogoSrc] = useState('assests/KeyArchlogo.svg');
    const [textColor, setTextColor] = useState('text-white');
    const [menuIconColor, setMenuIconColor] = useState('text-white');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/faq', label: 'FAQ' },
        { to: '/editor', label: 'Web Editor' },
        { to: 'https://jeremyzxi.github.io/', label: 'Support', external: true },
        { to: 'https://keycas-doc.github.io/', label: 'Docs', external: true },
        { to: '/casguide', label: 'CAS Guide' },
    ];

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        const bannerHeight = 100;

        if (currentScrollY > bannerHeight) {
            const alpha = Math.min((currentScrollY - bannerHeight) / 100, 1);
            setNavbarBackground(`rgba(255, 255, 255, ${alpha})`);
            setLogoSrc('assests/KeyCAS_logo_b.svg');
            setTextColor('text-gray-600');
            setMenuIconColor('text-gray-600');
        } else {
            setNavbarBackground('transparent');
            setLogoSrc('assests/KeyArchlogo.svg');
            setTextColor('text-white');
            setMenuIconColor('text-white');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setLogoSrc('assests/KeyArchlogo.svg');
            setTextColor('text-white');
        } else {
            handleScroll();
        }
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    const renderNavLink = (link, isMobile = false) => {
        const className = `hover:text-blue-200 ${isMobile ? 'text-white' : textColor}`;
        if (link.external) {
            return (
                <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className={className}>
                    {link.label}
                </a>
            );
        }
        return (
            <Link key={link.label} to={link.to} className={className}>
                {link.label}
            </Link>
        );
    };

    return (
        <>
            <nav className="fixed w-full top-0 z-50 transition-colors duration-300" style={{ backgroundColor: navbarBackground }}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-4">
                            <Link to="/">
                                <img src={logoSrc} alt="Logo" className="h-8" />
                            </Link>
                            <Link to="/" className={`text-2xl ${textColor}`}>KeyCAS</Link>
                        </div>
                        <button onClick={toggleMenu} className="md:hidden text-white">
                            {isMenuOpen ? <X size={24} className={menuIconColor} /> : <Menu size={24} className={menuIconColor} />}
                        </button>
                        <div className="hidden md:flex gap-4">
                            {navLinks.map(link => renderNavLink(link))}
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
                                <span className="text-2xl font-bold text-white">KA CAS Archive</span>
                            </div>
                            <button onClick={toggleMenu} className="text-white">
                                <X size={24} className={menuIconColor} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 text-lg">
                            {navLinks.map(link => renderNavLink(link, true))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
