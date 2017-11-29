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
  let str = " ";
  let astr = "*";
  str = str.repeat(n);
  let final = "";
  for (let i = 0; i < n; i += 1) {
    let startInd = (n - 1) - i;
    final += str.substr(0, startInd);
    final += astr.repeat(n-startInd) + "\n";
  }
  console.log(final);
}

module.exports = drawStairs;
