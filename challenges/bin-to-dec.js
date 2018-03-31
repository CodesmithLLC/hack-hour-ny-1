/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
	if(binary.charAt(0)=="0"){
		binary=binary.substring(1);
	}
	//traverse the array from the left to right
	//this allows to calculate the exponetial value
	//for 2^x power
	let temp=0;
	size=binary.length;
	for( let i=size-1 ; i>= 0 ; i-- )
	{
	    if( binary[i]==1  ){//console.log(1 )  
	        
	        temp+=Math.pow(2, ((size-1)-i)  )
	        console.log(temp)
	      
	    }
	}
	
	
return temp;


module.exports = binToDec;
