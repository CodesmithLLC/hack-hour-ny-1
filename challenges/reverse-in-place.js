'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

// Easy & safe...  for loop...
function reverseInPlace(array) {
  if (array.length < 2) {
    return array;
  } else {
    for (let currIdx = 0; currIdx < array.length / 2; currIdx++) {
      [array[currIdx], array[array.length - 1 - currIdx]] = [array[array.length - 1 - currIdx], array[currIdx]];
    }
    return array;
  }
}

// Trickier...  recursion...
function reverseInPlace(array, currIdx = 0) {
  if (array.length < 2) {
    return array;
  } else {
    // console.log("____________________________________");
    console.log("____________________________________");
    console.log("reverse idx's  " + currIdx + " & " + (array.length - 1 - currIdx));
    [array[currIdx], array[array.length - 1 - currIdx]] = [array[array.length - 1 - currIdx], array[currIdx]];
    console.log("array === " + array);
    currIdx += 1;
    let blnNeedRecursion = Math.floor(array.length / 2);
    if (currIdx < blnNeedRecursion) {
      return reverseInPlace(array, currIdx);
    }
    return array;
  }
}

let testArray;
console.log("////////////////===>>>>>>>>>>>>>>>");
testArray = [];
console.log("reverseInPlace(" + testArray + ") === " + reverseInPlace(testArray));
console.log("////////////////===>>>>>>>>>>>>>>>");
testArray = [0];
console.log("reverseInPlace(" + testArray + ") === " + reverseInPlace(testArray));
console.log("////////////////===>>>>>>>>>>>>>>>");
testArray = [0, 1];
console.log("reverseInPlace(" + testArray + ") === " + reverseInPlace(testArray));
console.log("////////////////===>>>>>>>>>>>>>>>");
testArray = [0, 1, 2];
console.log("reverseInPlace(" + testArray + ") === " + reverseInPlace(testArray));
console.log("////////////////===>>>>>>>>>>>>>>>");
testArray = [0, 1, 2, 3];
console.log("reverseInPlace(" + testArray + ") === " + reverseInPlace(testArray));
console.log("////////////////===>>>>>>>>>>>>>>>");
testArray = [0, 1, 2, 3, 4];
console.log("reverseInPlace(" + testArray + ") === " + reverseInPlace(testArray));
console.log("////////////////===>>>>>>>>>>>>>>>");

module.exports = reverseInPlace;