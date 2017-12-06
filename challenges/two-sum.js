/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const cache = {};
  for (var i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) return true;
    cache[n - arr[i]] = 'placeholder';
  }

  return false;
}

module.exports = twoSum;
