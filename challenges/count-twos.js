// Write a function "countTwos" that takes a number as an argument, n. The function 
//will return the number of 2s encountered when counting from 1 to n (inclusive). 
//2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	let numString=num.toString();
	let count=0;
	for(let i=1; i<=num; i++ ){
		//convert  every number to string
		let s=i.toString();
		
		//check if each string includes a 2
		//if true  than increase the counter
		if( s.includes("2") ){ 
			count++;console.log(s)
		}
		//if not then just continue loop
	}
	return count;
}

console.log( countTwos( 300 ) );
//console.log( countTwos( 1000 ) );
//module.exports = countTwos;