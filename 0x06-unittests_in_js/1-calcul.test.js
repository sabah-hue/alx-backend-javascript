const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('sum numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive and -ve numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0)

    });

    });

  describe('type == "DIVIDE"', () => {
    it('give correct output', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -1.0, 0.1), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -0.3), 'Error');
    });
  });

  it('for invalid types', () => {
    assert.strictEqual(calculateNumber(123, 1.4, 4.5), 0);
    assert.strictEqual(calculateNumber('invalid', 1.4, 4.5), 0);
  });
});
