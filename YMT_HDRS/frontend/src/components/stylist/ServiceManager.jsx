import React, { useState, useEffect } from 'react';
import api from '../../api/axios';

const ServiceManager = () => {
  const [services, setServices] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const fetchMyServices = async () => {
    try {
      const { data } = await api.get('/services/my-services');
      setServices(data);
    } catch (error) {
      console.error("Hizmetler alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchMyServices();
  }, []);

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      await api.post('/services', { name, description, price });
      // Formu temizle ve listeyi yenile
      setName('');
      setDescription('');
      setPrice('');
      fetchMyServices();
    } catch (error) {
      alert('Hizmet eklenemedi!');
    }
  };
  
  const handleDeleteService = async (id) => {
    if (window.confirm('Bu hizmeti silmek istediğinizden emin misiniz?')) {
      try {
        await api.delete(`/services/${id}`);
        fetchMyServices(); // Listeyi yenile
      } catch (error) {
        alert('Hizmet silinemedi!');
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Yeni Hizmet Ekle</h3>
        <form onSubmit={handleAddService} className="space-y-4">
          <input type="text" placeholder="Hizmet Adı (Örn: Modern Kesim)" value={name} onChange={e => setName(e.target.value)} required className="w-full p-2 border rounded"/>
          <textarea placeholder="Açıklama" value={description} onChange={e => setDescription(e.target.value)} required className="w-full p-2 border rounded"></textarea>
          <input type="number" placeholder="Fiyat (TL)" value={price} onChange={e => setPrice(e.target.value)} required className="w-full p-2 border rounded"/>
          <button type="submit" className="w-full py-2 text-white bg-green-600 rounded">Hizmeti Ekle</button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Mevcut Hizmetlerim</h3>
        <ul className="space-y-2">
          {services.map(s => (
            <li key={s._id} className="p-3 bg-gray-50 rounded border flex justify-between items-center">
              <span>{s.name} - <strong>{s.price} TL</strong></span>
              <button onClick={() => handleDeleteService(s._id)} className="text-red-500 hover:text-red-700">Sil</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceManager;