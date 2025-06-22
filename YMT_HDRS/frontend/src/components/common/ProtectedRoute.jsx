import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Yükleniyor...</div>; // Veya bir spinner bileşeni
  }

  if (!user) {
    // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Kullanıcının rolü yetersizse ana sayfaya yönlendir
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;