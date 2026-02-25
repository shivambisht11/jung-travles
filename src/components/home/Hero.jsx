import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                    backgroundPosition: 'center 30%'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50/100 via-transparent to-transparent h-32 bottom-0 top-auto"></div>
            </div>

            {/* Shapes & Blob */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-secondary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary-500/20 text-secondary-300 border border-secondary-500/30 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                            Premium Service in Uttarakhand
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Reliable Taxi & <br />
                        Tour Services <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-300">
                            in Pithoragarh
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        Experience 24/7 safe, comfortable, and scenic travel across the beautiful mountains and beyond.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <a
                            href="tel:+917579171111"
                            className="flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1"
                        >
                            <Phone className="mr-2" size={20} />
                            Call Now
                        </a>

                        <a
                            href="https://wa.me/917579171111"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-1"
                        >
                            <FaWhatsapp className="mr-2 text-xl" />
                            WhatsApp Now
                        </a>

                        <a
                            href="https://maps.google.com/?q=Pithoragarh"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
                        >
                            <MapPin className="mr-2" size={20} />
                            Get Directions
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
