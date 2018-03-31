/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumber(array){
  //formula for summing numbers in a consecutive range (accounting for the one extra)
  const expected = (array.length * (array.length - 1)) / 2;
  //init a var to hold the sum of all the numbers in the array
  let sum = 0;
  //a loop to sum those numbers
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  //the difference of the sum and the expected will be the repeated number in the consec range
  return sum - expected;
}

module.exports = repeatNumbers;
