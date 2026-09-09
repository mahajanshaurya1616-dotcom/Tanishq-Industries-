import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { FiTrash2, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';

const AdminEnquiries = () => {
  const { admin } = useContext(AuthContext);
  const [enquiries, setEnquiries] = useState([]);

  const fetchEnquiries = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${admin.token}` } };
      const { data } = await axios.get('/api/enquiry', config);
      setEnquiries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        const config = { headers: { Authorization: `Bearer ${admin.token}` } };
        await axios.delete(`/api/enquiry/${id}`, config);
        fetchEnquiries();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Customer Enquiries</h1>

      <div className="space-y-6">
        {enquiries.map((enq) => (
          <div key={enq._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold text-primary mr-4">{enq.name}</h3>
                <span className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  <FiCalendar className="mr-2" />
                  {new Date(enq.createdAt).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4 text-gray-600 text-sm">
                <span className="flex items-center"><FiMail className="mr-2 text-secondary" /> {enq.email}</span>
                <span className="flex items-center"><FiPhone className="mr-2 text-secondary" /> {enq.phone}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                <p>{enq.message}</p>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 md:ml-6">
              <button 
                onClick={() => handleDelete(enq._id)}
                className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-3 rounded-lg transition-colors flex items-center"
                title="Delete Enquiry"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        ))}
        
        {enquiries.length === 0 && (
          <div className="bg-white p-12 text-center rounded-xl border border-gray-100 text-gray-500">
            No enquiries found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEnquiries;
