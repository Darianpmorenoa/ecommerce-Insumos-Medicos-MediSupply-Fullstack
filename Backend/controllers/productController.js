const pool = require('../database/conection');


// Obtener todos los productos
const getAllProducts = async () => {

    const query = `SELECT * FROM productos`;
    const result = await pool.query(query);
    return result.rows;
};


// Obtener producto por ID
const getProductById = async (id) => {

    const query = `SELECT * FROM productos WHERE id_producto = $1`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
};


// Crear producto
const createProduct = async (product) => {

    const values = [ product.nombre_producto, product.descripcion, product.imagen, product.precio, product.stock, product.marca ,product.id_categoria];
    const query = `INSERT INTO productos( nombre_producto, descripcion, imagen, precio, stock, marca, id_categoria) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0];
};


// Eliminar producto
const deleteProduct = async (id) => {

    const query = `DELETE FROM productos WHERE id_producto = $1 RETURNING *`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
};


// Modificar producto
const modifyProduct = async (id, product) => {

    const values = [product.nombre_producto, product.descripcion, product.imagen, product.precio, product.stock, product.marca ,product.id_categoria, id];
    const query = `UPDATE productos SET nombre_producto = $1, descripcion = $2, imagen = $3, precio = $4, stock = $5, marca = $6, id_categoria = $7 WHERE id_producto = $8 RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0];
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    modifyProduct
};

