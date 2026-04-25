/**
 * @api {get} /api/admin/usuarios Listar Clientes
 * @apiDescription Obtiene la lista de usuarios para el panel administrativo.
 */
const getAdminUsers = {
    response: [
      {
        rut_cliente: "12345678-9",
        email: "juan@gmail.com",
        total_compras: 5
      }
    ]
  };