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

function fizzbuzz(num) {
// GOAL: return an array from 1 up to num
// set empty array
// set a loop that sets to the length of num and increment by 1
// set the conditions of fizz, buzz, and fizzbuzz,
    // Use control flow statements to set the conditions
        // push each satisfied conditions into an new array
        function fizzbuzz(num) {
            // GOAL: return an array from 1 up to num
            // set empty array
            // set a loop that sets to the length of num and increment by 1
            // set the conditions of fizz, buzz, and fizzbuzz,
                // Use control flow statements to set the conditions
                    // push each satisfied conditions into an new array
            
                const newArr = []
                for(let i = 1; i <= num; i ++) {
                    if( i % 3 == 0) {
                      newArr.push('fizz')
                    }
                    if( i % 5 == 'buzz') {
                      newArr.push('buzz')
                    }
                    if ( i % 5 ===0  && i % 3 ===0 ) {
                      newArr.push('fizzbuzz')
                    }
                    if ( i % 5 !== 0 && i % 3 !==0 ) {
                        newArr.push(i)
                    }
                    
                } 
                return newArr
            }
            
            fizzbuzz(16)
}

module.exports = fizzbuzz;
