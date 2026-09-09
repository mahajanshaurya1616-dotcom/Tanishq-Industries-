import { Link } from 'react-router-dom';
import { FiShield, FiSettings, FiCheckCircle, FiArrowRight, FiAward, FiUsers, FiGlobe, FiStar } from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: <FiShield size={40} className="text-secondary" />,
      title: 'Premium Quality',
      desc: 'Manufactured using pure copper and high-grade insulation for maximum safety.',
    },
    {
      icon: <FiSettings size={40} className="text-secondary" />,
      title: 'Advanced Tech',
      desc: 'State-of-the-art machinery ensuring precision and durability in every wire.',
    },
    {
      icon: <FiCheckCircle size={40} className="text-secondary" />,
      title: 'Certified Products',
      desc: 'All our products meet international safety and quality standards.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden bg-gray-900">
        {/* Original Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        {/* Neutral dark overlay for text readability (removes blue tint) */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-40 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl drop-shadow-lg">
            Powering Your <span className="text-secondary">Progress</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10 leading-relaxed drop-shadow-md">
            Leading manufacturers of Industrial Wires, Cables, and Hook-up Wires. Reliable, safe, and built for the future.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/products"
              className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 shadow-xl shadow-orange-500/40"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border-2 border-white/50 hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Tanishq?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feat.title}</h3>
                <p className="text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Process */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop" 
              alt="Manufacturing Process" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Precision Manufacturing</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Tanishq Industries, we employ cutting-edge manufacturing processes. From copper drawing and annealing to extrusion and quality testing, every step is monitored to ensure the final product delivers flawless conductivity and unmatched durability.
            </p>
            <Link
              to="/about"
              className="text-secondary font-bold text-lg hover:underline inline-flex items-center"
            >
              Learn more about our process
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-slate-900 text-white relative overflow-hidden">
        {/* Subtle texture for the stats background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <FiUsers size={48} className="mx-auto text-secondary mb-4" />
              <h3 className="text-4xl font-extrabold mb-2">500+</h3>
              <p className="text-gray-300 font-medium tracking-wide uppercase">Happy Clients</p>
            </div>
            <div>
              <FiGlobe size={48} className="mx-auto text-secondary mb-4" />
              <h3 className="text-4xl font-extrabold mb-2">20+</h3>
              <p className="text-gray-300 font-medium tracking-wide uppercase">States Supplied</p>
            </div>
            <div>
              <FiAward size={48} className="mx-auto text-secondary mb-4" />
              <h3 className="text-4xl font-extrabold mb-2">12</h3>
              <p className="text-gray-300 font-medium tracking-wide uppercase">Years Experience</p>
            </div>
            <div>
              <FiSettings size={48} className="mx-auto text-secondary mb-4" />
              <h3 className="text-4xl font-extrabold mb-2">10M+</h3>
              <p className="text-gray-300 font-medium tracking-wide uppercase">Meters Manufactured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Desai',
                role: 'Operations Head',
                initials: 'RD',
                review: "We have been sourcing submersible wires from Tanishq Industries for our agricultural pump sets. The durability and copper quality are unmatched. A highly reliable manufacturing partner for our bulk requirements."
              },
              {
                name: 'Sanjay Gupta',
                role: 'Procurement Manager',
                initials: 'SG',
                review: "Their multi-strand flexible wires are perfect for our industrial panel boards. What impressed us most is their strict adherence to safety standards and their ability to deliver on time across different states."
              },
              {
                name: 'Amit Singhania',
                role: 'Managing Director',
                initials: 'AS',
                review: "Finding a manufacturer who maintains consistent gauge accuracy is rare. Tanishq has never disappointed us in the last 4 years. Their hook-up wires are top-notch and their pricing is extremely competitive."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 flex-grow">"{testimonial.review}"</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
