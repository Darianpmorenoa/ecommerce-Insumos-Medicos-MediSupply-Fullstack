const consultas = require('../database/consultas'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// 1. Función para registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
    try {
        const usuario = req.body; 
        
        // Lógica para registrar en la base de datos 
        await consultas.registrarUsuario(usuario); 
        
        res.status(201).send("Usuario registrado con éxito ✅");
    } catch (error) {
        console.error("Error en el registro:", error.message);
        res.status(500).send("Error al registrar usuario: " + error.message);
    }
};

// 2. Función para inicio de sesión (Login)
const loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Aquí se implementará la validación de credenciales y generación de JWT
        res.status(200).json({ 
            message: "Login exitoso (Simulado)",
            token: "token-de-prueba-aqui" 
        });
    } catch (error) {
        console.error("Error en el login:", error.message);
        res.status(500).send("Error en el servidor");
    }
};

module.exports = { registrarUsuario, loginUsuario };