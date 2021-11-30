/*Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. */
const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;