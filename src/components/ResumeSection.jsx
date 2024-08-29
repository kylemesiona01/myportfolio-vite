import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import resumeImage from '/src/assets/resumepic.png';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Resume</h2>
        <div className="flex justify-center">
        <Zoom>
          <img 
            src={resumeImage}
            alt="Resume" 
            className="max-w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          />
        </Zoom>
        </div>
        <p className="mt-4 text-lg text-gray-600">Click on the image to zoom in and view details.</p>
      </div>
    </section>
  );
}

export default ResumeSection;
