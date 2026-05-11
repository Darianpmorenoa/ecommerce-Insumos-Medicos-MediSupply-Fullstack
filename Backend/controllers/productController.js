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
        const query = `SELECT * FROM productos WHERE id_producto = $1`;
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
        const { nombre_producto, descripcion, imagen, precio, stock, id_categoria } = req.body;
        const values = [nombre_producto, descripcion, imagen, precio, stock, id_categoria];
        const query = `INSERT INTO productos (nombre_producto, descripcion, imagen, precio, stock, id_categoria) 
                       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al crear producto" });
    }
};

// ELIMINAR PRODUCTO
const deleteProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const query = `DELETE FROM productos WHERE id_producto = $1 RETURNING *`;
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {

            return res.status(404).json({
                message: "Producto no encontrado" });
        }

        res.json({
            message: "Producto eliminado correctamente"});

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Error al eliminar producto"});
    }

};


// MODIFICAR PRODUCTO
const modifyProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const {  nombre_producto, descripcion, imagen, precio, stock, marca, id_categoria } = req.body;
        const query = `UPDATE productos SET nombre_producto = $1, descripcion = $2, imagen = $3, precio = $4,
                       stock = $5, marca = $6, id_categoria = $7 WHERE id_producto = $8 RETURNING *`;

        const values = [nombre_producto, descripcion, imagen, precio, stock, marca, id_categoria, id];
        const result = await pool.query(query, values);

        res.json({
            message: "Producto actualizado correctamente",
            producto: result.rows[0] });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Error al actualizar producto" });
    }

};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    modifyProduct
};