import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-[-1]">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-70"></div>
        <motion.div
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="w-full h-full bg-[url('/path/to/hero-background.jpg')] bg-cover bg-center opacity-50"></div>
        </motion.div>
      </div>
      <div className="text-center z-10">
        <h2 className="text-5xl font-bold">
          Hi, I'm <span className="text-red-500">"Kyle"</span>
        </h2>
        <p className="mt-4 text-lg">A passionate student who is ready to learn and refine my skills as a Graphic Designer and Web Developer.</p>
        <a href="#portfolio" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View My Work</a>
      </div>
    </section>
  );
}

export default HeroSection;
