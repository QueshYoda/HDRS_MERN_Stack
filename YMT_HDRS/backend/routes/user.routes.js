const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe, getStylists } = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.get('/stylists', getStylists);

module.exports = router;