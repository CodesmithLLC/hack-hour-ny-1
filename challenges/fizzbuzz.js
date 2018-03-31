// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(n){
    //instantiate cache
    const cache = [];
    //iterate 1 to n times
    for(let i = 1; i <= n; i++){
      //instantiate empty string
      let str = '';
      //check if i is divisible by 3
      //if so concat fizz to the string
      if(!(i % 3)) str += `fizz`;
      //check if i is divisible by 5
        // so, concat buzz to string
      if(!(i % 5)) str += `buzz`;
      //check to see if the string has been concat'd at all. if so, push to cache
      if(str) cache.push(str);
      //otherwise, push i
      else cache.push(i);
    };    
    //return the cache
    return cache;
  }
  

  //Alternative solution
  for (let i = 1; i <= 100; i++) {
    let line = ''
    if (i % 3 === 0) line += 'Fizz'
    if (i % 5 === 0) line += 'Buzz'
    console.log(line || i)
  }
  
module.exports = fizzbuzz;

