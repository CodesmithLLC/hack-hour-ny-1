/*
 * Given an array of numbers, 
 * determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {

	let mean;
	let temp;
	for (let i  = 0; i < array.length;  i++) {
		temp=temp+array[i];
	}
	c(temp)
	mean=temp/array.length;
	c(mean)
	let mode =2;
	return mean ==mode;

}

c( modemean([2,2,2]) )

function c(n){
  console.log(n);
}
//module.exports = modemean;
