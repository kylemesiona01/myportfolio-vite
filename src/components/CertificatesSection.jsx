
import React from 'react';
import mtaPic from '/src/assets/MTA.png';
import nc2Pic from '/src/assets/NC2.png'; 
import capstonePic from '/src/assets/capstone.png'; 

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="relative group cursor-pointer">
            <img src={nc2Pic} alt="Certificate 1" className="w-full h-64 object-cover rounded-lg transition-transform transform group-hover:scale-105 group-hover:rotate-3"/>
            <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-center px-4 py-6">
                <h3 className="text-xl font-semibold">NCII - Computer Systems Servicing</h3>
                <p className="mt-2">It involves tasks such as installing, configuring, troubleshooting, and maintaining computer systems and networks. This includes activities like diagnosing and fixing hardware and software issues, setting up computer systems and networks, and ensuring their proper functioning.</p>
                <a 
                  href={nc2Pic} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block px-4 py-2 bg-[#48CFCB] text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative group cursor-pointer">
            <img src={mtaPic} alt="Certificate 2" className="w-full h-64 object-cover rounded-lg transition-transform transform group-hover:scale-105 group-hover:rotate-3"/>
            <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-center px-4 py-6">
                <h3 className="text-xl font-semibold">MTA - Introduction to Programming using Java</h3>
                <p className="mt-2">MTA: Introduction to Programming Using Java certification demonstrate the skills and knowledge to write, debug and maintain well-formed, well documented Java code. The MTA program provides an appropriate entry point to a future career in technology.</p>
                <a 
                  href={mtaPic} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block px-4 py-2 bg-[#48CFCB] text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img src={capstonePic} alt="Certificate 3" className="w-full h-64 object-cover rounded-lg transition-transform transform group-hover:scale-105 group-hover:rotate-3"/>
            <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-center px-4 py-6">
                <h3 className="text-xl font-semibold">Public Presentation of Capstone Project</h3>
                <p className="mt-2">A CCE Research Forum Event showcasing the capstone projects of students in University Of Mindanao by the College of Computing Education.</p>
                <a 
                  href={capstonePic} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block px-4 py-2 bg-[#48CFCB] text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
