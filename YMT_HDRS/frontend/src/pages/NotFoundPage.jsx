import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4">Sayfa Bulunamadı</p>
      <p className="text-gray-600 mt-2">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage;