const express = require('express');
const router = express.Router();
const { createReservation, getMyReservationsAsStylist } = require('../controllers/reservation.controller');
const { protect, stylist } = require('../middleware/auth.middleware');

router.route('/').post(protect, createReservation);
router.route('/stylist/me').get(protect, stylist, getMyReservationsAsStylist);

module.exports = router;