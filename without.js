const eqArrays = function(firstList, secondList) {
  //console.log(firstList, secondList);
  if (firstList.length !== secondList.length) {
    return false;
  }
  for (let i = 0; i < firstList.length; i++) {
    if (firstList[i] !== secondList[i]) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  const sourceWithout = [];
  for (let i = 0; i < source.length; i++) {
    //loop through the length of 1st array
    if (!itemsToRemove.includes(source[i])) {
      sourceWithout.push(source[i]);
    }
  }
  console.log(sourceWithout);
  return sourceWithout;
};

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual,expected);
  if (isEqual) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}\n`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}\n`);
};

without([1, 2, 3], [1]); // => [2, 3]
without([1, 2, 3, 1], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // =>true
assertArraysEqual(words, ["hel", "world", "lighthouse"]); // =>false
