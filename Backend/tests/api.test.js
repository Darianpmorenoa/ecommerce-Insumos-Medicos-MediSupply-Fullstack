const request = require('supertest');
const app = require('../index');

describe('API MediSupply', () => {

  // 1. GET /api/usuarios → 200
  it('GET /api/usuarios debe retornar 200 y un arreglo', async () => {
    const res = await request(app).get('/api/usuarios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // 2. POST /api/usuarios/login con credenciales correctas → 200
  it('POST /api/usuarios/login con credenciales válidas debe retornar 200 y token', async () => {
    const res = await request(app)
      .post('/api/usuarios/login')
      .send({ email: 'felipe.salazarDEMO@gmail.com', password: '123456' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  // 3. POST /api/usuarios/login con credenciales incorrectas → 401
  it('POST /api/usuarios/login con credenciales inválidas debe retornar 401', async () => {
    const res = await request(app)
      .post('/api/usuarios/login')
      .send({ email: 'felipe.salazarDEMO@gmail.com', password: '654321' });
    expect(res.statusCode).toBe(401);
  });

  // 4. POST /api/usuarios/login con email inexistente → 401
  it('POST /api/usuarios/login con email inexistente debe retornar 401', async () => {
    const res = await request(app)
      .post('/api/usuarios/login')
      .send({ email: 'noexiste@gmail.com', password: '123456' });
    expect(res.statusCode).toBe(401);
  });

  // 5. POST /api/usuarios/registrar con datos válidos → 201
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