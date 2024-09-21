const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi by Utils function', () => {
    const x = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(x.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(x.calculateNumber.callCount).to.be.equal(1);
    x.calculateNumber.restore();
  });
});
