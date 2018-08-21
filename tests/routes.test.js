'use strict';

const request = require('supertest');
const app = require('../app');

test('GET / should return the documentation', (done) => {
  request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200)
    .then((res) => {
      expect(res.text).toEqual(
        expect.stringContaining('Timestamp Microservice')
      );
      done();
    });
});
