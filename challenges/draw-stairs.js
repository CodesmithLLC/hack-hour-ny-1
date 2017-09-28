/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
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
	//keep a holder to contain different strings
	var arr = [];
	//last row = n
	//loop 1 -n
	for(var i = 1; i<=n; i++){
	//keep str into array that gets updated each time - keep adding padding
		var str = '';
	//while i !== n
		//add n-i spaces and i spaces into 
		if(i!==n){
			var padCount = n-i;
			var starCount = i;
			str+=' '.repeat(padCount);
			str+='*'.repeat(starCount);
			console.log(str);
		}else{
		  if(i===n){
		    str+='*'.repeat(i);
		    console.log(str);
		  }
		}
		//get results of str and push into the array
		//arr.push(str);
	}
 // return arr;
}



module.exports = drawStairs;
















