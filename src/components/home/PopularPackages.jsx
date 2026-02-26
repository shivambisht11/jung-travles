import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, IndianRupee, Check, X, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { packagesData } from '../../data/packagesData';

const PopularPackages = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedPackage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPackage]);

    return (
        <section id="packages" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary-50 to-transparent -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full font-semibold text-sm mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        <span>Exclusive Journeys</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900"
                    >
                        Our Premium <span className="text-gradient">Tour Packages</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Carefully crafted itineraries for the most spiritual and adventurous destinations in the Himalayas. Let us handle the details while you experience the magic.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packagesData.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group flex flex-col hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 bg-gray-200"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{pkg.title}</h3>
                                    <div className="flex items-center text-primary-200 text-sm">
                                        <Clock size={16} className="mr-1" />
                                        {pkg.duration}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-100">
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Starting From</p>
                                        <p className="text-2xl font-black text-gray-900 flex items-center">
                                            {pkg.price}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6 flex-grow">
                                    <div className="flex items-start text-sm text-gray-600">
                                        <MapPin className="text-primary-500 mr-2 shrink-0 mt-0.5" size={18} />
                                        <p className="line-clamp-2">{pkg.route}</p>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Check className="text-green-500 mr-2 shrink-0" size={18} />
                                        Meals Included
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Check className="text-green-500 mr-2 shrink-0" size={18} />
                                        Premium Transportation
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedPackage(pkg)}
                                    className="w-full bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-xl font-bold transition-colors border border-primary-100 mt-auto"
                                >
                                    View Full Itinerary
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedPackage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedPackage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative h-64 sm:h-80 shrink-0">
                                <img
                                    src={selectedPackage.image}
                                    alt={selectedPackage.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                                <button
                                    onClick={() => setSelectedPackage(null)}
                                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors z-10"
                                >
                                    <X size={24} />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                                    <div className="inline-flex items-center space-x-2 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                                        <Clock size={12} />
                                        <span>{selectedPackage.duration}</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-2">
                                        {selectedPackage.title}
                                    </h2>
                                    <p className="text-gray-300 flex items-center text-sm sm:text-base">
                                        <MapPin size={16} className="mr-2" />
                                        {selectedPackage.route}
                                    </p>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="overflow-y-auto p-6 sm:p-10 flex-grow bg-gray-50">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                    {/* Left Content - Itinerary */}
                                    <div className="lg:col-span-2 space-y-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                                Day-Wise Itinerary
                                            </h3>
                                            <div className="space-y-6">
                                                {selectedPackage.itinerary.map((day) => (
                                                    <div key={day.day} className="relative pl-8 sm:pl-10 before:absolute before:left-[11px] sm:before:left-[15px] before:top-8 before:bottom-[-24px] before:w-0.5 before:bg-primary-200 last:before:hidden">
                                                        <div className="absolute left-0 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-100 border-4 border-white flex items-center justify-center shadow-sm">
                                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-600"></div>
                                                        </div>
                                                        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                                                            <div className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-bold mb-3">
                                                                DAY {day.day}
                                                            </div>
                                                            <h4 className="text-lg font-bold text-gray-900 mb-2">{day.title}</h4>
                                                            <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                                                {day.description}
                                                            </p>
                                                            <div className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md">
                                                                🍽️ Meals: {day.meals}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Extra Gallery Photos */}
                                        {selectedPackage.gallery && selectedPackage.gallery.length > 0 && (
                                            <div className="pt-8 border-t border-gray-200">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                                    More Tour Photos
                                                </h3>
                                                <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(2, selectedPackage.gallery.length)} gap-4`}>
                                                    {selectedPackage.gallery.map((img, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={img}
                                                            alt={`${selectedPackage.title} tour photo ${idx + 1}`}
                                                            width={600}
                                                            height={400}
                                                            className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300 bg-gray-200"
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Content - Info & Booking */}
                                    <div className="lg:col-span-1 space-y-6">
                                        {/* Pricing Box */}
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 sticky top-0">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Package Tariff</h3>
                                            <div className="text-3xl font-black text-gray-900 mb-2">{selectedPackage.price}</div>
                                            <p className="text-xs font-medium text-gray-500 mb-6">{selectedPackage.priceDetails}</p>

                                            <div className="space-y-3 mb-8 text-sm">
                                                <div className="font-bold text-gray-900 mb-2">Inclusions:</div>
                                                {selectedPackage.inclusions.map((item, i) => (
                                                    <div key={i} className="flex items-start text-gray-600">
                                                        <Check size={16} className="text-emerald-500 mr-2 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                                <div className="font-bold text-gray-900 mt-4 mb-2">Exclusions:</div>
                                                {selectedPackage.exclusions.map((item, i) => (
                                                    <div key={i} className="flex items-start text-gray-500">
                                                        <X size={16} className="text-red-400 mr-2 shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-3 pt-6 border-t border-gray-100">
                                                <p className="text-center text-sm font-bold text-gray-900 mb-2">Book This Package</p>
                                                <a
                                                    href={`https://wa.me/917579171111?text=Hello%20Jung%20Travels,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(selectedPackage.title)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="w-full flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                                                >
                                                    <FaWhatsapp size={20} className="mr-2" /> WhatsApp Inquiry
                                                </a>
                                                <a
                                                    href="tel:+917579171111"
                                                    className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                                                >
                                                    <Phone size={18} className="mr-2" /> Call Harsh Jung
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PopularPackages;
