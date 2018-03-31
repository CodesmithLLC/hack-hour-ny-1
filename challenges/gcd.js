/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
/*
function gcd(a, b) {

	//divide each num until you get an irrational number
	//save each divisor into an cache array
	//once both numbers become irrational after dividing 
	//return the highest number from the highest array which is length-1

	let divisor=1;
	let ary=[];
	while ( a<1 && b< 1 ){
		ary.push(ary[divisor])
		a=a/divisor;
		b=b/divisor;
		if( a <    )

	}

}*/-



function gcd(a, b) {

	//divide each num until you get an irrational number
	//save each divisor into an cache array
	//once both numbers become irrational after dividing 
	//return the highest number from the highest array which is length-1
	if(!b){
		return a;
	}

	return gcd( b, a%b );
}

//console.log( gcd( 10, 8 ) );
module.exports = gcd;