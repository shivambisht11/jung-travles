import React from 'react';
import { motion } from 'framer-motion';
import { Car, Map, Mountain, Plane, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'Local Taxi',
        description: 'Safe and comfortable rides around Pithoragarh town for you and your family.',
        icon: <Car className="w-8 h-8 text-primary-500" />,
        color: 'bg-primary-50',
    },
    {
        id: 2,
        title: 'Outstation Trips',
        description: 'Long-distance travel made easy. We cover Haldwani, Dehradun, Delhi, and more.',
        icon: <Map className="w-8 h-8 text-secondary-500" />,
        color: 'bg-secondary-50',
    },
    {
        id: 3,
        title: 'Char Dham Yatra',
        description: 'Special religious tour packages with experienced drivers for a peaceful journey.',
        icon: <Mountain className="w-8 h-8 text-primary-600" />,
        color: 'bg-primary-50',
    },
    {
        id: 4,
        title: 'Airport Pickup',
        description: 'Reliable pickup and drop-off to Pantnagar Airport or Delhi IGI Airport.',
        icon: <Plane className="w-8 h-8 text-secondary-600" />,
        color: 'bg-secondary-50',
    },
    {
        id: 5,
        title: 'Custom Tours',
        description: 'Plan your own itinerary across Kumaon & Garhwal. We provide the best guide & ride.',
        icon: <Navigation className="w-8 h-8 text-primary-500" />,
        color: 'bg-primary-50',
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                    >
                        Our <span className="text-gradient">Premium</span> Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 mb-10"
                    >
                        From daily commutes to spiritual journeys, we offer a diverse range of transportation solutions tailored just for you.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "200px" }}
                        transition={{ delay: 0.2 }}
                        className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-8 bg-gray-100 min-h-[300px]"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            poster="/images/fleet/vehicle-4.jpg"
                            className="w-full h-auto max-h-[500px] object-cover"
                        >
                            <source src="/videos/hero-video.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                to="/services"
                                className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                            >
                                Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 5 * 0.1 }}
                        className="bg-gradient-primary rounded-2xl p-8 shadow-xl flex flex-col justify-center items-center text-center text-white relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

                        <h3 className="text-2xl font-bold mb-4 relative z-10">Need a specific ride?</h3>
                        <p className="text-white/90 mb-8 max-w-xs relative z-10">
                            We can arrange customized travel plans according to your needs.
                        </p>
                        <a
                            href="tel:+917579171111"
                            className="bg-white text-primary-600 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all relative z-10"
                        >
                            Contact Us Today
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
