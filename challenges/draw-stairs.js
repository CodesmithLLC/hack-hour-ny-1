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

function stairs(n){
  //init empty String
  let str = ``;
  //init two vars, repping num * and num spaces
  let numAst, numSpace;
  //for loop, start at 1, i <= n, i++
  for(let i = 1; i <= n; i++){
    //set num of spaces to n - i
    numSpace = n - i;
    //set num of * to i
    numAst = i;
    //concat our string with those characters repeated, append \n
    str += " ".repeat(numSpace) + `*`.repeat(numAst) + `\n`;
    
  };
  
  console.log(str)
}


module.exports = drawStairs;
