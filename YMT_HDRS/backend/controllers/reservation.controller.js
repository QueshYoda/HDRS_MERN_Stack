const Reservation = require('../models/reservation.model');

// @desc    Yeni bir randevu oluştur 
// @route   POST /api/reservations
const createReservation = async (req, res) => {
    const { stylist, service, dateTime, processDetail } = req.body;
    const reservation = new Reservation({
        customer: req.user._id, // Giriş yapmış kullanıcıdan
        stylist,
        service,
        dateTime,
        processDetail
    });
    const createdReservation = await reservation.save();
    res.status(201).json(createdReservation);
};

// @desc    Giriş yapmış kuaförün kendi randevularını listele
// @route   GET /api/reservations/stylist/me
const getMyReservationsAsStylist = async (req, res) => {
    const reservations = await Reservation.find({ stylist: req.user._id })
        .populate('customer', 'name')
        .populate('service', 'name price');
    res.json(reservations);
};


module.exports = { createReservation, getMyReservationsAsStylist };