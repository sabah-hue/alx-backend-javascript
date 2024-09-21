const request = require('request');
const { expect } = require('chai');

describe( 'test api', () => {
  const url = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('valid :id', (done) => {
    request.get(`${url}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('valid :id', (done) => {
    request.get(`${url}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it(' negative number values in :id', (done) => {
    request.get(`${url}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('non-numeric values in :id', (done) => {
    request.get(`${url}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post(`${url}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${url}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
