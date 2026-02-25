import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send data to backend here.
        // Since UI only, show success toast
        setShowToast(true);
        setFormData({ name: '', phone: '', message: '' });

        // Hide toast after 3 seconds
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 min-h-screen pb-20 relative"
        >
            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 border border-gray-700"
                    >
                        <CheckCircle2 className="text-green-400" size={24} />
                        <span className="font-medium text-lg">Thank you! We will contact you soon.</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page Header */}
            <div className="bg-primary-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 filter grayscale"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Contact <span className="text-secondary-400">Jung Tour and Travels</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary-100 max-w-2xl mx-auto"
                    >
                        We are available 24/7. Reach out to us for bookings, inquiries, or custom tour packages.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <motion.a
                            href="tel:+917579171111"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 block"
                        >
                            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                                <Phone className="text-primary-600 group-hover:text-white transition-colors" size={32} />
                            </div>
                            <h3 className="text-gray-500 font-semibold uppercase tracking-wider text-sm mb-2">Call Us 24/7</h3>
                            <p className="text-3xl font-bold text-gray-900">+91 75791 71111</p>
                        </motion.a>

                        <motion.a
                            href="https://wa.me/917579171111"
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 block"
                        >
                            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#25D366] transition-colors">
                                <FaWhatsapp className="text-[#25D366] group-hover:text-white transition-colors" size={36} />
                            </div>
                            <h3 className="text-gray-500 font-semibold uppercase tracking-wider text-sm mb-2">Message Us</h3>
                            <p className="text-2xl font-bold text-gray-900">Chat on WhatsApp</p>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mb-6">
                                <MapPin className="text-secondary-600" size={32} />
                            </div>
                            <h3 className="text-gray-500 font-semibold uppercase tracking-wider text-sm mb-2">Our Office</h3>
                            <p className="text-lg font-bold text-gray-900 leading-relaxed">
                                Near Roadways Bus Stand,<br />
                                Pithoragarh, Uttarakhand<br />
                                262501
                            </p>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                        <div className="p-10 md:p-14">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us an Inquiry</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-800"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-800"
                                            placeholder="+91 99999 99999"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message / Travel Details</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-800 resize-none"
                                        placeholder="Tell us about your trip planning, pickup location, destination, and dates..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-primary text-white font-bold text-lg rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1 transition-all flex items-center justify-center group"
                                >
                                    <span>Send Inquiry</span>
                                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Map Embed */}
                        <div className="h-80 bg-gray-200 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27643.085854743258!2d80.19894101861788!3d29.582823055480572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0d84346bc0633%3A0xea8f7c97df77acaf!2sPithoragarh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1714567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map Pithoragarh"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>

        </motion.div>
    );
};

export default Contact;
