// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a 
//standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight 
//with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
	//console.log(str)
	let counter = 0 ;
	let numberOfPermittedSpaces = 0;
	//trim string
	let trimmedString = str.slice( 1, -1 );
	//console.log(trimmedString)
	let array = trimmedString.split(" ").map(Number);
	//console.log("array",array)
	//console.log("number of p spaces", numberOfPermittedSpaces)

	let x = array[0];
	let y = array[1];

	/*console.log(x)
	console.log(y)*/
	if( inRange(x) ){
      //console.log("x",true) ;
    }
	else{
	  console.log("x",false);
	}

	if( inRange(y) ){
      //console.log("y",true)
    }
	else{
	  console.log("y",false);
	}
	
	//console.log("number of p spaces", numberOfPermittedSpaces)
	//update the numberOfPermittedSpaces
	//check for cases

	//case 1
	if(   bothInRange((y+2), (x+1)) ) numberOfPermittedSpaces++;
	//case 2
	if( bothInRange((y +1 ), (x +2 )) )numberOfPermittedSpaces++;
	//case 3
	if( bothInRange((y -1 ), (x +2 )) )numberOfPermittedSpaces++;
	//case 4
	if( bothInRange((y -2 ), (x +1 )) )numberOfPermittedSpaces++;
	//case 5
	if( bothInRange((y -2 ), (x -1 )) )numberOfPermittedSpaces++;
	//case 6
	if( bothInRange((y -1 ), (x -2 )) )numberOfPermittedSpaces++;
	//case 7 
	if( bothInRange((y  +1), (x -2 )) )numberOfPermittedSpaces++;
	//case 8
	if( bothInRange((y  +2), (x -1 )) )numberOfPermittedSpaces++;

//I can get this done.



	
	console.log("numberOfPermittedSpaces",numberOfPermittedSpaces)
	return numberOfPermittedSpaces;



}

function inRange(num){
	if( num <0 || num >7 )return false;
	return true;
}

function bothInRange(x, y){
	if( inRange(x) && inRange(y) )return true;
	return false;
}

knightjumps( "(4 5)" );
knightjumps( "(0 7)" );
knightjumps( "(0 0)" );
knightjumps( "(7 0)" );
knightjumps( "(7 7)" );
knightjumps( "(3 4)" );

module.exports = knightjumps;
