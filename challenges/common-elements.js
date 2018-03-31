// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog']
  ;
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  //create a mega array
  const bigArr = [array2,array3,array4];
  //create cache$
  const cache = {};
  //create retArr
  const retArr = [];
  
  //for loop through our array1
  array1.forEach(el => {
    //check to see if the el if a key
    if(!cache[el]){
      //if it is, skip
      //if not, add, set val to one, loop through rest of arr
      cache[el] = 1;
      bigArr.forEach(arr => {
        //check to see if arr includes el.
          //if yes, add one
          //if its 4, push to retArr
        if(arr.includes(el) && ++cache[el] === 4) retArr.push(el)
      })
    }
  });
          
  return retArr
}

module.exports = commonElements;
