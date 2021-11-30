const inspect = require('util').inspect;
const assertEqual = require('./assertEqual');

const flatten = function(array) {
  array.forEach((element) => {
    if (Array.isArray(element)) {
      element.toString();
    }
  });
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let y = 0; y < array[i].length; y++) {
        newArray = array[i][y];
      }
    }
  }
  return newArray;
}

module.exports = flatten;