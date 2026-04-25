/**
 * @api {post} /api/boleta Crear Compra
 * @apiDescription Genera la boleta y procesa el pago.
 */
const createOrder = {
    request_body: {
      rut_cliente: "12345678-9",
      id_pago: 1,
      productos: [
        { id_producto: 1, cantidad: 2 }
      ]
    },
    responses: {
      201: { cod_boleta: "B001", total: 10000, fecha: "2026-04-23" }
    }
  };
  
  /**
   * @api {get} /api/admin/boletas Dashboard de Ventas
   * @apiDescription Endpoint para alimentar la DataTable de gestión de ventas.
   */
  const getAdminOrders = {
    response: [
      {
        codg_boleta: "B-2026-001",
        fecha_boleta: "2026-04-24",
        nombre_cliente: "Juan Perez",
        total_boleta: 45000,
        metodo_pago: "Transbank",
        estado: "Pagado"
      }
    ]
  };