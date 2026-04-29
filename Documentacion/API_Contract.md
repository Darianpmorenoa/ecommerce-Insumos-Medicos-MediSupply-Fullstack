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
  "id_usuario": 1
}
```

---

## 2. USUARIOS

### GET /usuarios

---

### GET /usuarios/{id_usuarios}

---

### POST /usuarios

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



---

### PUT /usuarios/{id}

```json
{
  "telefono": "912345678"
}
```

---

### DELETE /usuarios/{id_usuarios}

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

```json
{
  "nombre_producto": "Termómetro digital",
  "descripcion": "Medidor de oxígeno",
  "imagen": "img.jpg",
  "precio": 5000,
  "categoria": "Salud",
  "marca": "HealthCorp"
}
```

---

### PUT /productos/{id_productos}

```json
{
  "precio": 12000
}
```

---

### DELETE /productos/{id_productos}

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

### PUT /carrito/actualizar

```json
{
  "id_carrito": 1,
  "id_producto": 2,
  "cantidad": 5
}
```

---

### DELETE /carrito/eliminar

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

---

### GET /boleta/{cod_boleta}

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

### GET /mis-boletas/{id_usuario}

---

### PUT /boleta/{cod_boleta}

```json
{
  "estado": "enviado"
}
```

---



