import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FiArrowLeft, FiCheckCircle, FiSettings, FiTruck, FiShield } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product', error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-32">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-secondary mx-auto"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl font-bold text-gray-600">Product not found.</h2>
        <Link to="/products" className="text-secondary hover:underline mt-4 inline-block">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
          <FiArrowLeft className="mr-2" /> Back to all products
        </Link>
        
        <div className="flex flex-col md:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-12">
          {/* Image */}
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-full flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[500px] object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=Wire+Image';
                }}
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2">{product.category}</span>
            <h1 className="text-4xl font-extrabold text-primary mb-6">{product.name}</h1>
            
            <div className="prose text-gray-600 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Description</h3>
              <p className="leading-relaxed">{product.description}</p>
            </div>

            {product.applications && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <FiCheckCircle className="text-secondary mr-2" /> Applications
                </h3>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {product.applications}
                </p>
              </div>
            )}

            <div className="mt-auto">
              <Link
                to="/contact"
                state={{ enquiryProduct: product.name }}
                className="w-full sm:w-auto inline-block text-center bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Tech Specs and Warranty Section */}
        <div className="mt-20 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tech Specs */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <FiSettings className="mr-3 text-secondary" /> Technical Specifications
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-semibold text-gray-700 w-1/3">Conductor Material</td>
                      <td className="py-4 text-gray-600">99.97% Pure Electrolytic Grade Copper</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-semibold text-gray-700">Insulation</td>
                      <td className="py-4 text-gray-600">Flame Retardant PVC (FR / FRLS available)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-semibold text-gray-700">Voltage Grade</td>
                      <td className="py-4 text-gray-600">Up to 1100V</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-semibold text-gray-700">Standard Color Options</td>
                      <td className="py-4 text-gray-600 flex gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-600 shadow-sm border border-gray-200" title="Red"></span>
                        <span className="w-6 h-6 rounded-full bg-black shadow-sm border border-gray-200" title="Black"></span>
                        <span className="w-6 h-6 rounded-full bg-blue-600 shadow-sm border border-gray-200" title="Blue"></span>
                        <span className="w-6 h-6 rounded-full bg-green-500 shadow-sm border border-gray-200" title="Green"></span>
                        <span className="w-6 h-6 rounded-full bg-yellow-400 shadow-sm border border-gray-200" title="Yellow"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Delivery & Warranty */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <FiTruck size={32} className="text-secondary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-2">Fast & Secure Delivery</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We ensure that all bulk orders are packaged securely in weather-proof spools and shipped via our trusted logistics partners. Standard delivery takes 3-5 working days within the country.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <FiShield size={32} className="text-secondary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-2">Quality Warranty</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tanishq Industries provides a comprehensive manufacturing warranty against any material defects. Every wire is CE marked and ISI certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
