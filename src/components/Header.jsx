import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import profImage from '/src/assets/profpic.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src={profImage} 
            alt="Profile" 
            className="w-12 h-12 rounded-full border-2 border-gray-700 object-cover" 
          />
          <h1 className="text-2xl font-bold hover:text-[#48CFCB] transition-colors">Vincent Kyle C. Mesiona</h1>
        </div>

        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <ul className={`lg:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <li><a href="#home" className="hover:text-[#48CFCB] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#48CFCB] transition-colors">About</a></li>
          <li><a href="#portfolio" className="hover:text-[#48CFCB] transition-colors">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#48CFCB] transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
