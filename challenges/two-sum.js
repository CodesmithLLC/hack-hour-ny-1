/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, target){
    //instantiate cache
    const cache = {};
    //loop through array
    for(let i = 0; i < arr.length; i++){
      //check if i exists in cache
        //if so, return true
      if(cache[arr[i]]) return true;
        //else add target - i to the cache
      else cache[target - arr[i]] = true;
    };
    return false
  }
  
  twoSum([2,-5,3,6,7],-2)

module.exports = twoSum;
