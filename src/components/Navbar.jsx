import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* Top Bar - Hidden on mobile */}
            <div className="hidden md:flex bg-primary-900 text-white text-sm py-2 px-4 justify-between items-center">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone size={14} className="text-secondary-400" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={14} className="text-secondary-400" />
                            <span>Near Roadways Bus Stand, Pithoragarh, Uttarakhand</span>
                        </div>
                    </div>
                    <div className="font-semibold text-secondary-400">
                        24/7 Service Available
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                        ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
                        : 'bg-white py-4 md:py-5'
                    } ${scrolled ? 'top-0' : 'top-0 md:top-[36px]'}`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col">
                        <span className="text-2xl font-bold text-gradient leading-tight">Jung Tour & Travels</span>
                        <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Pithoragarh (UK)</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-primary-600 ${location.pathname === link.path ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-700'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 rounded-full bg-gradient-primary text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-800 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden"
                    >
                        <div className="flex flex-col space-y-6 text-center mt-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-2xl font-semibold ${location.pathname === link.path ? 'text-primary-600' : 'text-gray-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-8 flex flex-col items-center space-y-4">
                                <a href="tel:+919876543210" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
                                    <Phone className="text-primary-600" />
                                    <span>+91 98765 43210</span>
                                </a>
                                <Link
                                    to="/contact"
                                    className="w-full max-w-xs py-4 rounded-full bg-gradient-primary text-white font-bold text-lg shadow-lg shadow-primary-500/30"
                                >
                                    Book a Ride
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
