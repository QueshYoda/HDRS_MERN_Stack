import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-gray-800">HSRS</NavLink>
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="text-gray-600 hover:text-blue-500">Ana Sayfa</NavLink>
          {user ? (
            <>
              {user.role === 'admin' && <NavLink to="/admin" className="text-gray-600 hover:text-blue-500">Yönetici Paneli</NavLink> }
              {user.role === 'stylist' && <NavLink to="/panel" className="text-gray-600 hover:text-blue-500">Kuaför Paneli</NavLink> }
              <span className="text-gray-800 font-semibold">Hoş Geldin, {user.name}</span>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Çıkış Yap</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-gray-600 hover:text-blue-500">Giriş Yap</NavLink> 
              <NavLink to="/register" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Kayıt Ol</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;