/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
//      *
//     **
//    ***
//   ****
//  *****
// ******
let string = "";
for (let i = 1 ; i <= n; i += 1) {
    for (let spaces = 0; spaces < n-i ;spaces += 1) {
        string+=" ";
                    
    }
    for (let stars = 0; stars < i ; stars += 1) {
        string += "*";
    }
    
    console.log( string );
    string = "";
    }

}


module.exports = drawStairs;
