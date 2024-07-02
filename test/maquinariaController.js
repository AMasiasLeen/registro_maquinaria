const request = require('supertest');
const app = require('../index');
const { Maquinaria } = require('../models');

describe('Maquinaria Controller', () => {
  let maquinariaId;

  beforeAll(async () => {
    // Create a test maquinaria
    const maquinaria = await Maquinaria.create({
      nombre: 'Test Maquinaria',
      descripcion: 'This is a test maquinaria.',
      ubicacion: 'Test Location'
    });
    maquinariaId = maquinaria.id;
  });

  afterAll(async () => {
    // Clean up test data
    await Maquinaria.destroy({ where: { id: maquinariaId } });
  });

  test('GET /maquinarias should return all maquinarias', async () => {
    const res = await request(app).get('/maquinarias');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('maquinarias');
  });

  test('POST /maquinarias should create a new maquinaria', async () => {
    const res = await request(app)
      .post('/maquinarias')
      .send({
        nombre: 'New Maquinaria',
        descripcion: 'This is a new maquinaria.',
        ubicacion: 'New Location'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('maquinaria');
  });

  test('GET /maquinarias/:id should return a maquinaria', async () => {
    const res = await request(app).get(`/maquinarias/${maquinariaId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('maquinaria');
  });

  test('PUT /maquinarias/:id should update a maquinaria', async () => {
    const res = await request(app)
      .put(`/maquinarias/${maquinariaId}`)
      .send({ ubicacion: 'Updated Location' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('maquinaria');
  });

  test('DELETE /maquinarias/:id should delete a maquinaria', async () => {
    const res = await request(app).delete(`/maquinarias/${maquinariaId}`);
    expect(res.statusCode).toEqual(204);
  });
});
