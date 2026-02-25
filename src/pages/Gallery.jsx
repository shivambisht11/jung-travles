import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1464039397811-476f6b539bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Mountain Taxi' },
    { id: 2, src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Highway Drive' },
    { id: 3, src: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Scenic Route' },
    { id: 4, src: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Temple Visit' },
    { id: 5, src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Tour Overview' },
    { id: 6, src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Night Drive' },
    { id: 7, src: 'https://images.unsplash.com/photo-1464039397811-476f6b539bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Winter Taxi' },
    { id: 8, src: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Snow Drive' },
    { id: 9, src: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Hilly Area' },
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 min-h-screen pb-20"
        >
            {/* Page Header */}
            <div className="bg-primary-900 text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our Fleet & Memories
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary-100 max-w-2xl mx-auto"
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
