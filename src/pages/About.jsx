import React from 'react';
import { FiTarget, FiUsers, FiHeart, FiZap } from 'react-icons/fi';

const About = () => {
  return (
    <div className="py-16 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">About Tanishq Industries</h1>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a leading manufacturer of high-quality industrial wires, dedicated to providing safe, reliable, and efficient solutions for a wide range of applications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <div className="bg-gray-50 p-10 rounded-2xl border-l-4 border-secondary shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To deliver superior quality wires and cables that empower industries, while maintaining the highest standards of safety, sustainability, and customer satisfaction.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-gray-50 p-10 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the most trusted and innovative wire manufacturing company globally, continuously evolving our technology to meet the dynamic needs of the modern world.
            </p>
          </div>
        </div>

        {/* Infrastructure / Process */}
        <div id="process" className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">World-Class Infrastructure</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/infrastructure.jpg" 
                alt="Factory Infrastructure" 
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Our manufacturing facility spans over a massive area, equipped with the latest machinery for wire drawing, annealing, bunching, and extrusion. 
              </p>
              <p>
                We have a dedicated in-house testing laboratory where every batch undergoes rigorous electrical and mechanical testing. This ensures that every inch of wire that leaves our premises is completely flawless and compliant with all safety standards.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition-colors group">
              <FiTarget size={40} className="mx-auto text-secondary mb-4 group-hover:text-white" />
              <h3 className="text-xl font-bold mb-2">Precision</h3>
              <p className="text-gray-600 group-hover:text-gray-300">Uncompromising accuracy in every single wire we produce.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition-colors group">
              <FiUsers size={40} className="mx-auto text-secondary mb-4 group-hover:text-white" />
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-gray-600 group-hover:text-gray-300">Dedicated to meeting and exceeding client expectations.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition-colors group">
              <FiHeart size={40} className="mx-auto text-secondary mb-4 group-hover:text-white" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 group-hover:text-gray-300">Honesty and transparency in all our business dealings.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition-colors group">
              <FiZap size={40} className="mx-auto text-secondary mb-4 group-hover:text-white" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 group-hover:text-gray-300">Continuously adopting the latest technologies.</p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Leadership</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">Our experienced team of professionals who drive the vision and strategy of Tanishq Industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {[
              { 
                name: 'Naveen Bansal', 
                role: 'Head of Operations',
                desc: 'Oversees the entire manufacturing process, supply chain management, and daily facility operations. Ensures that our factory operates at peak efficiency while maintaining strict safety standards.'
              },
              { 
                name: 'Vikash Kumar', 
                role: 'Quality Assurance Lead',
                desc: 'Directs the in-house testing laboratory and quality control protocols. Responsible for guaranteeing that every spool of wire meets rigorous electrical, mechanical, and safety compliance standards.'
              }
            ].map((leader, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center">
                <h3 className="text-2xl font-bold text-primary mb-1">{leader.name}</h3>
                <h4 className="text-secondary font-bold text-lg mb-4">{leader.role}</h4>
                <p className="text-gray-600 leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
