/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */


/* [8, 9, 7, 6, 5, 3]

*/

function getAllProducts(arr) {
  //array to hold first 3 mult values
  const front = [];
  //array to hold last 3 mult values
  const back = [];
  //hold all of our final products
  const results = [];
  //keep track of the first 3 running products
  let fCurr = 1;
  //keep track of the last 3 running products
  let bCurr = 1;

  //for loop, set i to 0, set j to arr.length - 1, after each iteration, i++,j--
  for (let i = 0, j = arr.length - 1; i < arr.length; i++ , j--) {
    //push our fcurr
    front[i] = fCurr;
    //push or bcurr
    back[j] = bCurr;
    //multiply fcurr by arr[i]
    fCurr *= arr[i];
    //multiply bcurr by arr[j]
    bCurr *= arr[j];
    if (i >= Math.floor(arr.length / 2)) {
      results[j] = front[j] * back[j];
      results[i] = front[i] * back[i];
    }
  }
  return results;
}

module.exports = getAllProducts;
