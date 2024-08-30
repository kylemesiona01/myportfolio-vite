import React from 'react';
import workImg from '/src/assets/DogCareDavao.png';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="relative group flex justify-center">
            <img src={workImg} alt="Project" className="w-full h-48 object-cover rounded-lg transition-transform transform group-hover:scale-105"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-center px-4 py-6">
                <h3 className="text-xl font-semibold">Dog Care Davao</h3>
                <p className="mt-2">A Progressive Web App Information Management System for Dog Pound Davao Using GIS with Analytics Reporting API.</p>
                <a href="/path/to/project" className="mt-4 inline-block px-4 py-2 bg-[#48CFCB] text-white rounded-lg hover:bg-blue-700 transition">View Details</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
