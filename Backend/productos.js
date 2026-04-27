/**
 * @api {get} /api/productos Listar Catálogo
 * @apiDescription Retorna todos los insumos con marca y modelo integrados.
 */
const getProducts = {
    response: [
      {
        id_producto: 1,
        nombre_producto: "Termómetro Digital",
        descripcion: "Medición infrarroja grado médico",
        precio: 5000,
        stock: 20,
        marca: "HealthCorp",       
        categoria: "Salud",       
        imagen_url: "https://link.com/foto.jpg"
      }
    ]
  };
  
  /**
   * @api {post} /api/productos Agregar Producto (Admin)
   */
  const addProduct = {
    request_body: {
      nombre_producto: "Oxímetro",
      descripcion: "Medidor de oxígeno en sangre",
      precio: 15000,
      stock: 10,
      marca: "ChoiceMMed",  
      categoria: "Salud"
    }
  };
  
  /**
   * @api {put} /api/productos/:id Actualizar Stock/Precio
   */
  const updateProduct = {
    params: { id: "Number" },
    payload: { precio: 15500, stock: 15 }
  };
  
  /**
   * @api {delete} /api/productos/:id Eliminar Producto
   */
  const deleteProduct = {
    response: { mensaje: "Producto eliminado con éxito" }
  };