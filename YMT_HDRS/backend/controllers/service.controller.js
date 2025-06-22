const Service = require('../models/service.model');

// @desc    Belirli bir kuaförün tüm hizmetlerini listele
// @route   GET /api/services/stylist/:stylistId
const getServicesByStylist = async (req, res) => {
    try {
        const services = await Service.find({ stylist: req.params.stylistId });
        res.json(services);
    } catch (error) {
        res.status(404).json({ message: 'Hizmetler bulunamadı' });
    }
};

// @desc    Giriş yapmış kuaförün kendi hizmetlerini listele
// @route   GET /api/services/my-services
const getMyServices = async (req, res) => {
    try {
        const services = await Service.find({ stylist: req.user._id });
        res.json(services);
    } catch (error) {
        res.status(404).json({ message: 'Hizmetler bulunamadı' });
    }
};

// @desc    Giriş yapmış kuaför için yeni bir hizmet oluştur
// @route   POST /api/services
const createMyService = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const service = new Service({
            name,
            description,
            price,
            stylist: req.user._id // Giriş yapmış kuaförün ID'si
        });
        const createdService = await service.save();
        res.status(201).json(createdService);
    } catch (error) {
        res.status(400).json({ message: 'Hizmet oluşturulamadı', error: error.message });
    }
};

// @desc    Kuaförün kendi hizmetini silmesi
// @route   DELETE /api/services/:id
const deleteMyService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (service && service.stylist.toString() === req.user._id.toString()) {
            await service.deleteOne();
            res.json({ message: 'Hizmet başarıyla silindi' });
        } else {
            res.status(404).json({ message: 'Hizmet bulunamadı veya yetkiniz yok' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Sunucu hatası' });
    }
};


module.exports = { getServicesByStylist, getMyServices, createMyService, deleteMyService };