import React from 'react';
import ReservationForm from '../components/customer/ReservationForm';
import StylistPriceLists from '../components/customer/StylistPriceLists'; // Yeni bileşen
import { useAuth } from '../hooks/useAuth';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-12">
      <div className="text-center p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Kuaför Randevu Sistemine Hoş Geldiniz</h1>
        <p className="mt-4 text-lg text-gray-600">Kaliteli hizmet ve profesyonel dokunuşlarla kendinizi yenileyin.</p>
      </div>

      {user && (user.role === 'customer' || user.role === 'admin') && (
        <div id="make-reservation">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hemen Randevu Al</h2>
          <ReservationForm />
        </div>
      )}

      <div id="price-lists">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Kuaförlerimiz ve Hizmetleri</h2>
        <StylistPriceLists />
      </div>
    </div>
  );
};

export default HomePage;