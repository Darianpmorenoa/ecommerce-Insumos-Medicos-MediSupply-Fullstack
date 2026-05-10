const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Única responsabilidad: Validar credenciales y entregar el Token
router.post('/login', userController.loginUsuario);

module.exports = router;