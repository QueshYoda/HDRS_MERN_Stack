import React, { useState, useEffect } from 'react';
import api from '../../api/axios';

// Her bir kuaförün kartını oluşturacak alt bileşen
const StylistCard = ({ stylist }) => {
  const [services, setServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleServices = async () => {
    if (!isOpen && services.length === 0) {
      // Sadece ilk açıldığında veriyi çek
      try {
        const { data } = await api.get(`/services/stylist/${stylist._id}`);
        setServices(data);
      } catch (error) {
        console.error("Hizmetler alınamadı");
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <button onClick={toggleServices} className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
        <div>
          <p className="font-bold text-xl text-gray-800">{stylist.name}</p>
          <p className="text-sm text-gray-500">{stylist.specialty}</p>
        </div>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="p-4 border-t">
          {services.length > 0 ? (
            <ul className="divide-y">
              {services.map(s => (
                <li key={s._id} className="py-2 flex justify-between">
                  <span>{s.name}</span>
                  <span className="font-semibold">{s.price} TL</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Bu kuaföre ait hizmet bulunamadı.</p>
          )}
        </div>
      )}
    </div>
  );
};


// Tüm kuaförleri listeleyecek ana bileşen
const StylistPriceLists = () => {
  const [stylists, setStylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStylists = async () => {
      try {
        const { data } = await api.get('/auth/stylists');
        setStylists(data);
      } catch (error) {
        console.error("Kuaförler alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStylists();
  }, []);

  if (loading) return <p className="text-center">Kuaförler yükleniyor...</p>;

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {stylists.map(stylist => (
        <StylistCard key={stylist._id} stylist={stylist} />
      ))}
    </div>
  );
};

export default StylistPriceLists;