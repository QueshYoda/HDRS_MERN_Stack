import React, { useState, useEffect } from 'react';
import api from '../../api/axios';

const EditStylistModal = ({ stylist, isOpen, onClose, onUpdateSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', specialty: '' });

  useEffect(() => {
    // Modal açıldığında ve düzenlenecek kuaför bilgisi geldiğinde formu doldur
    if (stylist) {
      setFormData({
        name: stylist.name,
        email: stylist.email,
        specialty: stylist.specialty || '',
      });
    }
  }, [stylist]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/users/${stylist._id}`, formData);
      onUpdateSuccess(); // Başarılı güncelleme sonrası ana listeyi yenilemek için
      onClose(); // Modalı kapat
    } catch (error) {
      alert('Kuaför bilgileri güncellenemedi!');
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Kuaför Bilgilerini Düzenle</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 mt-1 border rounded-md"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 mt-1 border rounded-md"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Uzmanlık Alanı</label>
            <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} required className="w-full px-3 py-2 mt-1 border rounded-md"/>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">İptal</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStylistModal;