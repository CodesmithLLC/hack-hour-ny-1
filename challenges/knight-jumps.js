// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function insideBoard(position) {
	return (position >= 1 && position <= 8);
}

function knightjumps(str) {
	// let x = str[1]
	let x = Number(str[1]);
	// let y = str[3]
	let y = Number(str[3]);
	// let moves;
	let moves = 0;
	
	// instantiate offset
	let offset = [-1, -2, 1, 2];
	
	// loop through the offset Array
	for (let i = 0; i < offset.length; i++) {
		// new X position = x + offset[i]
		// check if it is inside the board
		if (insideBoard(x + offset[i])) {
			// new Y position = y + offset[(i + 1) % offset.length]
			// check if its on the board
			if (insideBoard(y + offset[(i + 1) % offset.length])){
				// moves ++
				moves++;
			}
		}
		
		// now cover the missing other 4 move combos:
		if (insideBoard(y + offset[i])) {
		// new Y position = y + each offset
		// check if its inside the board
			if (insideBoard(x + offset[(i + 1) % offset.length])){
			// new X position = x + offset[(i + 1) % offset.length]
			// check new X position is inside the board
				// moves ++;
				moves++;
			}
		}
	}
	
	// return moves;
	return moves;
}
Add Comment

module.exports = knightjumps;
