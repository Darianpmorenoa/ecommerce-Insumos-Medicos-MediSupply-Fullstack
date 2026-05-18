import { Router } from 'express';
import { crearBoleta, obtenerMisBoletas } from '../controllers/orderController.js';
import { validateToken } from '../middlewares/auth.js';

const router = Router();

// 1. Ruta para crear una nueva boleta (POST /api/ordenes)
router.post('/', validateToken, crearBoleta);

// 2. Ruta para obtener el historial de boletas del usuario logueado (GET /api/ordenes)
router.get('/', validateToken, obtenerMisBoletas);

export default router;