const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi by Utils function', () => {
    const x = sinon.spy(console);
    const y = sinon.stub(Utils, 'calculateNumber');

    y.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(y.calledWith('SUM', 100, 20)).to.be.true;
    expect(y.callCount).to.be.equal(1);

    expect(x.log.calledWith('The total is: 10')).to.be.true;
    expect(x.log.callCount).to.be.equal(1);
    y.restore();
    x.log.restore();
  });
});
