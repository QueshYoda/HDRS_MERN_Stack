&lt;div align="center">

✂️ HSRS - Kuaför Randevu Sistemi ✂️
Hair Saloon Reservation System

&lt;/div>

&lt;p align="center">
&lt;img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
&lt;img src="https://img.shields.io/badge/version-1.0.0-green.svg" alt="Version">
&lt;img src="https://img.shields.io/badge/status-in%20development-orange.svg" alt="Status">
&lt;/p>

&lt;p align="center">
Modern kuaför salonları için geliştirilmiş, MERN yığını üzerine kurulu, çok rollü ve dinamik bir web tabanlı randevu yönetim sistemi.
&lt;/p>

&lt;p align="center">
&lt;img src="https://user-images.githubusercontent.com/10292398/182019999-3ff25586-0570-4847-a8a2-a309975b3992.png" alt="Proje Arayüzü" width="80%">
&lt;/p>

📚 İçindekiler
Özellikler
Kullanılan Teknolojiler
Kurulum ve Çalıştırma
Kullanım
API Rotaları
Gelecek Geliştirmeler
Lisans
✨ Özellikler
Bu platform, üç farklı kullanıcı rolü için zengin bir özellik seti sunar:

👤 Müşteri Rolü
Hesap Yönetimi: Sisteme müşteri olarak kayıt olma ve giriş yapma.

Hizmet Listeleme: Kuaförleri ve her kuaförün kendine özel hizmet ve fiyat listesini görüntüleme.

Randevu Sistemi: Beğendiği bir kuaförden, belirli bir hizmet için uygun tarih ve saatte randevu oluşturma.

✂️ Kuaför (Hair Stylist) Rolü
Hesap Yönetimi: Sisteme kuaför olarak kayıt olma ve giriş yapma.

Panel Erişimi: Kendine özel yönetim paneline erişim.
Hizmet Yönetimi: Müşterilere sunacağı hizmetleri ve bu hizmetlerin fiyatlarını kendi paneli üzerinden ekleme, silme ve yönetme.
Randevu Takvimi: Kendisine atanmış randevuları (müşteri, tarih, hizmet) takip etme.

👑 Yönetici (Admin) Rolü
Güvenli Giriş: Veritabanından manuel olarak oluşturulan admin hesabıyla sisteme giriş yapma.
Kuaför Yönetimi: Sisteme yeni kuaförler ekleme, mevcut kuaförlerin bilgilerini (ad, email, uzmanlık) düzenleme ve sistemden kuaför silme.

🛠️ Kullanılan Teknolojiler
Proje, modern ve ölçeklenebilir teknolojiler kullanılarak geliştirilmiştir.

Kategori	Teknoloji	Açıklama
Backend	Node.js, Express.js	API sunucusu ve yönlendirme
MongoDB, Mongoose	NoSQL veritabanı ve ODM
JSON Web Tokens (JWT)	Güvenli kimlik doğrulama
bcryptjs	Parola şifreleme
Frontend	React (Vite ile)	Dinamik kullanıcı arayüzü
Tailwind CSS	Hızlı ve modern UI tasarımı
React Router	Sayfa içi yönlendirme
Axios	API istekleri
Veritabanı	Docker	Geliştirme ortamında MongoDB'yi çalıştırma
🚀 Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

Gereksinimler
Node.js (LTS sürümü tavsiye edilir)
Docker
1. Projeyi İndirme
Bash

git clone https://github.com/kullaniciadiniz/proje-repo.git
cd proje-repo
2. Docker ile MongoDB'yi Başlatma
Bash

docker run -d -p 27017:27017 --name local-mongo-db mongo
3. Backend Kurulumu
Bash

# Backend klasörüne gidin
cd backend

# Paketleri yükleyin
npm install

# .env dosyasını oluşturun ve aşağıdaki gibi doldurun
backend klasöründe .env adında bir dosya oluşturun ve MONGO_URI ile JWT_SECRET değişkenlerini kendi bilgilerinizle güncelleyin.

Kod snippet'i

# backend/.env
MONGO_URI=mongodb://127.0.0.1:27017/hsrs-db
JWT_SECRET=COK_GUCLU_VE_GIZLI_BIR_ANAHTAR_12345
Bash

# Geliştirme sunucusunu başlatın
npm run dev
Backend sunucunuz http://localhost:5000 adresinde çalışmaya başlayacaktır.

4. Frontend Kurulumu
Bash

# Ana dizine dönüp frontend klasörüne gidin
cd ../frontend

# Paketleri yükleyin
npm install

# .env dosyasını oluşturun ve aşağıdaki gibi doldurun
frontend klasöründe .env adında bir dosya oluşturun.

Kod snippet'i

# frontend/.env
VITE_API_URL=http://localhost:5000/api
Bash

# Geliştirme sunucusunu başlatın
npm run dev
Frontend uygulamanız http://localhost:5173 (veya terminalde belirtilen başka bir portta) çalışmaya başlayacaktır.

📋 Kullanım
Yönetici Hesabı Oluşturma

Önemli: Güvenlik nedeniyle yönetici hesabı arayüzden oluşturulamaz. MongoDB Compass gibi bir araç kullanarak users koleksiyonuna manuel olarak bir kullanıcı ekleyin ve role alanını "admin" olarak ayarlayın. Parolayı şifreli (hashed) olarak eklemeyi unutmayın.

Kayıt ve Giriş

Arayüzdeki "Kayıt Ol" sayfasından yeni müşteri ve kuaför hesapları oluşturun.
Oluşturduğunuz hesaplarla sisteme giriş yapın. Menü, rolünüze göre dinamik olarak değişecektir.
🔌 API Rotaları
&lt;details>
&lt;summary>Proje API Endpoint Listesini Görüntüle&lt;/summary>

Method	Endpoint	Açıklama	Yetki
POST	/api/auth/register	Yeni kullanıcı kaydı	Herkese Açık
POST	/api/auth/login	Kullanıcı girişi	Herkese Açık
GET	/api/auth/me	Giriş yapmış kullanıcının bilgileri	Giriş Gerekli
GET	/api/auth/stylists	Tüm kuaförleri listeler	Herkese Açık
PUT	/api/users/:id	Bir kullanıcının bilgilerini günceller	Yönetici
GET	/api/services/stylist/:id	Bir kuaförün hizmetlerini listeler	Herkese Açık
POST	/api/services	Kuaförün yeni hizmet eklemesi	Kuaför
GET	/api/services/my-services	Kuaförün kendi hizmetlerini listelemesi	Kuaför
DELETE	/api/services/:id	Kuaförün kendi hizmetini silmesi	Kuaför
POST	/api/reservations	Yeni randevu oluşturma	Müşteri
GET	/api/reservations/stylist/me	Kuaförün kendi randevularını listelemesi	Kuaför
&lt;/details>

🔮 Gelecek Geliştirmeler
[ ] Randevu onay ve hatırlatmaları için E-posta/SMS bildirimleri.
[ ] Kredi kartı ile ödeme entegrasyonu.
[ ] Kuaförler için detaylı profil sayfaları ve portfolyo/galeri.
[ ] Müşterilerin aldıkları hizmetler için yorum ve puanlama sistemi.
📜 Lisans
Bu proje MIT Lisansı ile lisanslanmıştır.

&lt;div align="center">
Baha Demirtaş - 21070001067
&lt;/div>
