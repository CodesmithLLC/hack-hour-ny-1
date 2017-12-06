/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

// Make str into array (just to have access to .reduce)
// Reduce over array, starting with empty object for accumulator
// In reduce callback, check for each character in accumulator object
// 1) If it is in the accumulator object, delete it to cancel it out
// 2) If it is not in the accumulator object, store it in the accumulator
// 3) Return accumulator to make it persist throughout .reduce
// Call Object.keys() on the returned object from the .reduce to get an array of all characters not cancelled out
// If length of that array is not less than 2, it can't be a palindrome

function permPalin(str) {
  return Object.keys(str.split('').reduce((accm, char) => {
    if (accm.hasOwnProperty(char)) delete accm[char];
    else accm[char] = true;
    return accm;
  }, {})).length < 2;
}

module.exports = permPalin;