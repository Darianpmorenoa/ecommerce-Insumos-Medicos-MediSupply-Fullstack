# API REST - E-commerce Insumos Médicos

---

## 1. AUTENTICACION

### POST /login

Request:
```json
{
  "email": "juan@gmail.com",
  "password": "1234"
}
```

Response:
```json
{
  "mensaje": "Login exitoso",
  "token": "eyJhbGciOiJI...",
  "usuario": {
    "id_usuario": 1,
    "nombre": "Juan",
    "email": "juan@gmail.com",
    "rol": "cliente"
  }
}
```

---

## 2. USUARIOS

### GET /usuarios
Headers:
```json
  Authorization: Bearer <token>
```

---

### GET /usuarios/{id_usuarios}
Headers:
```json
  Authorization: Bearer <token>
```

---

### POST /usuarios
Headers:
```json
  Authorization: Bearer <token>
```

```json
{
  "rut": "12345678-9",
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@gmail.com",
  "password": "1234",
  "telefono": "987654321",
  "region": "RM",
  "comuna": "Santiago"
}
```



---

### PUT /usuarios/{id}
Headers:
```json
  Authorization: Bearer <token>
```

```json
{
  "telefono": "912345678"
}
```

---

### DELETE /usuarios/{id_usuarios}
Headers:
```json
  Authorization: Bearer <token>
```

---

## 3. PRODUCTOS

### GET /productos
```json
{
  "cantidad_producto":65,
  "prev_page": null,
  "next_page":"/?page=2",
  "result":[{
  "id_producto": 1,
  "nombre_producto": "Termómetro digital",
  "descripcion": "Medidor de oxígeno",
  "imagen": "img.jpg",
  "precio": 5000,
  "categoria": "Salud",
  "marca": "HealthCorp"
}]
}
```

### GET /productos/{id_productos}

```json
{
  "id_producto": 1,
  "nombre_producto": "Termómetro digital",
  "descripcion": "Medidor de oxígeno",
  "imagen": "img.jpg",
  "precio": 5000,
  "categoria": "Salud",
  "marca": "HealthCorp"
}
```

---

### POST /productos
Headers:
```json
  Authorization: Bearer <token>
```

```json
{
  "nombre_producto": "Termómetro digital",
  "descripcion": "Medidor de oxígeno",
  "imagen": "img.jpg",
  "precio": 5000,
  "stock": 100,
  "categoria": "Salud",
  "marca": "HealthCorp"
}
```

---

### PUT /productos/{id_productos}
```json
Headers:
  Authorization: Bearer <token>
{
  "precio": 12000
}
```

---

### DELETE /productos/{id_productos}
Headers:
```json
  Authorization: Bearer <token>
```

---

## 4. CARRITO

### POST /carrito

```json
{
  "id_usuario": 1
}
```

---

### GET /carrito/{id_carrito}
```json
Response:
{
  "id_carrito": 1,
  "id_usuario": 1,
  "items": [
    {
      "id_producto": 2,
      "nombre_producto": "Termómetro digital",
      "cantidad": 3,
      "precio_unitario": 5000,
      "subtotal": 15000
    }
  ],
  "total": 15000
}
```
---

### POST /carrito/agregar

```json
{
  "id_carrito": 1,
  "id_producto": 2,
  "cantidad": 3
}
```

---

### PUT /api/carrito/{id_carrito}/items/{id_producto}
body:
```json
{ "cantidad": 5 }
```

---

### DELETE /api/carrito/{id_carrito}/items/{id_producto}

```json
{
  "id_carrito": 1,
  "id_producto": 2
}
```

---

## 5. CHECKOUT (IMPORTANTE PARA LA COMPRA)

### POST /checkout

```json
{
  "id_carrito": 1,
  "metodo_pago": "tarjeta"
}
```

Response:

```json
{
  "mensaje": "Compra realizada",
  "cod_boleta": "B001"
}
```

---

## 6. BOLETA

### GET /boletas
Headers:
```json
  Authorization: Bearer <token>
```

---

### GET /boletas/{cod_boleta}
Headers:
```json
  Authorization: Bearer <token>
```

```json
{
  "cod_boleta": "B001",
  "fecha": "2026-04-26",
  "total": 10000,
  "estado": "pagado",
  "productos": [
    {
      "id_producto": 1,
      "cantidad": 2,
      "precio_unitario": 5000
    }
  ]
}
```

---

### GET /boletas/{id_usuario}
Headers:
```json
  Authorization: Bearer <token>
```

---

### PUT /boletas/{cod_boleta}
Headers:
```json
  Authorization: Bearer <token>
```

```json
{
  "estado": "enviado"
}
```

---