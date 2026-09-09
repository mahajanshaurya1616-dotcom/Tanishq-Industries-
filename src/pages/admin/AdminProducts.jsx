import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { FiPlus, FiTrash2, FiEdit } from 'react-icons/fi';

const AdminProducts = () => {
  const { admin } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    applications: '',
    image: null,
  });
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const config = { headers: { Authorization: `Bearer ${admin.token}` } };
        await axios.delete(`/api/products/${id}`, config);
        fetchProducts();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (product) => {
    setEditId(product._id);
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      applications: product.applications,
      image: null,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const config = { 
      headers: { 
        Authorization: `Bearer ${admin.token}`,
        'Content-Type': 'multipart/form-data'
      } 
    };

    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('description', formData.description);
    data.append('applications', formData.applications);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      if (editId) {
        await axios.put(`/api/products/${editId}`, data, config);
      } else {
        await axios.post('/api/products', data, config);
      }
      setShowModal(false);
      setFormData({ name: '', category: '', description: '', applications: '', image: null });
      setEditId(null);
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert('Error saving product');
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Manage Products</h1>
        <button 
          onClick={() => {
            setEditId(null);
            setFormData({ name: '', category: '', description: '', applications: '', image: null });
            setShowModal(true);
          }}
          className="bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
        >
          <FiPlus className="mr-2" /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 font-semibold text-gray-700">Image</th>
              <th className="p-4 font-semibold text-gray-700">Name</th>
              <th className="p-4 font-semibold text-gray-700">Category</th>
              <th className="p-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="p-4 font-medium text-primary">{product.name}</td>
                <td className="p-4">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{product.category}</span>
                </td>
                <td className="p-4 flex space-x-3">
                  <button onClick={() => handleEdit(product)} className="text-blue-500 hover:text-blue-700 transition-colors">
                    <FiEdit size={20} />
                  </button>
                  <button onClick={() => handleDelete(product._id)} className="text-red-500 hover:text-red-700 transition-colors">
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="4" className="p-8 text-center text-gray-500">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 fade-in">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold text-primary mb-6">{editId ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input required type="text" className="w-full border p-2 rounded" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Category</label>
                <input required type="text" className="w-full border p-2 rounded" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Description</label>
                <textarea required className="w-full border p-2 rounded h-24" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Applications</label>
                <textarea className="w-full border p-2 rounded h-24" value={formData.applications} onChange={e => setFormData({...formData, applications: e.target.value})}></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Image {editId && '(Leave blank to keep current)'}</label>
                <input type="file" accept="image/*" onChange={e => setFormData({...formData, image: e.target.files[0]})} className="w-full border p-2 rounded" required={!editId} />
              </div>
              
              <div className="flex justify-end space-x-4 mt-8">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">Cancel</button>
                <button type="submit" disabled={loading} className="px-4 py-2 bg-secondary text-white rounded hover:bg-orange-600 disabled:opacity-50">
                  {loading ? 'Saving...' : 'Save Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
