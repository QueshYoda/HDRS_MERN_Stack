const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    // --- YENİ ALAN ---
    // Bu hizmetin hangi kuaföre ait olduğunu belirtir.
    // 'User' modeline bir referanstır.
    stylist: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;