import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaMailBulk, FaVoicemail, FaMailchimp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/kylemesiona01" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-800 transition">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="mailto:v.mesiona.512841@umindanao.edu.ph" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition">
            <BiMailSend className="w-8 h-8" />
          </a>
          <a href="https://facebook.com/kylemesiona01" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
            <FaFacebook className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
