const express = require('express');
const router = express.Router();
const pool = require('../database/conection');

// 1. Obtener todas las categorías (Público)
router.get('/', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM categorias");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener categorías" });
    }
});

// 2. Obtener una categoría por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM categorias WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
});

module.exports = router;