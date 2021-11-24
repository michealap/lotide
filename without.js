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
  //declare an empty array for after items are removed
  const sourceWithout = [];
  //nested loop to check the first element of 1st array against all elements of 2nd array
  //then move to the consequent elements of 1st array
  for (let i = 0; i < source.length; i++) {
    //console.log('source:',source[i]) --> check what's being passed;
    //iterate through first array
    let found = false;
      
    for (let j = 0; j < itemsToRemove.length; j++) {
      //console.log('items to remove:', itemsToRemove[j]) --> check what's being passed;
      //iterate thorugh 2nd array

      if (source[i] === itemsToRemove[j]) {
        //if item in 1st array matches 2nd array then set to true and exit loop
        found = true;
        break;
      }
    }
    if (found === false) {
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
