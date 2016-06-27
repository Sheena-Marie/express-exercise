/*jshint esversion: 6 */

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');

describe('routes', () => {
  beforeEach(() => {
    console.log('I\'m running before a test');
  });

  describe('GET /:name', () => {
    it('should respond with name', (done) => {
      request(app)
      .get('/bob')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        expect(res.text).to.include('bob');
        done();
      });
      // expect(1).to.equal(2);
    });
  });
});
