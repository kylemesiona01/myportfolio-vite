

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ResumeSection from './components/ResumeSection';
import CertificatesSection from './components/CertificatesSection'; // Import the new section

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <CertificatesSection /> 
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
