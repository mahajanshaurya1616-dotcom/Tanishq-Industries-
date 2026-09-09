import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiHelpCircle, FiClock } from 'react-icons/fi';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (location.state?.enquiryProduct) {
      setFormData(prev => ({
        ...prev,
        message: `I would like to enquire about: ${location.state.enquiryProduct}`
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/enquiry', formData);
      setStatus({ type: 'success', msg: 'Enquiry sent successfully! We will get back to you soon.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', msg: 'Failed to send enquiry. Please try again.' });
    }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or need a bulk order quote? Fill out the form below and our team will get in touch.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary rounded-full opacity-20 blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">Get in Touch</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <FiMapPin size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-300 mt-1">340/8, G.T. ROAD, Friends Colony Industrial Area, Shahdara, Delhi - 110095</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <FiPhone size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-300 mt-1">+91 85860 80632</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <FiMail size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-300 mt-1">tanishqindustrieswires@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              
              {status && (
                <div className={`p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.msg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      placeholder="youremail@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message / Enquiry Details</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-transform hover:scale-[1.02] shadow-lg shadow-orange-500/20 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { q: "What is the minimum order quantity for bulk wires?", a: "For industrial cables, the MOQ is typically 500 meters. However, we can accommodate smaller custom orders depending on the specification." },
            { q: "Do you ship nationwide?", a: "Yes, we ship across different states in India with complete logistics support and compliance documentation." },
            { q: "Are your products certified?", a: "Absolutely. All our products are ISO 9001:2015 certified and meet stringent international safety standards including CE and RoHS." },
            { q: "How long does delivery take?", a: "Domestic orders are fulfilled within 3-5 business days. International shipping times vary between 2-4 weeks depending on the destination." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start">
              <FiHelpCircle className="text-secondary mt-1 mr-4 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-primary text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-primary text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl bg-[url('https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay bg-opacity-90">
          <div className="flex items-center mb-6 md:mb-0">
            <FiClock size={48} className="text-secondary mr-6" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-300">We are open and ready to serve you during these hours.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-lg">
            <div>
              <span className="font-semibold text-secondary">Mon - Fri:</span> <span className="ml-2">9:00 AM - 6:00 PM</span>
            </div>
            <div>
              <span className="font-semibold text-secondary">Saturday:</span> <span className="ml-2">9:00 AM - 2:00 PM</span>
            </div>
            <div>
              <span className="font-semibold text-secondary">Sunday:</span> <span className="ml-2">Closed</span>
            </div>
            <div>
              <span className="font-semibold text-secondary">Support:</span> <span className="ml-2">24/7 Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
