const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [0] for h in hello", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});

// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]