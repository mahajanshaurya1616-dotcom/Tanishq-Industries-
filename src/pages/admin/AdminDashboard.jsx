import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { FiBox, FiMessageSquare } from 'react-icons/fi';

const AdminDashboard = () => {
  const { admin } = useContext(AuthContext);
  const [stats, setStats] = useState({ products: 0, enquiries: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${admin.token}` },
        };
        const [prodRes, enqRes] = await Promise.all([
          axios.get('/api/products'),
          axios.get('/api/enquiry', config)
        ]);

        setStats({
          products: prodRes.data.length,
          enquiries: enqRes.data.length,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard stats', error);
        setLoading(false);
      }
    };
    if (admin) fetchStats();
  }, [admin]);

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Products Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-blue-100 rounded-full mr-6">
            <FiBox className="text-blue-600" size={32} />
          </div>
          <div>
            <p className="text-gray-500 font-medium">Total Products</p>
            <h2 className="text-4xl font-bold text-primary">{stats.products}</h2>
          </div>
        </div>

        {/* Enquiries Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-orange-100 rounded-full mr-6">
            <FiMessageSquare className="text-secondary" size={32} />
          </div>
          <div>
            <p className="text-gray-500 font-medium">Total Enquiries</p>
            <h2 className="text-4xl font-bold text-primary">{stats.enquiries}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
