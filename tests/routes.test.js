'use strict';

const request = require('supertest');

const app = require('../app');

describe('Endpoints', () => {
  describe('GET / ', () => {
    it('should return the documentation', (done) => {
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
  });

  describe('GET /api/timestamp/:date?', () => {
    it('should return a JSON object with current timestamp', (done) => {
      const currentDate = new Date();

      request(app)
        .get('/api/timestamp')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(typeof res.body.unix).toBe('number');
          expect(res.body.utc).toBe(currentDate.toUTCString());

          done();
        });
    });

    it('should return the correct unix and utc fields if date string is valid', (done) => {
      const dateString = 'Aug 20, 2018';
      const unix = 1534719600000;
      const date = new Date(dateString);

      request(app)
        .get(`/api/timestamp/${dateString}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.unix).toBe(date.getTime());
          expect(res.body.utc).toBe(date.toUTCString());

          done();
        });
    });

    it('should return the correct unix and utc fields if unix timestamp is provided', (done) => {
      const unix = 1534719600000;
      const date = new Date(unix);

      request(app)
        .get(`/api/timestamp/${unix}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.unix).toBe(date.getTime());
          expect(res.body.utc).toBe(date.toUTCString());

          done();
        });
    });

    it('should return an error message if date string is invalid', (done) => {
      request(app)
        .get('/api/timestamp/invalid-date-string')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.unix).not.toBeDefined();
          expect(res.body.utc).not.toBeDefined();
          expect(res.body.error).toBe('Invalid Date');

          done();
        });
    });
  });
});
