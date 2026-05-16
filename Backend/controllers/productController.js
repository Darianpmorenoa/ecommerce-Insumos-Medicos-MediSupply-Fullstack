const pool = require('../database/connection');

// 1. Obtener todos los productos (Para la tienda)
const getAllProducts = async (req, res) => {
    try {
        const query = `SELECT * FROM productos ORDER BY id ASC`;
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error en getAllProducts:", error.message);
        res.status(500).json({ error: "Error al obtener productos" });
    }
};

// 2. Obtener producto por ID (Para la vista de detalle)
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        // Corregido: id_producto -> id
        const query = `SELECT * FROM productos WHERE id = $1`;
        const result = await pool.query(query, [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error en getProductById:", error.message);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
};

// 3. Crear producto (Para el Admin)
const createProduct = async (req, res) => {
    try {
        // Corregido según tabla de Neon: nombre, imagen_url
        const { nombre, descripcion, imagen_url, precio, stock, id_categoria, marca } = req.body;
        const values = [nombre, descripcion, imagen_url, precio, stock, id_categoria, marca];
        
        const query = `INSERT INTO productos (nombre, descripcion, imagen_url, precio, stock, id_categoria, marca) 
                       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
                       
        const result = await pool.query(query, values);
        res.status(201).json({
            message: "Producto creado con éxito! 📦",
            data: result.rows[0]
        });
    } catch (error) {
        console.error("Error en createProduct:", error.message);
        res.status(500).json({ error: "Error al crear producto" });
    }
};

// 4. ELIMINAR PRODUCTO
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        // Corregido: id_producto -> id
        const query = `DELETE FROM productos WHERE id = $1 RETURNING *`;
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.status(200).json({
            message: "Producto eliminado correctamente",
            data: result.rows[0]
        });
    } catch (error) {
        console.error("Error en deleteProduct:", error.message);
        res.status(500).json({ error: "Error al eliminar producto" });
    }
};

// 5. MODIFICAR PRODUCTO
const modifyProduct = async (req, res) => {
    try {
        const { id } = req.params;
        // Corregido según tabla de Neon: nombre, imagen_url
        const { nombre, descripcion, imagen_url, precio, stock, marca, id_categoria } = req.body;
        
        // Corregido: id_producto -> id
        const query = `UPDATE productos SET nombre = $1, descripcion = $2, imagen_url = $3, precio = $4,
                       stock = $5, marca = $6, id_categoria = $7 WHERE id = $8 RETURNING *`;

        const values = [nombre, descripcion, imagen_url, precio, stock, marca, id_categoria, id];
        const result = await pool.query(query, values);

        // Validar si el producto realmente existía ---
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Producto no encontrado para actualizar" });
        }

        res.status(200).json({
            message: "Producto actualizado correctamente",
            data: result.rows[0]
        });
    } catch (error) {
        console.error("Error en modifyProduct:", error.message);
        res.status(500).json({ error: "Error al actualizar producto" });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    modifyProduct
};