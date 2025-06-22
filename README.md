HSRS - Kuaför Randevu Sistemi (Hair Saloon Reservation System)
HSRS, modern ve müşteri odaklı bir kuaför salonu için geliştirilmiş web tabanlı bir randevu yönetim sistemidir.  Bu platform, müşteriler, kuaförler ve sistem yöneticisi arasındaki etkileşimi kolaylaştırarak randevu alma sürecini dijitalleştirmeyi ve optimize etmeyi amaçlamaktadır.  Müşteriler kuaförleri ve hizmetlerini görüntüleyebilir, kuaförler kendi programlarını ve hizmet listelerini yönetebilir, yöneticiler ise sistemin genel işleyişini kontrol edebilir. 

✨ Özellikler
Proje, üç farklı kullanıcı rolü için zengin bir özellik seti sunmaktadır: 

👤 Müşteri Rolü
Sisteme müşteri olarak kayıt olma ve giriş yapma.
Kuaförleri listeleme ve her kuaförün kendine özel hizmet ve fiyat listesini görüntüleme. 
Beğendiği bir kuaförden, belirli bir hizmet için uygun tarih ve saatte randevu oluşturma. 
(Gelecekte Eklenecek) Aldığı hizmetler için geri bildirimde bulunma ve puanlama yapma. 
✂️ Kuaför (Hair Stylist) Rolü
Sisteme kuaför olarak kayıt olma ve giriş yapma.
Kendine ait profil bilgilerini (uzmanlık alanı vb.) yönetme. 
Müşterilere sunacağı hizmetleri ve bu hizmetlerin fiyatlarını kendi paneli üzerinden ekleme, silme ve yönetme.
Kendi randevu takvimini görüntüleyerek kendisine atanmış randevuları (müşteri, tarih, hizmet) takip etme. 
👑 Yönetici (Admin) Rolü
Sisteme yönetici olarak giriş yapma (güvenlik nedeniyle veritabanından manuel oluşturulur).
Sisteme yeni kuaförler ekleme, mevcut kuaförlerin bilgilerini düzenleme ve sistemden kuaför silme. 


(Gelecekte Eklenecek) Sistemdeki tüm randevuları, kullanıcıları ve hizmetleri görüntüleme.
🛠️ Kullanılan Teknolojiler
Bu proje, modern ve ölçeklenebilir bir yapı olan MERN yığını ve ek teknolojilerle geliştirilmiştir.

Backend:

Node.js: JavaScript çalışma ortamı.
Express.js: Web uygulama çatısı.
MongoDB: NoSQL veritabanı.
Mongoose: MongoDB için nesne veri modelleme (ODM) kütüphanesi.
JSON Web Tokens (JWT): Kimlik doğrulama ve yetkilendirme için.
bcryptjs: Parola şifreleme (hashing) için.
Frontend:

React (Vite ile): Kullanıcı arayüzü kütüphanesi ve geliştirme ortamı.
Tailwind CSS: Modern ve hızlı UI tasarımı için CSS çatısı.
React Router: Tek sayfa uygulaması (SPA) içinde sayfa yönlendirme için.
Axios: Backend API'si ile iletişim kurmak için.
Veritabanı & Dağıtım:

Docker: Geliştirme ortamında MongoDB'yi yerel olarak çalıştırmak için.
🚀 Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

Gereksinimler
Node.js (LTS sürümü tavsiye edilir)
Docker (MongoDB'yi çalıştırmak için)
1. Projeyi Klonlama
Bash

git clone <proje_repository_linki>
cd <proje_klasoru>
2. Backend Kurulumu
Bash

# Backend klasörüne gidin
cd backend

# Gerekli paketleri yükleyin
npm install

# .env dosyasını oluşturun
# Aşağıdaki .env.example içeriğini .env adında yeni bir dosyaya kopyalayın
backend/.env.example

MONGO_URI=mongodb://127.0.0.1:27017/hsrs-db
JWT_SECRET=BURAYA_COK_GIZLI_VE_GUCLU_BIR_ANAHTAR_GIRIN
Not: MONGO_URI değerini kendi MongoDB bağlantı adresinizle güncelleyin. Eğer Docker kullanıyorsanız, bu adres genellikle doğrudur.

Bash

# Geliştirme sunucusunu başlatın
npm run dev
Backend sunucunuz http://localhost:5000 adresinde çalışmaya başlayacaktır.

3. Frontend Kurulumu
Bash

# Ana dizine dönüp frontend klasörüne gidin
cd ../frontend

# Gerekli paketleri yükleyin
npm install

# .env dosyasını oluşturun
# Aşağıdaki .env.example içeriğini .env adında yeni bir dosyaya kopyalayın
frontend/.env.example

VITE_API_URL=http://localhost:5000/api
Bash

# Geliştirme sunucusunu başlatın
npm run dev
Frontend uygulamanız http://localhost:5173 (veya terminalde belirtilen başka bir portta) çalışmaya başlayacaktır.

4. Docker ile MongoDB'yi Başlatma
Eğer yerel bir MongoDB kurulumunuz yoksa, projeyi Docker ile kolayca çalıştırabilirsiniz:

Bash

docker run -d -p 27017:27017 --name local-mongo-db mongo
📋 Kullanım
Yönetici Hesabı Oluşturma: Güvenlik nedeniyle yönetici hesabı arayüzden oluşturulamaz. MongoDB Compass gibi bir araç kullanarak users koleksiyonuna manuel olarak bir kullanıcı ekleyin ve role alanını "admin" olarak ayarlayın. (Detaylı adımlar için önceki konuşmalarımıza bakabilirsiniz).
Kuaför ve Müşteri Kaydı: Arayüzdeki "Kayıt Ol" sayfasından yeni müşteri ve kuaför hesapları oluşturabilirsiniz.
Giriş: Oluşturduğunuz hesaplarla sisteme giriş yapın. Navbar (menü çubuğu), rolünüze göre dinamik olarak değişecektir.
İşlemler: Rolünüze tanımlı özellikleri (randevu alma, hizmet yönetme, kuaför yönetme vb.) kullanmaya başlayın.
🔮 Gelecek Geliştirmeler
Randevu onayları ve hatırlatmaları için E-posta/SMS bildirimleri.
Ödeme sistemleri entegrasyonu.
Kuaförler için detaylı profil sayfaları ve portfolyo/galeri yükleme.
Müşterilerin aldıkları hizmetler için yorum yapma ve puanlama sistemi.
