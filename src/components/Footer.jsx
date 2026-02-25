import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-primary-500">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-6">Jung Tour & Travels</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Based in the beautiful mountains of Pithoragarh, Uttarakhand. We provide reliable, safe, and comfortable taxi and tour services across the region and beyond.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-primary-400 transition-colors flex items-center"><span className="mr-2">›</span> Home</Link></li>
                            <li><Link to="/services" className="hover:text-primary-400 transition-colors flex items-center"><span className="mr-2">›</span> Our Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-primary-400 transition-colors flex items-center"><span className="mr-2">›</span> Fleet Gallery</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors flex items-center"><span className="mr-2">›</span> Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-primary-500 mr-3 mt-1 shrink-0" size={20} />
                                <span>Near Roadways Bus Stand, Pithoragarh, Uttarakhand 262501</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-primary-500 mr-3 shrink-0" size={20} />
                                <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center">
                                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center hover:text-green-400 transition-colors">
                                    <FaWhatsapp className="text-primary-500 mr-3 shrink-0 text-xl group-hover:text-green-500" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Clock className="text-primary-500 mr-3 shrink-0" size={20} />
                                <span>Open 24/7 for you</span>
                            </li>
                        </ul>
                    </div>

                    {/* Mini Map */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Our Location</h4>
                        <div className="rounded-lg overflow-hidden h-40 bg-gray-800 border-2 border-gray-700">
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
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© {new Date().getFullYear()} Jung Tour & Travels. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center">
                        Designed with <span className="text-red-500 mx-1">❤</span> by Shivam
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
