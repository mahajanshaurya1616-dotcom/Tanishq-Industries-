import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiHome, FiBox, FiMessageSquare, FiLogOut } from 'react-icons/fi';

const AdminLayout = () => {
  const { admin, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <FiHome /> },
    { name: 'Products', path: '/admin/products', icon: <FiBox /> },
    { name: 'Enquiries', path: '/admin/enquiries', icon: <FiMessageSquare /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col">
        <div className="p-6 border-b border-gray-700/50 mb-4">
          <div className="flex items-center space-x-3 mb-2">
            <img src="/logo.jpeg" alt="Tanishq Logo" className="h-10 w-auto object-contain rounded-md bg-white p-1" />
            <h2 className="text-xl font-bold tracking-wider text-secondary">Admin Portal</h2>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                location.pathname === item.path ? 'bg-secondary text-white' : 'hover:bg-dark text-gray-300'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-gray-700/50">
          {admin && (
            <div className="mb-4 flex items-center space-x-3 bg-gray-800/50 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                {admin.email ? admin.email.charAt(0).toUpperCase() : 'A'}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">{admin.email || 'Admin'}</p>
                <p className="text-xs text-secondary capitalize">{admin.role || 'Administrator'}</p>
              </div>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 p-3 w-full text-left rounded-lg hover:bg-red-600 transition-colors text-gray-300 hover:text-white"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 fade-in">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
