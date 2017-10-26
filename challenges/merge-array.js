//  CS-HackHours-mergeArrays

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

function mergeArrays(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;
  let newArray = [];
  
  // javascript has no xand...  grrrr...
  while ( idx1 <= arr1.length && idx2 <= arr2.length && !(idx1 === arr1.length && idx2 === arr2.length) ) {
    console.log ( "(idx1, idx2) === ", idx1, idx2 );
    if (idx1 === arr1.length) {
      // newArray.push(arr2[idx2++]);
      newArray.push(arr2[idx2]);
      idx2++;
    }
    else if (idx2 === arr2.length) {
      // newArray.push(arr1[idx1++]);
      newArray.push(arr1[idx1]);
      idx1++;
    }
    // else {
    //   newArray.push( (arr1[idx1] < arr1[idx2]) ? arr1[idx1++] : arr2[idx2++]);
    // }
    else if (arr1[idx1] < arr2[idx2]) {
      newArray.push( arr1[idx1] );
      idx1++;
    }
    else {
      newArray.push( arr2[idx2] );
      idx2++;
    }
  }
  return newArray;
}

var array1 = [3,4,6,10,11,15,21];
var array2 = [1,5,8,12,14,19];

console.log ( "mergeArrays(array1, array2) === " + mergeArrays(array1, array2) );

//  mergeArrays(array1, array2) === 1, 3, 4, 5, 6, 8, 10 ,11, 12, 14, 15, 19, 21
//  mergeArrays(array1, array2) -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]



module.exports = mergeArrays;