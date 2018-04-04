/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let obj = array.reduce((count,el)=>{
    if(count[el] === undefined){
      count[el]=1
    }else{
      count[el]++;
    }
    return count;
  },{});
  let num;
  for(var key in obj){
    if(obj[key] === 2){
      num = key
    }
  }
  return parseInt(num);
  
}

module.exports = repeatNumbers;
