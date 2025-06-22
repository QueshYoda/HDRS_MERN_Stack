const User = require('../models/user.model');
const generateToken = require('../utils/generateToken');

// @desc    Yeni kullanıcı kaydı
// @route   POST /api/auth/register
const registerUser = async (req, res) => {
    const { name, email, password, role, specialty } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'Bu email adresi zaten kullanılıyor' });
    }
    const user = await User.create({ name, email, password, role, specialty });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
    } else {
        res.status(400).json({ message: 'Geçersiz kullanıcı verisi' });
    }
};

// @desc    Kullanıcı girişi ve token oluşturma
// @route   POST /api/auth/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Geçersiz email veya parola' });
    }
};

// @desc    Giriş yapmış kullanıcının bilgilerini al
// @route   GET /api/auth/me
const getMe = async (req, res) => {
    res.status(200).json(req.user);
};

// @desc    Tüm kuaförleri listele
// @route   GET /api/users/stylists
const getStylists = async (req, res) => {
    const stylists = await User.find({ role: 'stylist' }).select('-password');
    res.json(stylists);
};


const updateUserByAdmin = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.specialty = req.body.specialty || user.specialty;
            // Parola ve rol gibi alanların güncellenmesi için ek mantık eklenebilir.

            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                specialty: updatedUser.specialty,
            });
        } else {
            res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Güncelleme başarısız', error: error.message });
    }
};


module.exports = { 
    registerUser, 
    loginUser, 
    getMe, 
    getStylists, 
    updateUserByAdmin 
};