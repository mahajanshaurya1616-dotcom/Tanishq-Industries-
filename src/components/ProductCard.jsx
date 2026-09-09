import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
        {/* We use an image tag if product.image exists. Fallback styling if image fails to load. */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x300?text=Wire+Image';
          }}
        />
        <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1" title={product.name}>
          {product.name}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
          {product.description}
        </p>
        <Link
          to={`/products/${product._id}`}
          className="inline-flex items-center text-secondary font-semibold hover:text-orange-600 transition-colors group-hover:underline"
        >
          View Details
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
