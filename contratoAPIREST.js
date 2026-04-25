1.Autenticación y usuarios

// POST /registro

request: {
  "rut_cliente": "12345678-9",
  "primer_nombre": "Juan",
  "primer_apellido": "Perez",
  "telefono": 987654321,
  "email": "juan@gmail.com",
  "password": "1234",
  "codg_comuna": 13101 // FK de tabla COMUNA
}

// POST /login
request: 
  "token": "....",
  "usuario": {
    "id": 1,
    "nombre": "Juan",
    "email": "juan@gmail.com"
}
response: {
  "mensaje": "Login exitoso",
  "token": "eyJhbGciOi...",
  "id_usuario": 1
}
 2.Catálogo de insumos medicos
 // GET /productos
response: [
  {
    "id_producto": 1,
    "nombre_producto": "Termómetro Digital",
    "descripcion": "Medición infrarroja grado médico",
    "precio": 5000,
    "stock": 20,
    "marca": "Littmann", // De tabla MARCA
    "modelo": "Classic III" // De tabla MODELO
  }
]

// POST /productos (Admin)
request: {
  "nombre_producto": "Oxímetro",
  "descripcion": "Medidor de oxígeno en sangre",
  "precio": 15000,
  "stock": 10,
  "id_marca": 5,
  "codg_modelo": "M123"
}

3.Carrito y ventas (boleta)
// POST /carrito/agregar
request: {
  "id_carrito": 1,
  "id_producto": 2,
  "cantidad": 3,
  "id_detalle": 501 // De tabla PRODUCTO_CARRITO
}

// POST /boleta (Crear Compra)
request: {
  "rut_cliente": "12345678-9",
  "id_pago": 1, // FK de tabla METODO_PAGO
  "productos": [
    { "id_producto": 1, "cantidad": 2 }
  ]
}
response: {
  "cod_boleta": "B001",
  "total": 10000,
  "fecha": "2026-04-23"
}

4.Gestion total de productos 
// PUT /productos/:id (Actualizar stock o precios)
request: {
  payload: {
    precio: Number,
    stock: Number,
    descripcion: "String"
  }
}

// DELETE /productos/:id (Eliminar producto del catálogo)
response: {
  "mensaje": "Producto eliminado con éxito"
}

5.Gestión de usuarios y clientes 
// GET /admin/usuarios
response: {
  payload: [
    {
      "rut_cliente": "String",
      "email": "String",
      "total_compras": Number
    }
  ]
}

6.Dashboard de ventas (boletas)
// GET /admin/boletas
// Endpoint para alimentar la DataTable de gestión de ventas
response: {
  payload: [
    {
      "codg_boleta": "B-2026-001",
      "fecha_boleta": "2026-04-24",
      "rut_cliente": "12.345.678-9",
      "nombre_cliente": "Juan Perez", // Dato obtenido mediante un JOIN con la tabla CLIENTE
      "total_boleta": 45000,
      "metodo_pago": "Transbank", // Dato obtenido mediante un JOIN con METODO_PAGO
      "estado": "Pagado"
    }
  ]
}