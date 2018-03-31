/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modeMean(arr){
  const cache = {};
  let count = mean = 0;
  let mode;
  
  //loop array
  arr.forEach(number => {
    //check if exists in cache
    if(cache[number]){
      //if yes, ++, check val against count
      if(++cache[number] > count){
        //if greater, set count to cache[number], set mode to number
        count = cache[number];
        mode = number
      }
    }
      //else cache[number] = 1
      cache[number] = 1;
    //add number to mean
    mean += number;
  })
  //return mode === mean/arr.length
  return mode === mean/arr.length;
}

module.exports = modemean;
