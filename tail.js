/*working with arrays and writing assertions
return the tail of an array, every element except the head */
const assertEqual = require('./assertEqual');

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
  //console.log("this is the result:" + result);
  return result;
};

module.exports = tail;
