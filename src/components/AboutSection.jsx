import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <p className="mt-4 text-lg">I am a web developer with a passion for creating beautiful and functional websites. My skills include...</p>
        {/* Add more about content here */}
      </div>
    </section>
  );
}

export default AboutSection;
