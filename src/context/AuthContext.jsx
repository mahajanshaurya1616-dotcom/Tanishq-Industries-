import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    // Check if admin is in local storage
    const savedAdmin = localStorage.getItem('adminInfo');
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  });

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('/api/auth/login', { email, password });
      setAdmin(data);
      localStorage.setItem('adminInfo', JSON.stringify(data));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed',
      };
    }
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('adminInfo');
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
