const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const authRoutes = require('./auth.routes');
const ordersRoutes = require('./order.routes');

router.use('/auth', authRoutes);
router.use('/usuarios', userRoutes);
router.use('/productos', productRoutes);
router.use('/ordenes', ordersRoutes);

module.exports = router;