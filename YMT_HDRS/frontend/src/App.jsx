import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ProtectedRoute from './components/common/ProtectedRoute';
// Sayfaları import et
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import StylistPanel from './pages/StylistPanel';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6">
        <Routes>
          {/* Herkesin Erişebileceği Rotalar */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Korumalı Rotalar */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/panel" 
            element={
              <ProtectedRoute allowedRoles={['stylist']}>
                <StylistPanel />
              </ProtectedRoute>
            } 
          />

          {/* Bulunamayan Sayfalar İçin Rota */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;