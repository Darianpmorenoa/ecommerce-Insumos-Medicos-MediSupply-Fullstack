const express = require('express');
const productsRouter = express.Router();
const {getAllProducts, getProductById, createProduct, deleteProduct, modifyProduct} = require('../controllers/productController');
const { validateToken, verifyAdmin } = require('../middlewares/auth');


// GET GENERAL
productsRouter.get("/", async (req, res) => {

    const products = await getAllProducts();
    res.json(products);

});


// GET POR ID
productsRouter.get("/:id", async (req, res) => {

    const product = await getProductById(req.params.id);
    res.json(product);

});


// CREATE PRODUCTO
productsRouter.post("/", validateToken, verifyAdmin, async (req, res) => {

    const product = await createProduct(req.body);
    res.status(201).json(
        {
        message: "Producto creado con éxito!",
        data: product
    }
);

});


// DELETE PRODUCTO
productsRouter.delete("/:id", validateToken, verifyAdmin, async (req, res) => {

    const result = await deleteProduct(req.params.id);
    res.json(
        {
        message: "Producto eliminado con éxito!",
        data: result
    }
);

});


// UPDATE PRODUCTO
productsRouter.put("/:id", validateToken, verifyAdmin, async (req, res) => {

    const product = await modifyProduct(
        req.params.id,
        req.body
    );

    res.json(
        {
        message: "Producto actualizado con éxito!",
        data: product
    }
);

});


module.exports = productsRouter;

