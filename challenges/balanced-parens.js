/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){

	//decided what charaters the in puts are going to be
	// () [] {}
	//hava a variable that when there is more
	//than odd numbers of parenthesis it sets the variable to false
	//let allParens=["(",")","{","}","[","]"  ];
	let allParens="(){}[]"

	let inputLeng=input.length;
	let allParenslLeng=allParens.length;
	let p="(";
	let c="{";
	let s="[";
	let bp=true;
	let bc=true;
	let bs=true;
	if( inputLeng<1 ) return false;

	for (let i = 0; i < inputLeng; i++) {
		input[i]
		//console.log( input[i] )
		for (let j = 0; j < allParenslLeng; j++) {
			allParens[j]
			//console.log(  allParens[j] )
			if( input.charAt(i) === allParens.charAt(j)  ){
				//console.log( " input == allParens: ", input[i] );
				bp? bp=false: bp=true;
				bc? bc=false: bc=true;
				bs? bs=false: bs=true;

				if( input.charAt(i)=="(" ||input.charAt(i)==")" ){
				if(input.charAt(i) == p){ p == "(" ? p=")":p="(" ;  }else{return false;}
				}
				
				/*if( input.charAt(i)=="{" ||input.charAt(i)=="}" ){
				if(input.charAt(i) == c){ c == "{" ? c="}":c="{" ;  }else{return false;}
				}
				if( input.charAt(i)=="[" ||input.charAt(i)=="]" ){
				if(input.charAt(i) == s){ s == "[" ? s="]":s="[" ;  }else{return false;}	
				}*/
			}
		}
	}

return bp /*&& bc && bs*/;
}
/* console.log(balancedParens('('));  // false
 console.log(balancedParens('()')); // true
 console.log(balancedParens(')('));  // false */
 console.log(balancedParens('(())'));  // true 1
/* console.log(balancedParens('[](){}')); // true
 console.log(balancedParens('[({})]'));   // true
 console.log(balancedParens('[(]{)}')); // false 1
 console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
 console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
*/
//console.log(balancedParens("123)13{}123[]"));
//module.exports = balancedParens;
