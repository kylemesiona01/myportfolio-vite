import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa'; 
import programmingBg from '/src/assets/programming-background.jpg';
import avatarImg from '/src/assets/avatar.png'; 
const HeroSection = () => {
  return (
    <section id="home" className="relative text-white h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${programmingBg})`, opacity: 0.9 }}
          ></div>
        </motion.div>
      </div>
      <div className="relative z-10 flex items-center space-x-12">
       
        <motion.img
          src={avatarImg}
          alt="Avatar"
          className="w-80 h-80 rounded-full border-4 border-[#48CFCB] shadow-lg transform"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        />
        
        <motion.div
          className="text-center p-10 rounded-lg shadow-lg max-w-lg w-full flex flex-col items-center bg-opacity-20 border-4 border-[#48CFCB]"
          whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-6xl font-bold mb-4">
            Hi, I'm <span className="text-red-500">Kyle</span>
          </h2>
          <p className="mb-8 text-xl">
            A passionate student who is ready to learn and refine my skills as a Graphic Designer and Web Developer.
          </p>
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#48CFCB] text-white rounded-full text-sm font-medium hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            <span>Know more about me</span>
            <FaArrowDown className="ml-2 text-xl animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
