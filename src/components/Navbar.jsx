import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <img src="/logo.jpeg" alt="Tanishq Industries Logo" className="h-12 w-auto object-contain rounded-md bg-white p-1" />
              <div className="flex flex-col">
                <span className="text-secondary text-2xl font-bold leading-none">Tanishq</span>
                <span className="text-white text-sm font-medium tracking-widest hidden sm:block">INDUSTRIES</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path ? 'text-secondary border-b-2 border-secondary' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-gray-700 fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  location.pathname === link.path ? 'text-secondary bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
