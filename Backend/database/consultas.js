import { pool } from './connection.js';
import bcrypt from 'bcryptjs';

// --- USUARIOS ---

export const registrarUsuario = async (usuario) => {
    let { nombre, apellido, email, password, rut, telefono, region, comuna } = usuario;
    const passwordEncriptada = bcrypt.hashSync(password, 10);
    const values = [nombre, apellido, email, passwordEncriptada, rut, telefono, region, comuna];
    const consulta = "INSERT INTO usuarios (nombre, apellido, email, password, rut, telefono, region, comuna) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const { rows } = await pool.query(consulta, values);
    return rows[0];
};

export const obtenerUsuarioPorEmail = async (email) => {
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const { rows } = await pool.query(consulta, [email]);
    return rows[0];
};

// Para mostrar los datos en la página de "Mi Perfil" sin la contraseña
export const obtenerPerfilUsuario = async (email) => {
    const consulta = "SELECT nombre, apellido, email, rut, telefono, region, comuna FROM usuarios WHERE email = $1";
    const { rows } = await pool.query(consulta, [email]);
    return rows[0];
};

// --- PRODUCTOS ---

// Para mostrar los productos en el Home/Tienda
export const obtenerProductos = async () => {
    try {
        const consulta = "SELECT * FROM productos";
        const { rows } = await pool.query(consulta);
        return rows;
    } catch (error) {
        console.error("Error en la consulta SQL obtenerProductos:", error);
        throw error;
    }
};

// Para ver el detalle de un solo producto
export const obtenerProductoPorId = async (id) => {
    const consulta = "SELECT * FROM productos WHERE id_producto = $1";
    const { rows } = await pool.query(consulta, [id]);
    return rows[0];
};

// --- COMPRAS / BOLETAS ---

export const generarBoleta = async (id_usuario, productos, total) => {
    // 1. Insertar en la tabla boletas
    const consultaBoleta = "INSERT INTO boletas (id_usuario, total) VALUES ($1, $2) RETURNING *";
    const { rows } = await pool.query(consultaBoleta, [id_usuario, total]);
    const nuevaBoleta = rows[0];

    // 2. Recorrer los productos para el detalle y actualizar stock
    for (const producto of productos) {
        // Insertar cada producto en boleta_items
        const consultaDetalle = "INSERT INTO boleta_items (id_boleta, id_producto, cantidad, precio_unitario) VALUES ($1, $2, $3, $4)";
        await pool.query(consultaDetalle, [nuevaBoleta.id_boleta, producto.id_producto, producto.cantidad, producto.precio]);

        // Actualizar el stock
        const actualizarStock = "UPDATE productos SET stock = stock - $1 WHERE id_producto = $2";
        await pool.query(actualizarStock, [producto.cantidad, producto.id_producto]);
    }
    
    return nuevaBoleta;
};

export const obtenerBoletasPorUsuario = async (id_usuario) => {
    const consulta = "SELECT * FROM boletas WHERE id_usuario = $1 ORDER BY fecha DESC";
    const { rows } = await pool.query(consulta, [id_usuario]);
    return rows;
};