import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [specialty, setSpecialty] = useState(''); // <-- YENİ STATE EKLE
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // register fonksiyonuna 'specialty' state'ini gönder
      await register(name, email, password, role, specialty); // <-- YENİ PARAMETREYİ EKLE
      navigate('/login');
    } catch (err) {
      setError('Kayıt başarısız. Bu email adresi kullanılıyor olabilir.');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Kayıt Ol</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parola</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 mt-1 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Kayıt Tipi</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-3 py-2 mt-1 border rounded-md">
              <option value="customer">Müşteri</option>
              <option value="stylist">Kuaför</option>
            </select>
          </div>

          {/* --- DEĞİŞİKLİK BURADA --- */}
          {/* Sadece rol 'stylist' ise bu alanı göster */}
          {role === 'stylist' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Uzmanlık Alanı</label>
              <input 
                type="text" 
                placeholder="Örn: Kesim, Boya, Topuz"
                value={specialty} 
                onChange={(e) => setSpecialty(e.target.value)} 
                required 
                className="w-full px-3 py-2 mt-1 border rounded-md" 
              />
            </div>
          )}
          {/* --- DEĞİŞİKLİK SONU --- */}
          
          <button type="submit" className="w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">Kayıt Ol</button>
        </form>
         <p className="text-center text-sm text-gray-600">
          Zaten bir hesabınız var mı? <Link to="/login" className="font-medium text-blue-600 hover:underline">Giriş Yapın</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;