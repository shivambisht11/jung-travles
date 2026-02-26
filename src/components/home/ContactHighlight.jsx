import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactHighlight = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gray-900">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[100%] rounded-full bg-gradient-to-b from-primary-600/30 to-transparent blur-3xl transform rotate-12"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[80%] rounded-full bg-gradient-to-t from-secondary-600/20 to-transparent blur-3xl transform -rotate-12"></div>

                {/* Abstract topographic lines or subtle pattern could go here */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase border border-red-500/30 mb-8"
                            >
                                <Clock size={16} />
                                <span>Open 24 Hours</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                            >
                                Ready for your <br />
                                <span className="text-secondary-400">mountain adventure?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-300 text-lg mb-8 max-w-md"
                            >
                                Whether you need an urgent local drop or are planning a multi-day tour, our reliable fleet is ready to roll.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center space-x-4 text-gray-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary-400" />
                                </div>
                                <p>KMOU bus station pithoragarh Uttarakhand 262501</p>
                            </motion.div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col space-y-6">
                            <motion.a
                                href="tel:+917579171111"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white rounded-2xl p-6 md:p-8 flex items-center group shadow-xl hover:shadow-primary-500/20 transition-all border border-gray-100"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0 mr-6">
                                    <Phone size={32} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Call Booking Direct</p>
                                    <p className="text-3xl md:text-4xl font-extrabold text-gray-900">+91 75791 71111</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://wa.me/917579171111"
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#25D366] text-white rounded-2xl p-6 flex items-center group shadow-xl shadow-[#25D366]/20 transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="w-14 h-14 rounded-full bg-white text-[#25D366] flex items-center justify-center shrink-0 mr-6 z-10">
                                    <FaWhatsapp size={28} />
                                </div>
                                <div className="z-10">
                                    <p className="text-xl md:text-2xl font-bold">Chat on WhatsApp</p>
                                    <p className="text-white/80 text-sm mt-1">Get instant replies & tour packages</p>
                                </div>
                            </motion.a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHighlight;
