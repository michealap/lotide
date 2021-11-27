const eqArrays = function(firstList, secondList) {
  console.log(firstList, secondList);
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

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual,expected);
  if (isEqual) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}\n`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}\n`);
};

const takeUntil = function (array, callback) {
  const results = array.map(callback);
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (results[i] === true) {
      return array.slice(0, i);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", "been", "to", "Hollywood"]);
