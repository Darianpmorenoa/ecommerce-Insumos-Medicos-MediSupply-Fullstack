# Hito1-ecommerce-Insumos-Medicos
# Proyecto Insumos Médicos - Hito 1

Este repositorio contiene el diseño inicial y la documentación de la API para el proyecto de Insumos Médicos.

## Requisitos
Ejecutar `npm install` para instalar las dependencias necesarias.

# 🏥 Proyecto Ecommerce - Insumos Médicos (Hito 1)

Este repositorio contiene la fase inicial de desarrollo del sistema de gestión y ventas de insumos médicos. Se incluye el modelo de datos, la estructura del servidor y el contrato de API REST.

## 📦 Dependencias y Herramientas
Para este hito, el entorno se ha configurado con las siguientes librerías esenciales:
### 🎨 Frontend (React & Vite)
* **React**: Biblioteca principal para la construcción de la interfaz de usuario.
* **React Router DOM**: Para la navegación entre las vistas (Home, Login, Dashboard).
* **Context API**: Gestión del estado global (Carrito, Autenticación).
* **Tailwind CSS / Bootstrap**: Frameworks para el diseño responsivo y estilizado.

 ### 🔙 Backend (Node.js & Express)
* **Express**: Framework principal para la creación de rutas y manejo de peticiones HTTP.
* **dotenv**: Gestión de variables de entorno para proteger credenciales sensibles (DB_USER, DB_PASSWORD).
* **PG (node-postgres)**: Cliente para la conexión con la base de datos PostgreSQL.
* **BcryptJS**: Utilizado para la encriptación segura de las contraseñas de los usuarios.
* **JSONWebToken (JWT)**: Implementado para la gestión de autenticación y sesiones de usuario.
* **CORS**: Para permitir peticiones seguras desde el frontend.
* **Nodemon** (Dev): Herramienta para el reinicio automático del servidor en desarrollo.

## 🎨 Vistas y Diseño (UX/UI)

El sistema está diseñado con un flujo de navegación que diferencia el acceso según el rol del usuario:

### 🌐 Vistas Públicas
* **Home / Landing Page**: Presentación de la marca y acceso directo a las categorías de insumos médicos.
* **Catálogo de Productos**: Galería con búsqueda y filtros por marca y modelo integrados.
* **Registro de Usuarios**: Formulario con validación de datos personales, dirección y comuna.
* **Login**: Acceso seguro para clientes y administradores.

### 🔒 Vistas Privadas Usuarios (Requieren Autenticación)
* **Perfil de Usuario**: Gestión de datos personales y seguimiento de compras realizadas.
* **Carrito de Compras**: Resumen de productos seleccionados y selección del método de pago.
### 🔒 Vistas Privadas Administradores
* **Dashboard Administrativo**: Panel exclusivo para la gestión de inventario (CRUD de productos).
* **Gestión de Ventas**: Tabla de monitoreo (DataTable) con el detalle de todas las boletas emitidas.
* **Administración de Clientes**: Listado con información de contacto y actividad de los usuarios registrados.

## 📑 Documentación de la API
Los contratos de API están organizados por módulos en la carpeta `/hito1-insumosmedicos` (o raíz) y sus capturas visuales en `/img`:
* **Auth**: `/api/auth/register` y `/api/auth/login`.
* **Productos**: Gestión total del catálogo e inventario.
* **Órdenes**: Proceso de boletas y historial de ventas para admin.

## CONTRATO DE API REST
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