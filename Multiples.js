function multiple(x) {
  if (!Number.isInteger(x / 3) && !Number.isInteger(x / 5)) {
    return 'Miss';
  }
  if (Number.isInteger(x / 3) && Number.isInteger(x / 5)) {
    return 'BangBoom';
  }
  if (Number.isInteger(x / 3)) {
    return 'Bang';
  }
  if (Number.isInteger(x / 5)) {
    return 'Boom';
  }
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('multiples', () => {
  it('fixed tests', () => {
    assert.strictEqual(multiple(30), "BangBoom")
    assert.strictEqual(multiple(3), "Bang")
    assert.strictEqual(multiple(98),"Miss")
    assert.strictEqual(multiple(65),"Boom")
    assert.strictEqual(multiple(23),"Miss")
    assert.strictEqual(multiple(15),"BangBoom")
  })
})

/* Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, "Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't divisible by any of them. Note: Your program should only return one value

Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom" */ 