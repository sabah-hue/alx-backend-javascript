const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi by Utils function', () => {
    const x = sinon.spy(Utils);
    const y = sinon.stub(Utils, 'calculateNumber');
    y.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(y.calledWith('SUM', 100, 20)).to.be.true;
    expect(y.callCount).to.be.equal(1);

    expect(x.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(x.calculateNumber.callCount).to.be.equal(1);

    y.restore();
    x.calculateNumber.restore();
  });
});
