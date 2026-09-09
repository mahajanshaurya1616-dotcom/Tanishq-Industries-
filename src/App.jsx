import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminEnquiries from './pages/admin/AdminEnquiries';

const ProtectedRoute = ({ children }) => {
  const { admin } = useContext(AuthContext);
  return admin ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Dashboard Routes with AdminLayout */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="enquiries" element={<AdminEnquiries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
