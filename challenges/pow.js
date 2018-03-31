/* Write a function that calculates x^y, 
where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	let result=0;
	for (var i =1 ; i < power-1 ; i++) {
			base=base*base
			c(base);
	}

	//c(base);
	return result;
}
pow(2,5)

function c(argument) {
	console.log(argument)
}
module.exports = pow;
