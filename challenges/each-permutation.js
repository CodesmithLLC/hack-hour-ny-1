/*
Write a function that takes two arguments, an array and a callback. The 
callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this 
problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {

	//use nested for loop
	// outter loop controls each number
	for (let i = 0; i < arr.length; i++) {
	// inner loop controls every permutation
		for (let j = 0; j < arr.length; j++) {
	// have a condition taht checks when the current indedx is checking against itself from outter to inner
			if( i === j ){ continue}
    // if so skip if not continue searching
			console.log(  arr[i ], " : ", arr[j] )	

			
		}
	}
    // for each permuation get the that number and send it to the callback function
	


}




eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
module.exports = eachPermutation;
