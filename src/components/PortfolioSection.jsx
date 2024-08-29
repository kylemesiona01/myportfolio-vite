import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Portfolio Item */}
          <div className="relative group">
            <img src="/path/to/image.jpg" alt="Project" className="w-full h-48 object-cover rounded-lg transition-transform transform group-hover:scale-105"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-center">
                <h3 className="text-xl font-semibold">Dog Care Davao</h3>
                <p className="mt-2">.......</p>
                <a href="/path/to/project" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View Details</a>
              </div>
            </div>
          </div>
          {/* Repeat portfolio items as needed */}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
