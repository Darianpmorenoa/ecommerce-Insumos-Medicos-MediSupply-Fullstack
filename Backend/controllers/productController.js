const pool = require('../database/conection');

// Obtener todos los productos (Para la tienda)
const getAllProducts = async (req, res) => {
    try {
        const query = `SELECT * FROM productos`;
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
};

// Obtener producto por ID (Para la vista de detalle)
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const query = `SELECT * FROM productos WHERE id = $1`; // Cambiado id_producto -> id
        const result = await pool.query(query, [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el producto" });
    }
};

// Crear producto (Para el Admin)
const createProduct = async (req, res) => {
    try {
        const { nombre, descripcion, imagen_url, precio, stock, categoria } = req.body;
        const values = [nombre, descripcion, imagen_url, precio, stock, categoria];
        const query = `INSERT INTO productos (nombre, descripcion, imagen_url, precio, stock, categoria) 
                       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al crear producto" });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
};