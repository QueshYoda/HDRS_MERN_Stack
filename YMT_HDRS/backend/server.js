const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Rota dosyalarını import et
const userRoutes = require('./routes/user.routes');
const serviceRoutes = require('./routes/service.routes');
const reservationRoutes = require('./routes/reservation.routes');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB bağlantısı başarılı.');
    } catch (error) {
        console.error(`Hata: ${error.message}`);
        process.exit(1);
    }
};
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Sunucusu Çalışıyor...');
});

// API Rotaları
app.use('/api/auth', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor.`)); 