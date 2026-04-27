# 🏥 Proyecto Ecommerce - Insumos Médicos (Hito 1)

Este repositorio contiene la arquitectura inicial, el modelo de datos relacional y los contratos de API REST para una plataforma de venta de insumos médicos. El proyecto está diseñado bajo una estructura de separación de responsabilidades entre Cliente y Servidor.

# Integrantes:
* FELIPE SALAZAR
* ANDRES QUINTERO
* DARIAN MORENO

---

## 📦 Dependencias y Herramientas

El entorno de desarrollo se ha configurado con las siguientes tecnologías:

### 🔙 Backend (Node.js & Express)
* **Express**: Framework principal para la creación de rutas y manejo de peticiones HTTP.
* **dotenv**: Gestión de variables de entorno para proteger credenciales sensibles (DB, Keys).
* **PG (node-postgres) & pg-format**: Cliente y formateador para la conexión y consultas seguras a PostgreSQL.
* **BcryptJS**: Encriptación segura de contraseñas de usuarios.
* **JSONWebToken (JWT)**: Gestión de autenticación y sesiones seguras.
* **CORS**: Control de acceso para peticiones desde el frontend.
* **Nodemon** (Dev): Reinicio automático del servidor en desarrollo.
* **Jest & Supertest**: Framework y librería para la ejecución de pruebas unitarias y de integración.

### 🎨 Frontend (React & Vite)
* **React**: Biblioteca principal para la construcción de la interfaz de usuario.
* **React Router DOM**: Gestión de la navegación entre vistas.
* **Context API**: Manejo del estado global de la aplicación (Carrito, Auth).
* **React-Bootstrap / Bootstrap**: Frameworks para el diseño responsivo y estilizado.
* **Fontawesome**: Librería de iconos para la interfaz visual.
* **Sweet alerts 2**: Librería de alertas para la interfaz visual.
* **Datatables**: Librería de tablas para la interfaz visual.

---

## 🎨 Vistas y Diseño (UX/UI)

El sistema diferencia el acceso y las funcionalidades según el rol del usuario:

### 🌐 Vistas Usuario
* **Home / Landing Page**: Presentación de la marca y acceso a categorías y productos.
* **Categorías Productos**: Galería de categorías de productos.
* **Listado de Productos**: Galería de productos según categoría.
* **Detalle Producto**: Información detallada de un producto específico.
* **Registro / Login**: Flujo de acceso y validación de usuarios.
* **Perfil**: Información personal de usuario registrado.
* **Carro de Compras**: Resumen de productos seleccionados por el usuario.
* **Pasarela de Pago**: Resumen y formulario de orden de compra.
* **Agradecimiento**: Comprueba que la orden fue realizada efectivamente y descarga opcional de comprobante.


### 🔒 Vistas Adminitrativas
* **Login**: Acceso limitado de la plataforma administrativa.
* **Home**: Primer acceso al sitio, información personal y acceso a administración del sitio.
* **Gestión Productos**: Monitoreo de productos y stock mediante DataTables.
* **Gestión Ordenes de Compra**: Monitoreo de órdenes de compra emitidas mediante DataTables.
* **Gestión Usuarios**: Monitoreo de usuarios registrados mediante DataTables.

---

## 🗄️ Modelo de Datos
El diseño de la base de datos sigue un modelo relacional optimizado. Puedes encontrar el diagrama detallado en la carpeta de documentación:
* **Diagrama Entidad-Relación**: `./Documentacion/Diagrama_DB.png`.

---

## 📑 Contrato de API REST

A continuación se detallan los endpoints principales definidos para el sistema:

### 1. Autenticación y Usuarios
* **POST `/registro`**: Crea un nuevo cliente con RUT, nombre, contacto y ubicación.
* **POST `/login`**: Autentica al usuario y retorna un Token JWT junto a los datos básicos del perfil.

### 2. Catálogo de Insumos
* **GET `/productos`**: Retorna el listado completo incluyendo marca y modelo.
* **POST `/productos` (Admin)**: Permite agregar nuevos insumos al catálogo.

### 3. Carrito y Ventas
* **POST `/carrito/agregar`**: Vincula productos a la sesión de compra del usuario.
* **POST `/boleta`**: Finaliza la compra, genera el código de boleta y registra el total.

### 4. Gestión y Dashboard
* **PUT `/productos/:id`**: Actualización de stock, precios o descripción.
* **DELETE `/productos/:id`**: Eliminación lógica de productos.
* **GET `/admin/usuarios`**: Listado de clientes y total de compras para análisis.
* **GET `/admin/boletas`**: Historial detallado de ventas para el administrador.

> **Nota**: Para ver el detalle técnico completo de las peticiones (Request/Response), consultar los archivos en la carpeta `/Backend` o el archivo `./Documentacion/API_Contract.md`.