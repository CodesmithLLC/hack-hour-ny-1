/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
	//create and empty array called results
	let newarray = [];
	//temp variable
	let temp;
	//Loop through the array 	
	for (var i = 0 ; i<  array.length ; i++) {
		//assign the temp variable
		temp = array[0];
		
		// loop through every array again
		for (var j = 0; j < array.length; j++) {
			
				//exlude for each current  index of the outer loop
				if( i != j   ){ 
					// 	multiple all numbers and store it on temp variable
					temp =  temp *array[j];
				 } 
			
		}
		// and store this number in the newarray at index i of the outter loop
		newarray[i] = temp;
	}
	
	
	// return new array
	console.log(newarray )
	return newarray;
}

getAllProducts([1, 7, 3, 4]);
module.exports = getAllProducts;
