'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { sequelize } = require('../src/models/index');



beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('server', () => {
  it('should create clothes', async () => {
    const response = await request.post('/clothes').send({
      name: 'Pants',
      description: 'Grey pants',
      price: 1000,

    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('pants');
    expect(response.body.description).toEqual('Grey pants');
    expect(response.body.price).toEqual(1000);
    expect(response.body.id).toBeTruthy();
  });

  it('get clothes', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('pants');
    expect(response.body[0].description).toEqual('Grey pants');
    expect(response.body[0].price).toEqual(1000);
    expect(response.body[0].id).toBeTruthy();
  });

  it('gets all clothes', async () => {

    const response = await request.get('/clothes');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);

  });

  it('deletes an item', async () => {
    const response = await request.delete('/clothes/1');
    expect(response.status).toEqual(200);
  });

  it('updates an item', async () => {
    const response = await request.put('/clothes/1').send({
      name: 'Pants',
      description: 'Blue Pants',
      price: 2000,
    });
    expect(response.status).toEqual(200);

  });

});
