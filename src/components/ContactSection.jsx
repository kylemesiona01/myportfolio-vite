import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Connect with Me</h2>
        
        
        <div className="mb-8">
          <p className="text-lg text-gray-700">Phone Number: <span className="font-bold text-[#48CFCB]">+639154267063</span></p>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#48CFCB] transition">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/kylemesiona01" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#48CFCB] transition">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="mailto:v.mesiona.512841@umindanao.edu.ph" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#48CFCB] transition">
            <BiMailSend className="w-8 h-8" />
          </a>
          <a href="https://facebook.com/kylemesiona01" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#48CFCB] transition">
            <FaFacebook className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
