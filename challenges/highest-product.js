/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// [2,5,4,2] =  

function highestProduct(array) {
  
  if (array.length <= 3) {
    if(array.includes(0)) {
      array.splice(array.indexOf(0), 1);
    }
    return 0;
  }
  let maxs = [];
  for (let count=0; count < 3; count++) {
    maxs.push(getMax(array));
  }
  return maxs.reduce((a,b) => {
    return a*b;
  });
}

function getMax(ar){ 
  let currMax = ar[0];
  for (let i=1; i < ar.length; i++) {
    if (ar[i] > currMax) currMax = ar[i];
  }
  let ind = ar.indexOf(currMax);
  ar.splice(ind, 1);
  return currMax;
}

module.exports = highestProduct;
