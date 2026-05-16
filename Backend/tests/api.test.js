const request = require('supertest');
const app = require('../index');

describe('API MediSupply', () => {
  let token = ''; // Variable para guardar el token que usaremos en las rutas protegidas

  // 1. POST /api/usuarios/login con credenciales correctas → 200 y guardamos token
  it('POST /api/usuarios/login con credenciales válidas debe retornar 200 y token', async () => {
    const res = await request(app)
      .post('/api/usuarios/login')
      .send({ email: 'felipe.salazarDEMO@gmail.com', password: '123456' });
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    
    token = res.body.token; // <-- Guardamos el token para los siguientes tests
  });

  // 2. GET /api/usuarios → Ahora enviamos el token para que retorne 200 (CORRECCIÓN )
  it('GET /api/usuarios debe retornar 200 y un arreglo enviando token de autorización', async () => {
    const res = await request(app)
      .get('/api/usuarios')
      .set('Authorization', `Bearer ${token}`); // <-- Mandamos el token en las cabeceras
    
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // 3. GET /api/usuarios sin token → Debería fallar con 401 (Test extra para asegurar la seguridad)
  it('GET /api/usuarios debe retornar 401 si se intenta acceder sin enviar token', async () => {
    const res = await request(app).get('/api/usuarios');
    expect(res.statusCode).toBe(401);
  });

  // 4. POST /api/usuarios/login con credenciales incorrectas → 401
  it('POST /api/usuarios/login con credenciales inválidas debe retornar 401', async () => {
    const res = await request(app)
      .post('/api/usuarios/login')
      .send({ email: 'felipe.salazarDEMO@gmail.com', password: '654321' });
    expect(res.statusCode).toBe(401);
  });

  // 5. POST /api/usuarios/login con email inexistente → 401
  it('POST /api/usuarios/login con email inexistente debe retornar 401', async () => {
    const res = await request(app)
      .post('/api/usuarios/login')
      .send({ email: 'noexiste@gmail.com', password: '123456' });
    expect(res.statusCode).toBe(401);
  });

  // 6. POST /api/usuarios/registrar con datos válidos → 201
  it('POST /api/usuarios/registrar con datos válidos debe retornar 201', async () => {
    const res = await request(app)
      .post('/api/usuarios/registrar')
      .send({
        nombre: 'Test',
        apellido: 'User',
        email: `test${Date.now()}@gmail.com`,
        password: '123456',
        rut: '11111111-1',
        telefono: '+56912345678',
        region: 'Metropolitana',
        comuna: 'Santiago'
      });
    expect(res.statusCode).toBe(201);
  });
});