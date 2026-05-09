const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');

router.use('/usuarios', userRoutes);
router.use('/productos', productRoutes);

module.exports = router;