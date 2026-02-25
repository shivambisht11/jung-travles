import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ContactHighlight from '../components/home/ContactHighlight';
import Testimonials from '../components/home/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden"
        >
            <Hero />
            <ServicesSection />
            <WhyChooseUs />
            <ContactHighlight />
            <Testimonials />
        </motion.div>
    );
};

export default Home;
