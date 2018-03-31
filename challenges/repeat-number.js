/**
 * I have an array where every number 
 in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */
//1,2,3,4,5,6,7,8,9,10,11,2,12,
function repeatNumbers(array) {
	let num="";
	let len=array.length;
	for (var i = 0; i < len; i++) {
		let a = Math.abs( array[i] );
		console.log(a)
		if( a   >= 0 ){
			array[Math.abs( array[i] )] = -array[Math.abs( array[i] )];
		} else{
			num = " "+ array[i]+", "
		}

	}

	console.log(num);
	return num


}


repeatNumbers( [1,2,3,4,5,6,7,8,9,10,11,2,12,13])
module.exports = repeatNumbers;
