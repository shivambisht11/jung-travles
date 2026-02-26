import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
    { id: 1, src: '/images/fleet/vehicle-1.jpg', alt: 'Fleet Vehicle - Swift Dzire Front' },
    { id: 2, src: '/images/fleet/vehicle-2.jpg', alt: 'Fleet Vehicle - Swift Dzire Grille' },
    { id: 3, src: '/images/fleet/vehicle-3.jpg', alt: 'Fleet Vehicle - Swift Dzire Night' },
    { id: 4, src: '/images/fleet/vehicle-4.jpg', alt: 'Fleet Vehicle - Tempo Traveller' },
    { id: 5, src: '/images/fleet/vehicle-5.jpg', alt: 'Fleet Vehicle - Swift Dzire White' },
    { id: 6, src: '/images/fleet/vehicle-6.jpg', alt: 'Fleet Vehicle - Swift Dzire Daylight' },
    { id: 7, src: '/images/fleet/vehicle-7.jpg', alt: 'Fleet Vehicle - Swift Dzire City' },
    { id: 8, src: '/images/fleet/vehicle-8.jpg', alt: 'Fleet Vehicle - Swift Dzire Night Luggage' },
    { id: 9, src: '/images/packages/mountain-1.jpg', alt: 'Mountain Landscape' },
    { id: 10, src: '/images/packages/mountain-2.jpg', alt: 'Mountain Landscape' },
    { id: 11, src: '/images/packages/mountain-3.jpg', alt: 'Mountain Landscape' },
    { id: 12, src: '/images/packages/mountain-4.jpg', alt: 'Mountain Landscape' },
    { id: 13, src: '/images/packages/mountain-5.jpg', alt: 'Mountain Landscape' },
    { id: 14, src: '/images/packages/mountain-6.jpg', alt: 'Mountain Landscape' },
    { id: 15, src: '/images/packages/mountain-7.jpg', alt: 'Mountain Landscape' },
    { id: 16, src: '/images/packages/mountain-8.jpg', alt: 'Mountain Landscape' },
    { id: 17, src: '/images/packages/mountain-9.jpg', alt: 'Mountain Landscape' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <motion.div
            id="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 pb-20 pt-10"
        >
            {/* Page Header */}
            <div className="text-center pt-10 pb-4 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
                    >
                        Our Fleet & <span className="text-gradient">Memories</span>
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        A glimpse into our pristine vehicles and the breathtaking journeys we've undertaken.
                    </motion.p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md bg-white aspect-[4/3]"
                            onClick={() => setSelectedImage(img)}
                        >
                            <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                                <ZoomIn className="text-white w-10 h-10 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                            </div>
                            <img
                                src={img.src}
                                alt={img.alt}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Gallery;
