/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1,arr2){ 
  //create cache
  const merged = [];
  //create 2 vars repping index of each array
  let ind1 = 0;
  let ind2 = 0;
  //while loop until both arrays are fully traversed
  while(arr1[ind1] || arr2[ind2]){
    //if val at the first arr is lt the 2nd
      //if so, push that to cache, inc ind1 by 1
    if(arr1[ind1] < arr2[ind2]) merged.push(arr1[ind1++]);
    //else check val at the 2nd arr is smaller || = to 1st arr
      //if so, push to cache, inc ind2 by 1
    else if(arr1[ind1] >= arr2[ind2]) merged.push(arr2[ind2++]);
    //else check if the value at arr1[ind1] exists
      //if so, push the rest of arr1, else arr2
    else{
      arr1[ind1] ? merged.push(...arr1.slice(ind1)) 
      : merged.push(...arr2.slice(ind2));
      break;
    }
  }
  return merged;
};

module.exports = mergeArrays;
