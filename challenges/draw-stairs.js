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
// total spaces for all lines = n
// total lines = n
// each line has +1 than the above line

  var dotInLine = 1;
  for (var i = 1; i <= n; i++) {
    var whitespace = n - dotInLine;
    var str = ''
    while (str.length !== whitespace) {
      str += ' ';
    }
    while (str.length !== n) {
      str += '*';
    }
    console.log(str);
    dotInLine++;
  }
}

module.exports = drawStairs;
