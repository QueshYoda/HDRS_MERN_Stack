import React, { useState, useEffect } from 'react';
import api from '../../api/axios';

const ReservationForm = () => {
  const [stylists, setStylists] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedStylist, setSelectedStylist] = useState('');
  const [formData, setFormData] = useState({ service: '', dateTime: '', processDetail: '' });
  const [message, setMessage] = useState('');

  // Sadece kuaförleri çek
  useEffect(() => {
    const fetchStylists = async () => {
      const { data } = await api.get('/auth/stylists');
      setStylists(data);
    };
    fetchStylists();
  }, []);

  // Seçilen kuaför değiştiğinde, o kuaförün hizmetlerini çek
  useEffect(() => {
    if (selectedStylist) {
      const fetchServices = async () => {
        const { data } = await api.get(`/services/stylist/${selectedStylist}`);
        setServices(data);
      };
      fetchServices();
    } else {
      setServices([]); // Kuaför seçimi kalkarsa hizmet listesini temizle
    }
  }, [selectedStylist]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleStylistChange = (e) => {
    setSelectedStylist(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await api.post('/reservations', { ...formData, stylist: selectedStylist });
      setMessage('Randevunuz başarıyla oluşturuldu!');
    } catch (error) {
      setMessage('Randevu oluşturulamadı. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
      {message && <p className="text-center mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">1. Adım: Kuaför Seçin</label>
          <select name="stylist" value={selectedStylist} onChange={handleStylistChange} required className="w-full px-3 py-2 mt-1 border rounded-md">
            <option value="">-- Bir Kuaför Seçin --</option>
            {stylists.map(s => <option key={s._id} value={s._id}>{s.name} ({s.specialty})</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">2. Adım: Hizmet Seçin</label>
          <select name="service" value={formData.service} onChange={handleChange} required disabled={!selectedStylist} className="w-full px-3 py-2 mt-1 border rounded-md disabled:bg-gray-200">
            <option value="">-- Önce Kuaför Seçin --</option>
            {services.map(s => <option key={s._id} value={s._id}>{s.name} - {s.price} TL</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">3. Adım: Tarih ve Saat</label>
          <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required className="w-full px-3 py-2 mt-1 border rounded-md" />
        </div>
        <button type="submit" className="w-full py-3 px-4 text-white font-bold bg-indigo-600 rounded-md hover:bg-indigo-700">Randevu Al</button>
      </form>
    </div>
  );
};

export default ReservationForm;