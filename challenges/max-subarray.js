/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

maxSubarray([15,20,-5,10])
function maxSubarray(arr) {
  //set currMax and finalMax to - inf
  let currMax = - Infinity;
  let finalMax = - Infinity;
  //loop through arr
  for(let i = 0; i < arr.length ;i++){
    //set currMax equal to the larger value, between arr[i] and arr[i] + currMax;
    currMax = Math.max(arr[i], arr[i] + currMax);
    //set finalMax to the larger of finalMax, or currMax
    finalMax = Math.max( finalMax,currMax);
  }
  //return finalMax
  return finalMax
}

module.exports = maxSubarray;
