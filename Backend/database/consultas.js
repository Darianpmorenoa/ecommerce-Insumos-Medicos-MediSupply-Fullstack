import pool from './connection.js';
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

// Para mostrar los productos en el Home/Tienda adaptado a Neon
export const obtenerProductos = async () => {
    try {
        // Traemos nombre_producto como 'nombre' e imagen como 'imagen_url' para mantener compatibilidad con Front
        const consulta = "SELECT id_producto, nombre_producto AS nombre, precio, categoria, imagen AS imagen_url, descripcion, stock FROM productos";
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

export const generarBoleta = async (id_usuario, productos, total, metodo_pago = 'tarjeta') => {
    try {
        // 1. Insertar en la tabla boletas usando las columnas reales de Neon
        const consultaBoleta = `
            INSERT INTO boletas (id_usuario, fecha, total, estado, metodo_pago) 
            VALUES ($1, NOW(), $2, 'completado', $3) 
            RETURNING *
        `;
        const { rows } = await pool.query(consultaBoleta, [id_usuario, total, metodo_pago]);
        const nuevaBoleta = rows[0];

        // 2. Recorrer los productos para el detalle y actualizar stock
        for (const producto of productos) {
            // Ajustado a 'carrito_items' que es la tabla del panel, y usando 'cod_boleta'
            const consultaDetalle = `
                INSERT INTO carrito_items (cod_boleta, id_producto, cantidad, precio_unitario) 
                VALUES ($1, $2, $3, $4)
            `;
            await pool.query(consultaDetalle, [nuevaBoleta.cod_boleta, producto.id_producto, producto.cantidad, producto.precio]);

            // Actualizar el stock en la tabla productos
            const actualizarStock = "UPDATE productos SET stock = stock - $1 WHERE id_producto = $2";
            await pool.query(actualizarStock, [producto.cantidad, producto.id_producto]);
        }
        
        return nuevaBoleta;
    } catch (error) {
        console.error("Error en la transacción generarBoleta:", error.message);
        throw error;
    }
};

export const obtenerBoletasPorUsuario = async (id_usuario) => {
    // Usamos cod_boleta en el ordenamiento para reflejar tu estructura real
    const consulta = "SELECT * FROM boletas WHERE id_usuario = $1 ORDER BY cod_boleta DESC";
    const { rows } = await pool.query(consulta, [id_usuario]);
    return rows;
};