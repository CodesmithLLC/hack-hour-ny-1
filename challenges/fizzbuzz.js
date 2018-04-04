// Write a function that returns an array containing the numbers 1 to NUM. 
//Put "fizz" in place of numbers divisble by 3,
// "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
	//should return an array 
	//if num % 3 === 0 put FIZZ into array
	//if num % 5 === 0 put BUZZ into array
	//if num is divisible 3 & 5 ==> fizzbuzz 
	//otherwise just put in regular number
	var arr = [];
	var i = 1;
	while(i<num+1){
		if(i%3 === 0 && i%5 === 0){
			arr.push('fizzbuzz')
		}else if(i%3 === 0){
			arr.push('fizz')
		}else if(i%5 === 0){
			arr.push('buzz')
		}else{
			arr.push(i);
		}
		i++;

	}
	return arr;
}

module.exports = fizzbuzz;































