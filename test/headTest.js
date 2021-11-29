const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns '7' not equal for ['5,6,7']", () => {
    assert.notStrictEqual(head([5, 6, 7]), '7'); 
  });
  it("returns undefined for []", () => {
    assert.isUndefined(head([]), '5'); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });
  it("returns 'Labs' for ['Labs']", () => {
    assert.notStrictEqual(head(['Labs']), 'Hello'); 
  });
});