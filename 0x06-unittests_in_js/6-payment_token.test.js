const chai = require("chai");
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('when success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
