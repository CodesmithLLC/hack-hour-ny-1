/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
	let prev = arr[0];
	let now = arr[0];
	let min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		 min =  Math.min( min, prev+arr[i] )
		 console.log("min",min)
		 prev = Math.max(min,prev+arr[i]);
		 now = Math.max(now, prev )
	}
	console.log( now )
	return now;
}


	maxSubarray( [1, -2, 3, 10, -4, 7, 2, -5] )
	maxSubarray([15,20,-5,10])
	maxSubarray( [ -1,-2,-3,-4 ] )
 	//module.exports = maxSubarray;
