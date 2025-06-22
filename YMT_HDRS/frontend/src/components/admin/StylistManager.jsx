import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import EditStylistModal from './EditStylistModal'; // <-- Yeni modalı import et

const StylistManager = () => {
  const [stylists, setStylists] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialty, setSpecialty] = useState(''); // Ekleme formu için uzmanlık

  // --- Modal için yeni state'ler ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStylist, setEditingStylist] = useState(null);

  const fetchStylists = async () => {
    const { data } = await api.get('/auth/stylists');
    setStylists(data);
  };

  useEffect(() => {
    fetchStylists();
  }, []);

  const handleAddStylist = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password, specialty, role: 'stylist' });
      // Formu temizle
      setName('');
      setEmail('');
      setPassword('');
      setSpecialty('');
      fetchStylists(); // Listeyi yenile
    } catch (error) {
      console.error("Kuaför eklenemedi", error);
      alert('Kuaför eklenemedi!');
    }
  };

  const handleRemoveStylist = async (id) => {
    if (window.confirm('Bu kuaförü silmek istediğinizden emin misiniz?')) {
      try {
        await api.delete(`/users/${id}`); // Bu rotayı backend'de oluşturmanız gerekir
        fetchStylists(); // Listeyi yenile
      } catch (error) {
        console.error("Kuaför silinemedi", error);
        alert('Kuaför silinemedi!');
      }
    }
  };

  // --- Düzenleme modalını açan fonksiyon ---
  const handleEditClick = (stylist) => {
    setEditingStylist(stylist);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Yeni Kuaför Ekle</h3>
          <form onSubmit={handleAddStylist} className="space-y-3">
            <input type="text" placeholder="Ad Soyad" value={name} onChange={e => setName(e.target.value)} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="password" placeholder="Geçici Parola" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" placeholder="Uzmanlık Alanı" value={specialty} onChange={e => setSpecialty(e.target.value)} required className="w-full px-3 py-2 border rounded-md"/>
            <button type="submit" className="w-full py-2 text-white bg-green-600 rounded-md">Ekle</button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Kayıtlı Kuaförler</h3>
          <ul className="divide-y">
            {stylists.map(s => (
              <li key={s._id} className="py-2 flex justify-between items-center">
                <span>{s.name} ({s.specialty})</span>
                <div className="space-x-2">
                  <button onClick={() => handleEditClick(s)} className="text-blue-500 hover:text-blue-700 font-medium">Düzenle</button>
                  <button onClick={() => handleRemoveStylist(s._id)} className="text-red-500 hover:text-red-700 font-medium">Sil</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal'ı burada render ediyoruz */}
      <EditStylistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stylist={editingStylist}
        onUpdateSuccess={fetchStylists}
      />
    </>
  );
};

export default StylistManager;