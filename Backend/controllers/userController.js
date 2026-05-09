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

        // 1. Buscar usuario en la BD
        const usuario = await consultas.obtenerUsuarioPorEmail(email);
        if (!usuario) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

        // 2. Comparar password con bcrypt
        const passwordValida = bcrypt.compareSync(password, usuario.password);
        if (!passwordValida) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

        // 3. Generar JWT
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, rol: usuario.rol },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            token,
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                rol: usuario.rol
            }
        });

    } catch (error) {
        console.error("Error en el login:", error.message);
        res.status(500).send("Error en el servidor");
    }
};

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await consultas.obtenerUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message);
        res.status(500).send("Error en el servidor");
    }
};

module.exports = { registrarUsuario, loginUsuario, obtenerUsuarios };