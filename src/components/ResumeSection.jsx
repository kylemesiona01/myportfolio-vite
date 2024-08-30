import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import resumeImage from '/src/assets/resumepic.png';
import resumePdf from '/src/assets/resume_MESIONA.pdf'; 
const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Resume</h2>
        <div className="flex justify-center mb-4">
          <Zoom>
            <img 
              src={resumeImage}
              alt="Resume" 
              className="max-w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            />
          </Zoom>
        </div>
        <p className="text-lg text-gray-600 mb-4">Click on the image to zoom in and view details or download the PDF file by clicking the button below.</p>
        <a 
          href={resumePdf} 
          download="My_Resume.pdf" 
          className="inline-block px-6 py-3 bg-[#48CFCB] text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeSection;
