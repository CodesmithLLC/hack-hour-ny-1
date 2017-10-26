//  CS-HackHours-romanNumeral

/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

const RomanNumeralMap = {
	"1000": "M",
	"900": "CM",
	"500": "D",
	"400": "CD",
	"100": "C",
	"90": "XC",
	"50": "L",
	"40": "XL",
	"10": "X",
	"9": "IX",
	"5": "V",
	"4": "IV",
	"1": "I",
}
const RomanNumeralDescendingKeyVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


for (let i = 0; i < Object.keys(RomanNumeralMap).length; i += 1) {
  console.log ("RomanNumeralMap[i=" + i + "] === " + RomanNumeralMap[Object.keys(RomanNumeralMap)[i]]);
}

for (let i = 0; i < RomanNumeralDescendingKeyVal.length; i += 1) {
  console.log ("RomanNumeralDescendingKeyVal[i=" + i + "] === " + RomanNumeralMap[RomanNumeralDescendingKeyVal[i]]);
}
  console.log ("... setup testing complete ...");
  console.log ("______________________________");
  console.log ("______________________________");

function romanNumeral(n, iRNKV) {
  // console.log ("______________________________");
  // console.log ("IN romanNumeral iRNKV === " + iRNKV);
  numChars = Math.floor(n / RomanNumeralDescendingKeyVal[iRNKV]);
  // console.log ("IN romanNumeral numChars === " + numChars);
  n -= RomanNumeralDescendingKeyVal[iRNKV] * numChars;
  // console.log ("IN romanNumeral new n === " + n);
  if (n === 0) {
    // console.log ("Array(numChars).join(RomanNumeralMap[iRNKV] === " + Array(numChars).join(RomanNumeralMap[RomanNumeralDescendingKeyVal[iRNKV]]));
    return Array(numChars+1).join(RomanNumeralMap[RomanNumeralDescendingKeyVal[iRNKV]]);
  } else {
    return Array(numChars+1).join(RomanNumeralMap[RomanNumeralDescendingKeyVal[iRNKV++]]) + romanNumeral(n, iRNKV);
  }
}

let testNum;

testNum = 3;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 4;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 5;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 6;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 8;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 9;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 10;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 11;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 800;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 900;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 1000;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 1100;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));
testNum = 1111;
console.log ("romanNumeral(testNum=" + testNum + ") === " + romanNumeral(testNum, 0));




module.exports = romanNumeral;
