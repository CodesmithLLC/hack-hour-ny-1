// CS-HackHours-binToDec

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

function pow(base, power) {
    if (power === 0)
      return 1;
    else if (power === 1)
      return base;
    else if (power > 1)
      return base * pow(base, power - 1);
}

function binToDec(binary) {
  const parserArray = binary.split("");
  let oldBase = 2;
  let newBaseValue = 0;
  let currentPower = 0;
  let numberLength = parserArray.length;
  let currentDigit;
  for (let currentPower = 0; currentPower < numberLength; currentPower++) {
    currentDigit = Number.parseInt( parserArray[numberLength - 1 - currentPower] );
    newBaseValue += pow(oldBase, currentPower) * currentDigit;
  }
//   console.log("binToDec(" + binary + ")  ==>>  newBaseValue === " + newBaseValue);
  return newBaseValue;
}

// binToDec('0');   	//	-> 0
// binToDec('11');  	//	-> 3
// binToDec('100'); 	//	-> 4
// binToDec('101'); 	//	-> 5
// binToDec('0101'); 	//	-> 5

module.exports = binToDec;