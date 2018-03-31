/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(arr){
  //sort largest to smallest
  arr.sort((a,b) => b - a);
  let withNegs = -Infinity;
  //calculate product of 3 largest numbers
  // the front at the largest
  const largest = arr[0] * arr[1] * arr[2];
  //check if value at length - 2 is a negative number
  // if the second to last is a negative, you can bet the last number is a negative
  if(arr[arr.length - 2] < 0){
    //if so, calculate index 0 * index length - 1 * index length - 2
    withNegs = arr[0] * arr[arr.length - 1] * arr[arr.length - 2];
  };
  //math.max to get largest
  return Math.max(largest,withNegs);
};

// compare last 3 largest or first 2 negs and last largest depending on negative numbers

module.exports = highestProduct;
