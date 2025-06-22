const express = require('express');
const router = express.Router();
const { 
    getServicesByStylist, 
    getMyServices, 
    createMyService, 
    deleteMyService 
} = require('../controllers/service.controller');
const { protect, stylist } = require('../middleware/auth.middleware');

// Herkese açık rota: Belirli bir kuaförün hizmetlerini getirir
router.get('/stylist/:stylistId', getServicesByStylist);

// Sadece kuaförlerin erişebileceği, kendi hizmetlerini yönetecekleri rotalar
router.route('/')
    .post(protect, stylist, createMyService); // Yeni hizmet oluştur

router.route('/my-services')
    .get(protect, stylist, getMyServices); // Kendi hizmetlerini listele

router.route('/:id')
    .delete(protect, stylist, deleteMyService); // Kendi hizmetini sil

module.exports = router;