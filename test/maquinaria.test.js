const { Maquinaria } = require('../models');

describe('Maquinaria Model', () => {
  let maquinaria;

  beforeAll(async () => {
    maquinaria = await Maquinaria.create({
      nombre: 'Test Maquinaria',
      descripcion: 'This is a test maquinaria.',
      ubicacion: 'Test Location'
    });
  });

  afterAll(async () => {
    await Maquinaria.destroy({ where: { id: maquinaria.id } });
  });

  test('should create a maquinaria', async () => {
    expect(maquinaria).toHaveProperty('id');
    expect(maquinaria.nombre).toBe('Test Maquinaria');
  });

  test('should update a maquinaria', async () => {
    await maquinaria.update({ ubicacion: 'Updated Location' });
    expect(maquinaria.ubicacion).toBe('Updated Location');
  });

  test('should delete a maquinaria', async () => {
    await maquinaria.destroy();
    const found = await Maquinaria.findByPk(maquinaria.id);
    expect(found).toBeNull();
  });
});
