import React from 'react';
import ServiceManager from '../components/stylist/ServiceManager'; // Yeni bileşen
import { useAuth } from '../hooks/useAuth';

const StylistPanel = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Merhaba, {user?.name}!</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Hizmet ve Fiyat Listem</h2>
        <p className="mb-6 text-gray-600">Bu bölümden müşterilere sunduğun hizmetleri ve fiyatlarını yönetebilirsin.</p>
        <ServiceManager />
      </div>
    </div>
  );
};

export default StylistPanel;