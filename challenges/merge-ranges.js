/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

//[[0, 1], [3, 5], [4, 8], [9, 10], [10, 12] ]



function mergeRanges(array) {
	//to store ssrted array
	let sortedA = [];
	//create a new empty array  called results
	let results = [];
	//create temporary array
	let tmpArry = [];
	//sort array element from least to greatest
	let len = array.length;
	for (let i = 0; i < len; i++) {
		array[i];
		tmpArry = [];
		for (let j = i; j < len; j++) {
	//use the first subIndex [[0]] of to compare against every element in the array
			
			if(array[ i ][ 0] <  array[ j ][ 0] ) {
				
			}else{

			} 
		}
	}
	//then loop throught the array as a nested loop
	for (let i = 0; i < len; i++) {
		array[i];
	//empty the temporary array
		for (let j = i; j < len; j++) {
	// compare each element againts each other
			array[j];
	//if the  second element is in the previous range then push to the results array
	//if not then continue and 
		}
	//when it exits the inner loop check if the temporary is empty
	//if it is then push the current element in from the outter loop
	// if it is not simply continue
	}
	console.log(results);
	return results
}

mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])

module.exports = mergeRanges;
