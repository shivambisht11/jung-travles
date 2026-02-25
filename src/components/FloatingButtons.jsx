import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">

            {/* Scroll to Top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 focus:outline-none"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Call Button (Mobile Only usually, but let's show for convenience) */}
            <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                href="tel:+917579171111"
                className="w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 hover:-translate-y-1 transition-all md:hidden border-2 border-white"
                aria-label="Call Now"
            >
                <Phone size={24} fill="currentColor" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                href="https://wa.me/917579171111"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] hover:-translate-y-1 transition-all border-2 border-white relative group"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={32} />
                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
                    Chat with us
                </span>
            </motion.a>

        </div>
    );
};

export default FloatingButtons;
