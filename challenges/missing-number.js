/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/
function missingNum(arr) {
	let result = 0;
	let len =  arr.length
	let sum = 0;
	console.log("len:", len)
	//use guasess progresive addition to get the toatl of sum number from 1-> n
	let gpa = ((len+1)*(len + 2)) /2
	//loop through the array and get the sum of all the numbers
	for (let i = 0; i < len; i++) {
		
		gpa -= arr[i];
	}
	console.log("sum and gpa", sum, gpa);
	//subtract the sum of numbers from the given array
	result = Math.abs( sum - gpa );               
	//convert that difference into an absolute number
	//return that number
	return gpa;
}
console.log( "the missing number is", missingNum(  [ 1,2,3,5]  ) );
module.exports = missingNum;