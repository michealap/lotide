const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1,2,3,4,5,6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.Equal(letterPositions("hello").h, [0])
  });
});