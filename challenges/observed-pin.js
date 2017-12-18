/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to 
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the 
PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually 
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it 
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they 
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array 
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. 
But please note that all PINs, the observed one and also the results, must be strings, because of 
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

*/


/*console.log(adjacent(0));
console.log(adjacent(1));
console.log(adjacent(2));
console.log(adjacent(3));
console.log(adjacent(4));
console.log(adjacent(5));
console.log(adjacent(6));
console.log(adjacent(7));
console.log(adjacent(8));
console.log(adjacent(9));*/
//8, 11, 369

console.log(getPINs([8]));
console.log(getPINs([1,1]));
console.log(getPINs([3,6,9]));


function getPINs(observed) {
	let totalNumbers = [];
	//get array of arrays and for each number of the opversrve we get its adjacnets and store in an arralist
	for (let i = 0; i < observed.length; i++) {
		totalNumbers.push( adjacent( observed[i] ) );
	}

 return totalNumbers
}


function adjacent(num){
let str = "";
let afa = [
	["X", "X", "X", "X"],
	["X",1,2,3,"X"],
	["X",4,5,6,"X"],
	["X",7,8,9,"X"],
	["X", "X", 0, "X", "X"],
	["X", "X", "X", "X"]
 ];

	for(let i = 1; i < afa.length-1;  i += 1){ 
		for (let j = 1; j < afa[i].length -1; j += 1) {
			//if( afa[i][j] === num) console.log( "i: "+i +" === "+num );
			//console.log( afa[i][j]  )
			//up
			if( afa[i-1][j] !== "X" && afa[i][j]  === num){  str = str + afa[i-1][j];} 
			//left
		    if( afa[i][j-1] !== "X" && afa[i][j]  === num){   str = str + afa[i][j-1];}
			//down
			if( afa[i+1][j] !== "X" && afa[i][j]  === num){   str = str + afa[i+1][j];}
			//right	
			if( afa[i][j+1] !== "X" && afa[i][j]  === num){   str = str + afa[i][j+1];}
		}
		 //str += ", ";
		
	}

return str;
}

module.exports = getPINs