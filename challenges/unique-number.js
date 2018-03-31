/**
 * Write a function that will take an array of integers, 
 all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
	// create a has table 
	let cache = {}
	let temp = "";
	// loop through the array
	for (let i = 0; i < array.length; i++) {
	// 	if an element of the array shows up twice,, then change the name of the key to false
		if( cache[i] ){
			console.log("yes, ",cache[i])
		 temp = cache[i];
		cache["true"] = temp;

		}else{
	// for every number not in the cache , store it in an hashtable   the number : true
		cache[i] = true;
			console.log( "not in, ",cache[i] )
		}

	}
	// 	after the loop finsihed iterating
	// return the value of any hey that says true
	console.log(cache["true"])
	return cache["true"];
}
uniqueNumber([1,2,1,3,3]); //-> 2

//module.exports = uniqueNumber;
