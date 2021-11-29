const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Cases: Check the returned array elements
const words = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); // ensure we get back two elements
assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[1], "Labs"); // ensure second element is "Labs"