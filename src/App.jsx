import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ResumeSection from './components/ResumeSection'; // Import the ResumeSection

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ResumeSection /> {/* Add the ResumeSection */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
