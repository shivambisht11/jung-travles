import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Sparkles, Coins } from 'lucide-react';

const features = [
    {
        title: '24/7 Service',
        description: 'We are available round the clock. Day or night, rain or shine, your ride is just a call away.',
        icon: <Clock className="w-10 h-10 text-primary-500" />,
    },
    {
        title: 'Professional Drivers',
        description: 'Our drivers are licensed, experienced, thoroughly verified, and know the mountain roads well.',
        icon: <ShieldCheck className="w-10 h-10 text-secondary-500" />,
    },
    {
        title: 'Clean Vehicles',
        description: 'Immaculately maintained, sanitized, and comfortable cars for every journey.',
        icon: <Sparkles className="w-10 h-10 text-primary-500" />,
    },
    {
        title: 'Affordable Pricing',
        description: 'Transparent rates with no hidden charges. Premium travel experience at fair prices.',
        icon: <Coins className="w-10 h-10 text-secondary-500" />,
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Grid Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid grid-rows-2 gap-4">
                                <img
                                    src="/images/fleet/vehicle-1.jpg"
                                    alt="Fleet Vehicle"
                                    width={400}
                                    height={300}
                                    className="w-full h-32 lg:h-48 object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 bg-gray-200"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <img
                                    src="/images/fleet/vehicle-7.jpg"
                                    alt="Fleet Vehicle"
                                    width={400}
                                    height={300}
                                    className="w-full h-32 lg:h-48 object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 bg-gray-200"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="grid grid-rows-2 gap-4 pt-8">
                                <img
                                    src="/images/fleet/vehicle-4.jpg"
                                    alt="Force Traveller"
                                    width={400}
                                    height={300}
                                    className="w-full h-32 lg:h-48 object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 bg-gray-200"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <img
                                    src="/images/fleet/vehicle-6.jpg"
                                    alt="Fleet Vehicle"
                                    width={400}
                                    height={300}
                                    className="w-full h-32 lg:h-48 object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 bg-gray-200"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:-bottom-12 md:left-8 md:translate-x-0 bg-gray-900/85 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-2xl z-10 w-4/5 md:w-auto text-center md:text-left">
                            <p className="text-3xl font-black mb-1 text-white">8+ Vehicles</p>
                            <p className="text-primary-300 font-semibold tracking-wide">Premium Fleet Collection</p>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-200 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary-200 rounded-full blur-2xl -z-10"></div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
                        >
                            Why Choose <span className="text-gradient">Jung Travels?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 mb-12"
                        >
                            When travelling in the hills, safety and reliability are paramount. We deliver on both, ensuring every trip is memorable for the right reasons.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex flex-col"
                                >
                                    <div className="mb-4 bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
