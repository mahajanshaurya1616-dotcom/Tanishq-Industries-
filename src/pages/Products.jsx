import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { FiSearch, FiShield } from 'react-icons/fi';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-primary mb-4">Our Products</h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Browse our comprehensive range of high-quality industrial and domestic wires.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-10 gap-4 border border-gray-100">
          <div className="relative w-full md:w-1/2">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products by name..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-auto">
            <select
              className="w-full md:w-64 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary transition-colors"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-secondary mx-auto"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm">
            <h3 className="text-2xl text-gray-500 font-medium">No products found.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        {/* Quality Assurance Banner */}
        <div className="mt-20 mb-4 bg-primary text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-white/10 p-4 rounded-full mr-6">
              <FiShield size={40} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">100% Quality Assured</h3>
              <p className="text-gray-300 max-w-xl">Every spool of wire goes through 5 stages of rigorous quality checks before it reaches you. We guarantee maximum conductivity and safety.</p>
            </div>
          </div>
          <a href="/about#process" className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-500/20 whitespace-nowrap">
            Our Process
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
