const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateToken } = require('../middlewares/auth');

// 1. Registro de nuevos usuarios (Público)
router.post('/registrar', userController.registrarUsuario);

// 2. Obtener datos del usuario logueado (Privado - Requiere Token)
router.get('/perfil', validateToken, userController.obtenerPerfil);

// 3. Ver todos los usuarios (Privado - Solo para pruebas o Admin)
router.get('/', validateToken, userController.obtenerUsuarios);

module.exports = router;