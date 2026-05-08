CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    rut VARCHAR(12) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    region VARCHAR(100),
    comuna VARCHAR(100),
    rol VARCHAR(20) DEFAULT 'cliente'
);

CREATE TABLE categorias (
    id_categoria SERIAL PRIMARY KEY,
    nombre_categoria VARCHAR(100) NOT NULL
);

CREATE TABLE productos (
    id_producto SERIAL PRIMARY KEY,
    nombre_producto VARCHAR(150) NOT NULL,
    descripcion TEXT,
    imagen TEXT,
    precio NUMERIC(10,2) NOT NULL,
    stock INT NOT NULL,
    marca VARCHAR(100),

    id_categoria INT REFERENCES categorias(id_categoria)
);

CREATE TABLE carrito (
    id_carrito SERIAL PRIMARY KEY,
    id_usuario INT UNIQUE REFERENCES usuarios(id_usuario),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE carrito_items (
    id_item SERIAL PRIMARY KEY,
    id_carrito INT REFERENCES carrito(id_carrito)ON DELETE CASCADE,
    id_producto INT REFERENCES productos(id_producto),
    cantidad INT NOT NULL,
    precio_unitario NUMERIC(10,2) NOT NULL
);

CREATE TABLE boletas (
    cod_boleta SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id_usuario),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total NUMERIC(10,2) NOT NULL,
    estado VARCHAR(50) DEFAULT 'pagado',
    metodo_pago VARCHAR(50)
);

CREATE TABLE detalle_boleta (
    id_detalle SERIAL PRIMARY KEY,
    cod_boleta INT REFERENCES boletas(cod_boleta)ON DELETE CASCADE,
    id_producto INT REFERENCES productos(id_producto),
    cantidad INT NOT NULL,
    precio_unitario NUMERIC(10,2) NOT NULL
);