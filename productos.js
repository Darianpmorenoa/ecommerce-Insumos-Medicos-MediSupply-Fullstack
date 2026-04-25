/**
 * @api {get} /api/productos Listar Catálogo
 * @apiDescription Retorna todos los productos con marca y modelo como atributos propios.
 */
const getProducts = {
    response: [
      {
        id_producto: 1,
        nombre: "Termómetro Digital",
        descripcion: "Medición infrarroja grado médico",
        precio: 5000,
        stock: 20,
        marca: "Littmann",
        modelo: "Classic III",
        imagen_url: "https://link.com/foto.jpg"
      }
    ]
  };
  
  /**
   * @api {post} /api/productos Agregar Producto (ADMIN)
   */
  const addProduct = {
    request_body: {
      nombre: "Oxímetro",
      descripcion: "Medidor de oxígeno en sangre",
      precio: 15000,
      stock: 10,
      marca: "ChoiceMMed",
      modelo: "M123",
      imagen_url: "oximetro.png"
    }
  };
  
  /**
   * @api {put} /api/productos/:id Actualizar Producto
   */
  const updateProduct = {
    params: { id: 1 },
    request_body: { precio: 15500, stock: 15 }
  };