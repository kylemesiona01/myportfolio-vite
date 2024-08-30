import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import PhotoshopIcon from '/src/pages/PhotoshopIcon.jsx'; 

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-4xl" />, percentage: 90 },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-4xl" />, percentage: 85 },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-4xl" />, percentage: 80 },
  { name: 'React', icon: <FaReact className="text-blue-400 text-4xl" />, percentage: 75 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" />, percentage: 50 },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600 text-4xl" />, percentage: 90 },
  { name: 'Photoshop', icon: <PhotoshopIcon className="text-blue-500 text-4xl" />, percentage: 90 },
  { name: 'Vite.js', icon: <PhotoshopIcon className="text-blue-500 text-4xl" />, percentage: 90 }
];

const SkillBar = ({ percentage }) => (
  <div className="relative mt-2">
    <div className="bg-gray-300 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <p className="mb-8 text-lg">I am a web developer with a passion for creating beautiful and functional websites. My skills include:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <SkillBar percentage={skill.percentage} />
              <p className="mt-2 text-gray-600">{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
