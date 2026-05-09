const pool = require('./conection');
const bcrypt = require('bcryptjs');

const registrarUsuario = async (usuario) => {
    let { nombre, apellido, email, password, rut, telefono, region, comuna } = usuario;
    
    const passwordEncriptada = bcrypt.hashSync(password, 10);
    
    const values = [nombre, apellido, email, passwordEncriptada, rut, telefono, region, comuna];
    const consulta = "INSERT INTO usuarios (nombre, apellido, email, password, rut, telefono, region, comuna) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    
    const { rows } = await pool.query(consulta, values);
    return rows[0];
};

const obtenerUsuarioPorEmail = async (email) => {
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const { rows } = await pool.query(consulta, [email]);
    return rows[0];
};

module.exports = { registrarUsuario, obtenerUsuarioPorEmail };