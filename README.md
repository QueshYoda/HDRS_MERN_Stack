
<div align="center">

# ✂️ HSRS - Kuaför Randevu Sistemi ✂️  
**Hair Saloon Reservation System**

</div>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/version-1.0.0-green.svg" alt="Version">
  <img src="https://img.shields.io/badge/status-in%20development-orange.svg" alt="Status">
</p>

<p align="center">
  Modern kuaför salonları için geliştirilmiş, MERN yığını üzerine kurulu, çok rollü ve dinamik bir web tabanlı randevu yönetim sistemi.
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/10292398/182019999-3ff25586-0570-4847-a8a2-a309975b3992.png" alt="Proje Arayüzü" width="80%">
</p>

---

## 📚 İçindekiler

- [✨ Özellikler](#-özellikler)
- [🛠️ Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [🚀 Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
- [📋 Kullanım](#-kullanım)
- [🔌 API Rotaları](#-api-rotaları)
- [🔮 Gelecek Geliştirmeler](#-gelecek-geliştirmeler)
- [📜 Lisans](#-lisans)

---

## ✨ Özellikler

Bu platform, üç farklı kullanıcı rolü için zengin bir özellik seti sunar:

### 👤 Müşteri Rolü
- **Hesap Yönetimi**: Kayıt olma ve giriş yapma  
- **Hizmet Listeleme**: Kuaförlerin sunduğu hizmet ve fiyatlarını görüntüleme  
- **Randevu Sistemi**: Uygun tarih ve saate randevu oluşturma  

### ✂️ Kuaför (Hair Stylist) Rolü
- **Hesap Yönetimi**: Kuaför olarak kayıt ve giriş  
- **Panel Erişimi**: Özel yönetim paneli  
- **Hizmet Yönetimi**: Hizmetleri ekleme, düzenleme, silme  
- **Randevu Takvimi**: Randevuları görüntüleme  

### 👑 Yönetici (Admin) Rolü
- **Güvenli Giriş**: Veritabanında tanımlı hesapla erişim  
- **Kuaför Yönetimi**: Kuaför ekleme, düzenleme ve silme  

---

## 🛠️ Kullanılan Teknolojiler

| Kategori   | Teknoloji              | Açıklama                                 |
|-----------|------------------------|------------------------------------------|
| Backend   | Node.js, Express.js    | API sunucusu ve yönlendirme              |
|           | MongoDB, Mongoose      | NoSQL veritabanı ve ODM                  |
|           | JWT, bcryptjs          | Kimlik doğrulama ve parola şifreleme    |
| Frontend  | React (Vite)           | Dinamik kullanıcı arayüzü                |
|           | Tailwind CSS           | Modern UI tasarımı                       |
|           | React Router, Axios    | Sayfa yönlendirme ve API istekleri      |
| Veritabanı| Docker                 | MongoDB konteyner çalıştırma             |

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (LTS)
- Docker

### 1. Projeyi Klonlayın

```bash
git clone [https://github.com/QueshYoda/HDRS_MERN_Stack.git]
cd proje-repo
```

### 2. MongoDB'yi Docker ile Başlatın

```bash
docker run -d -p 27017:27017 --name local-mongo-db mongo
```

### 3. Backend Kurulumu

```bash
cd backend
npm install
```

`.env` dosyası oluşturun ve şu şekilde doldurun:

```env
# backend/.env
MONGO_URI=mongodb://127.0.0.1:27017/hsrs-db
JWT_SECRET=COK_GUCLU_VE_GIZLI_BIR_ANAHTAR_12345
```

```bash
npm run dev
```

> Backend: http://localhost:5000

### 4. Frontend Kurulumu

```bash
cd ../frontend
npm install
```

`.env` dosyası oluşturun ve şu şekilde doldurun:

```env
# frontend/.env
VITE_API_URL=http://localhost:5000/api
```

```bash
npm run dev
```

> Frontend: http://localhost:5173

---

## 📋 Kullanım

### 🔐 Yönetici Hesabı Oluşturma

> Admin hesabı arayüzden oluşturulamaz.  
> MongoDB Compass ile `users` koleksiyonuna şu alanlarla kullanıcı ekleyin:  

```json
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "<bcrypt ile hash'lenmiş parola>",
  "role": "admin"
}
```

### 👥 Kayıt ve Giriş

- Kayıt sayfasından müşteri veya kuaför hesabı oluşturabilirsiniz.
- Menü, giriş yapan kullanıcının rolüne göre dinamik olarak değişir.

---

## 🔌 API Rotaları

<details>
  <summary>Proje API Endpoint Listesini Görüntüle</summary>

| Method | Endpoint                            | Açıklama                                  | Yetki     |
|--------|-------------------------------------|-------------------------------------------|-----------|
| POST   | /api/auth/register                  | Yeni kullanıcı kaydı                      | Herkese Açık |
| POST   | /api/auth/login                     | Kullanıcı girişi                          | Herkese Açık |
| GET    | /api/auth/me                        | Giriş yapan kullanıcının bilgileri        | Giriş Gerekli |
| GET    | /api/auth/stylists                  | Tüm kuaförleri listeler                   | Herkese Açık |
| PUT    | /api/users/:id                      | Kullanıcı bilgilerini günceller           | Yönetici     |
| GET    | /api/services/stylist/:id           | Belirli kuaförün hizmetleri               | Herkese Açık |
| POST   | /api/services                       | Yeni hizmet ekleme                        | Kuaför      |
| GET    | /api/services/my-services           | Kendi hizmetlerini listeleme              | Kuaför      |
| DELETE | /api/services/:id                   | Hizmet silme                              | Kuaför      |
| POST   | /api/reservations                   | Randevu oluşturma                         | Müşteri     |
| GET    | /api/reservations/stylist/me        | Kuaförün randevularını listeleme          | Kuaför      |

</details>

---

## 🔮 Gelecek Geliştirmeler

- [ ] E-posta/SMS bildirim entegrasyonu  
- [ ] Kredi kartı ile ödeme sistemi  
- [ ] Kuaför profili ve portfolyo/galeri  
- [ ] Müşteri yorum ve puan sistemi  

---

## 📜 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.

---

<div align="center">
  <strong>Baha Demirtaş - 21070001067</strong>
</div>
