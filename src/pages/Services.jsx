import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const servicesList = [
    {
        id: 1,
        title: 'Local Taxi in Pithoragarh',
        description: 'Quick, reliable, and safe transportation for your daily commutes, shopping trips, or visiting local attractions like Chandak, Mostamanu, or Thal Kedar. Our drivers know the town inside out.',
        image: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Outstation Trips & Airport Transfers',
        description: 'Comfortable long-distance travel to Dehradun, Delhi, Haldwani, or direct pickups and drops from Pantnagar Airport and IGI Airport. We ensure timely arrivals and departures.',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Char Dham & Spiritual Tours',
        description: 'Expertly guided, safe, and reverent journeys to Badrinath, Kedarnath, Gangotri, Yamunotri, and other sacred sites. We provide knowledgeable drivers experienced in spiritual tourism.',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Custom Kumaon & Garhwal Tours',
        description: 'Explore the hidden gems of Uttarakhand. We help you plan and execute customized itineraries covering destinations like Munsiyari, Chaukori, Nainital, Almora, and Auli.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
];

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 min-h-screen pb-20"
        >
            {/* Page Header */}
            <div className="bg-primary-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary-100 max-w-2xl mx-auto"
                    >
                        Comprehensive travel solutions designed for your comfort and safety.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="space-y-24">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-2">
                                    Service {index + 1}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <a
                                        href="tel:+917579171111"
                                        className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer"
                                    >
                                        <Phone className="mr-2" size={18} />
                                        Call Booking
                                    </a>
                                    <a
                                        href="https://wa.me/917579171111"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer"
                                    >
                                        <FaWhatsapp className="mr-2" size={20} />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-primary-50 py-16 mt-20 border-t border-primary-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Need something not listed here?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        We offer fully customized travel plans tailored specifically to your requirements. Just reach out and let us know where you want to go.
                    </p>
                    <a href="/contact" className="inline-flex items-center justify-center bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                        Contact us for custom bookings <ArrowRight className="ml-2" />
                    </a>
                </div>
            </div>

        </motion.div>
    );
};

export default Services;
