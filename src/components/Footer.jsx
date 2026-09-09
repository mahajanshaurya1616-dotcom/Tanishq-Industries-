import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t-[4px] border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.jpeg" alt="Tanishq Industries Logo" className="h-12 w-auto object-contain rounded-md bg-white p-1" />
              <h3 className="text-white text-2xl font-bold">
                <span className="text-secondary">Tanishq</span> Industries
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading manufacturer of high-quality industrial wires, cables, and hook-up wires. Delivering excellence and durability for all your electrical needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span>340/8, G.T. ROAD, Friends Colony Industrial Area, Shahdara, Delhi - 110095</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-secondary flex-shrink-0" size={20} />
                <span>+91 85860 80632</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-secondary flex-shrink-0" size={20} />
                <span>tanishqindustrieswires@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tanishq Industries Wires. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
