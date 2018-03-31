/**
 * Given a string, determine if any of 
 the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	let normalizedStr=str.toLowerCase().split(' ').join('').split('');
	let  cache={};
	let isEven=normalizedStr.length % 2 ===0;
	let oddCount=0;

	for (var i = 0; i < normalizedStr.length; i++) {
		cache[ normalizedStr[i] ] ? cache[  normalizedStr[i]  ]++ : cache[  normalizedStr[i] ]=1;
	}

	for(let key in cache){
		if( cache[key] % 2!==0 ){oddCount++;}
		if( cache[key] % 2!==0 && isEven ){return false;}
		if( cache[key] % 2!==0 && oddCount >1  & !isEven){return false;}
	}

	return true;
}
console.log( permPalin( "abab" )  )
module.exports = permPalin;