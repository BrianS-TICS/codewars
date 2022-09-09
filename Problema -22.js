// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce( (acumulacion, elemento) => acumulacion + elemento , 0);
};