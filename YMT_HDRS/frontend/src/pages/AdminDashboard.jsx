import React from 'react';
import StylistManager from '../components/admin/StylistManager';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Yönetici Paneli</h1>
      <StylistManager />
    </div>
  );
};

export default AdminDashboard;