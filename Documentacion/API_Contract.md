# API REST - E-commerce Insumos Médicos

---

## CRUD USUARIOS

### Obtener usuarios

```http
GET /usuarios
```

**Response:**

```json
[
  {
    "id_usuario": 1,
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan@gmail.com"
  }
]
```

---

### Crear usuario

```http
POST /usuarios
```

**Request:**

```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@gmail.com",
  "password": "1234",
  "telefono": "987654321",
  "region": "RM",
  "comuna": "Santiago"
}
```

**Response:**

```json
{
  "mensaje": "Usuario creado correctamente"
}
```

---

### Actualizar usuario

```http
PUT /usuarios/{id}
```

**Request:**

```json
{
  "telefono": "912345678"
}
```

**Response:**

```json
{
  "mensaje": "Usuario actualizado"
}
```

---

### Eliminar usuario

```http
DELETE /usuarios/{id}
```

**Response:**

```json
{
  "mensaje": "Usuario eliminado"
}
```

---

## LOGIN

### 🔹 Iniciar sesión

```http
POST /login
```

**Request:**

```json
{
  "email": "juan@gmail.com",
  "password": "1234"
}
```

**Response:**

```json
{
  "mensaje": "Login exitoso",
  "id_usuario": 1
}
```

## PRODUCTOS

### Obtener productos

```http
GET /productos
```

**Response:**

```json
[
  {
    "id_producto": 1,
    "nombre_producto": "Termómetro digital",
    "precio": 5000,
    "modelo": "T100",
    "marca": "MedTech"
  }
]
```

---

### Obtener producto por ID

```http
GET /productos/{id}
```

---

### Crear producto

```http
POST /productos
```

**Request:**

```json
{
  "nombre_producto": "Termómetro digital",
  "descripcion": "Medidor de oxígeno",
  "precio": 5000,
  "modelo": "OX200",
  "marca": "HealthCorp"
}
```

**Response:**

```json
{
  "mensaje": "Producto creado correctamente"
}
```

---

### Actualizar producto

```http
PUT /productos/{id}
```

**Request:**

```json
{
  "precio": 12000
}
```

**Response:**

```json
{
  "mensaje": "Producto actualizado"
}
```

---

### Eliminar producto

```http
DELETE /productos/{id}
```

**Response:**

```json
{
  "mensaje": "Producto eliminado"
}
```

---

## CARRITO

### Crear carrito

```http
POST /carrito
```

**Request:**

```json
{
  "id_usuario": 1
}
```

**Response:**

```json
{
  "mensaje": "Carrito creado"
}
```

---

### Obtener carrito

```http
GET /carrito/{id}
```

---

### Agregar producto al carrito

```http
POST /carrito/agregar
```

**Request:**

```json
{
  "id_carrito": 1,
  "id_producto": 2,
  "cantidad": 3
}
```

**Response:**

```json
{
  "mensaje": "Producto agregado al carrito"
}
```

---

### Eliminar producto del carrito

```http
DELETE /carrito/eliminar
```

**Request:**

```json
{
  "id_carrito": 1,
  "id_producto": 2
}
```

**Response:**

```json
{
  "mensaje": "Producto eliminado del carrito"
}
```

---

## BOLETA

### Crear boleta

```http
POST /boleta
```

**Request:**

```json
{
  "id_usuario": 1,
  "productos": [
    {
      "id_producto": 1,
      "cantidad": 2
    }
  ]
}
```

**Response:**

```json
{
  "cod_boleta": "B001",
  "total_boleta": 10000
}
```

### Obtener boleta

```http
GET /boleta/{cod_boleta}
```

**Response:**

```json
{
  "cod_boleta": "B001",
  "total_boleta": 10000,
  "estado": "pagado"
}
```
