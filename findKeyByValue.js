const findKeyByValue = function(obj, showName) {
  for (const key in obj) {
    //given the value, check each pair does your calue match what is in the object
    if (showName === obj[key]) {
      return key;
    }
  } return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}`);
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
