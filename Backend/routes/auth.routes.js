const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    // LOGIN TEMPORAL
    if (email === 'admin@gmail.com' && password === '1234') {

        const token = jwt.sign(
            { email: email, rol: 'admin' }, process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        return res.json({
            message: 'Login exitoso',
            token
        });

    }

    res.status(401).json({
        message: 'Credenciales incorrectas'
    });

});

module.exports = router;