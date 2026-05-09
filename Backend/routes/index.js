const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const authRoutes = require('./auth.routes');


router.use('/auth', authRoutes);
router.use('/usuarios', userRoutes);
router.use('/productos', productRoutes);

module.exports = router;