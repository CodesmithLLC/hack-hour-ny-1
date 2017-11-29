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


/*  
    * END GOAL : does mean === mode
    * STEPS: 
              1. Find mean
                  a. iterate through array
                  b. add values to sum
                  c. divide sum by array length
                  d. floor value
              2. Find mode
                  a. create object to keep track of values we have seen where the key -> values in 
                      array and value -> amount of times seen
                  b. iterate through array
                  c. if : key in object, increment value
                  d. else : add key with value of 1
                  e. go through object to find key of highest value
                      - get all values
                      - find max
                      - filter object for key, value pairs matching that value
                      - get keys of new filtered obj
                      - find max of those keys
                  f. if more than one key found, get highest
              3. Compare 
*/

function modemean(array) {

  let sum = 0;
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    obj.hasOwnProperty(array[i]) ? obj[array[i]] += 1 : obj[array[i]] = 1;
  }
  let mean = Math.floor(sum/array.length);
  
  let values = Object.values(obj);
  let maxTimesSeen = Math.max(...values);

  let possibleModes = Object.keys(obj).filter(function(key){
    return obj[key] === maxTimesSeen;
  });

  let mode = Math.max(...possibleModes);

  return mean === mode;
}

module.exports = modemean;
