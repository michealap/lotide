/*working with arrays and writing assertions
return the tail of an array, every element except the head */
const tail = function(words) {
  //console.log(words); check if words were passed
  let result = [];
  if (words.length < 1) {
    console.log("no element passed");
    return [];
  }
  if (words.length === 1) {
    console.log("only one element");
    return [];
  }
  for (let i = 1; i < words.length; i++) {
    result.push(words[i]);
  }
    
  //const [, ...result] = array; returns the last element of array
  console.log("this is the result:" + result);
  return result;
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}`);
};


// Test Case 1: Check the returned array elements
const words = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); // ensure we get back two elements
assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[1], "Labs"); // ensure second element is "Labs"