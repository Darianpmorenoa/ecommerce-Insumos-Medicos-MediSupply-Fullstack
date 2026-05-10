const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { validateToken } = require('../middlewares/auth'); 

// 1. Ruta para crear una nueva boleta (POST /api/ordenes)
router.post('/', validateToken, orderController.crearBoleta);

// 2. Ruta para obtener el historial de boletas del usuario logueado (GET /api/ordenes)
router.get('/', validateToken, orderController.obtenerMisBoletas);

module.exports = router;