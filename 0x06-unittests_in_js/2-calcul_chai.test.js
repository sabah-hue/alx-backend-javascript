var chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('sum numbers', () => {
      chai.expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
      chai.expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
      chai.expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
      chai.expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
      chai.expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive and -ve numbers', () => {
      chai.expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
      chai.expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
      chai.expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
      chai.expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
      chai.expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0)

    });

    });

  describe('type == "DIVIDE"', () => {
    it('give correct output', () => {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      chai.expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
      chai.expect(calculateNumber('DIVIDE', -1.0, 0.1)).to.equal('Error');
      chai.expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
      chai.expect(calculateNumber('DIVIDE', -2.0, 0.2)).to.equal('Error');
      chai.expect(calculateNumber('DIVIDE', 7.0, -0.3)).to.equal('Error');
    });
  });

  it('for invalid types', () => {
    chai.expect(calculateNumber(123, 1.4, 4.5)).to.equal(0);
    chai.expect(calculateNumber('invalid', 1.4, 4.5)).to.equal(0);
  });
});
