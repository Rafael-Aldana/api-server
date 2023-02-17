'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);


describe ('API Server', () => {
  it('Should handle invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('should handle bad method', async () => {
    const response = await request.post('/foo');
    expect(response.status).toEqual(404);
  });

  it('should handle if no name', async () => {
    const response = await request.get('/person').query({ name: '' });
    expect(response.status).toEqual(500);
  });

  it('should handle if name exists', async () => {
    const response = await request.get('/person').query({ name: 'John' });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('John');
  });

});
