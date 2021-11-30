const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns l:2 h:1 for LHL", () => {
    assert.deepEqual(countLetters('LHL'), {l:2,h:1});
  });
  it("returns l:2 h:1 for lhl", () => {
    assert.deepEqual(countLetters('lhl'), {l:2, h:1}); 
  });
  it("returns i:1, n:1, t:1, h:2, e:2, o:1, u:1, s:1 for 'in the house'", () => {
    assert.deepEqual(countLetters('in the house'), {i:1, n:1, t:1, h:2, e:2, o:1, u:1, s:1}); 
  });
});