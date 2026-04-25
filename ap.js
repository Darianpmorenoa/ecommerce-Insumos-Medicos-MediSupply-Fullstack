//CRUD USUARIOS

// Obtener USUARIOS
GET /usuarios

Response:
[
  {
    "id_usuario": 1,
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan@gmail.com"
  }
]

POST /usuarios
Request:
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@gmail.com",
  "password": "1234",
  "telefono": "987654321",
  "region": "RM",
  "comuna": "Santiago"
}

Response:
{
  "mensaje": "Usuario creado correctamente"
}


PUT /usuarios/{id}

Request:
{
  "telefono": "912345678"
}

Response:
{
  "mensaje": "Usuario actualizado"
}

DELETE /usuarios/{id}

Response:
{
  "mensaje": "Usuario eliminado"
}


//LOGIN

POST /login

Request:
{
  "email": "juan@gmail.com",
  "password": "1234"
}

Response:
{
  "mensaje": "Login exitoso",
  "id_usuario": 1
}


//PRODUCTOS

GET /productos

Response:
[
  {
    "id_producto": 1,
    "nombre_producto": "Termómetro digital",
    "precio": 5000,
    "modelo": "T100",
    "marca": "MedTech"
  }
]

-

GET /productos/{id}


POST /productos

Request:
{
  "nombre_producto": "Termómetro digital",
  "descripcion": "Medidor de oxígeno",
  "precio": 5000,
  "modelo": "OX200",
  "marca": "HealthCorp"
}

Response:
{
  "mensaje": "Producto creado correctamente"
}

PUT /productos/{id}

Request:
{
  "precio": 12000
}

Response:
{
  "mensaje": "Producto actualizado"
}

DELETE /productos/{id}

Response:
{
  "mensaje": "Producto eliminado"
}

//CARRITO


POST /carrito

Request:
{
  "id_usuario": 1
}

Response:
{
  "mensaje": "Carrito creado"
}


GET /carrito/{id}


POST /carrito/agregar

Request:
{
  "id_carrito": 1,
  "id_producto": 2,
  "cantidad": 3
}

Response:
{
  "mensaje": "Producto agregado al carrito"
}


DELETE /carrito/eliminar

Request:
{
  "id_carrito": 1,
  "id_producto": 2
}

Response:
{
  "mensaje": "Producto eliminado del carrito"
}


//BOLETA


POST /boleta

Request:
{
  "id_usuario": 1,
  "productos": [
    {
      "id_producto": 1,
      "cantidad": 2
    }
  ]
}

Response:
{
  "cod_boleta": "B001",
  "total_boleta": 10000
}

GET /boleta/{cod_boleta}

Response:
{
  "cod_boleta": "B001",
  "total_boleta": 10000,
  "estado": "pagado"
}