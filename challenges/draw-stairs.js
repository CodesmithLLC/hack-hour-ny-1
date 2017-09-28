/* Write a function that console logs a staircase of any given height 
where 1 <= N <= 100.
 
 The staircase must climb up from left to right. 
 The last line should only consist of asterisks,
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
	if( !(1 >n) && !(n< 100) ){ 
		alert("number n is not in range of 1 <= N <= 100 "); 
		return;
	}

	let i=0;
	let j=0;
	let a=0;
	let str="";
	for (i=1 ; i <= n; i++) {

		for (j= 0; j <n-i ;j++) {
			str+=" ";
						
		}
		for (a = 0; a <i ; a++) {
			str+="*";
		}
		console.log( str );
		str="";
	}
}
drawStairs(10);

module.exports = drawStairs;
