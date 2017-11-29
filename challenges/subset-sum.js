/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */


function subsetSum(array, target, sum = 0, ind = 0) {
  // base cases
  console.log("arr: ", array);
  console.log("target: ", target);
  if(array.includes(target)) return true;
  if(sum === target) return true;
  if(!array.length) return false;
  let val = array.shift();
  return subsetSum(array, target-val, sum + val) || subsetSum(array, target, sum + array[ind], ind + 1);
}

// function subsetSum(arr, target) {
//   // base cases
//   if(target === 0) return true;
//   else if(target < 0 || arr.length === 0) return false;

//   return subsetSum(arr.slice(1), target - arr[0]) || subsetSum(arr.slice(1), target);
// }

module.exports = subsetSum;
