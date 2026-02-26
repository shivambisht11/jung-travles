import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Rahul Sharma',
        location: 'Delhi',
        text: 'Travelled from Haldwani to Pithoragarh with my family. The driver was very professional, drove safely through the mountains, and the car was spotless. Highly recommend Jung Travels!',
        rating: 5,
        avatar: 'https://ui-avatars.com/api/?name=Rahul+Sharma&background=0284c7&color=fff',
    },
    {
        name: 'Priya Joshi',
        location: 'Pithoragarh',
        text: 'I use their local taxi service frequently. They are always on time, even early mornings or late nights. Very reliable and respectful drivers.',
        rating: 5,
        avatar: 'https://ui-avatars.com/api/?name=Priya+Joshi&background=14b8a6&color=fff',
    },
    {
        name: 'Amit Kumar',
        location: 'Mumbai',
        text: 'Booked a custom 5-day tour of Kumaon. Jung travels arranged everything perfectly. The local knowledge of the driver made our trip extra special and safe.',
        rating: 5,
        avatar: 'https://ui-avatars.com/api/?name=Amit+Kumar&background=0369a1&color=fff',
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4 text-gray-900"
                    >
                        What Our <span className="text-gradient">Travelers Say</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-lg relative border border-gray-100 group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute top-6 right-6 text-gray-100 group-hover:text-primary-50 transition-colors duration-300">
                                <Quote size={64} />
                            </div>

                            <div className="flex text-yellow-400 mb-6 relative z-10">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" className="mr-1" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 relative z-10 leading-relaxed italic">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center relative z-10 mt-auto">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={56}
                                    height={56}
                                    className="w-14 h-14 rounded-full border-2 border-primary-100 mr-4 bg-gray-200"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
