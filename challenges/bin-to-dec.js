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
  let binArr = binary.split(``);
  let dec = binArr.reduce(function(acc, val, ind, arr) {
    return acc + (Math.pow(2, arr.length-1-ind) * val);
  }, 0);

  return dec;
}

function decToBin(decimal) {
  let binArr = [];
  let div = Math.floor(decimal/2);
  let currVal = decimal;

  while (div > 0) {
    binArr.unshift(currVal%2);
    div = Math.floor(currVal/2);
    currVal = div;
  }

  return binArr.join(``);
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// A  10
// B  11
// C  12
// D  13
// E  14
// F  15

function hexToDec(hex) {
  let lettterVals = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  let hexArr = hex.split(``);
  let dec = hexArr.reduce(function(acc, val, ind, arr) {
    return (val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 70) ? acc + (Math.pow(16, arr.length-1-ind) * lettterVals[val]) : acc + (Math.pow(16, arr.length-1-ind) * val);
  }, 0);

  return dec;
}

function decToHex(dec) {
  let letterVals = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  };
  let hexArr = [];
  let div = Math.floor(dec / 16);
  let currVal = dec;

  while (div > 0) {
    let mod = currVal % 16;

    if (letterVals.hasOwnProperty(mod)) {
      mod = letterVals[mod];
    }

    hexArr.unshift(mod);
    div = Math.floor(currVal / 16);
    currVal = div;
  }

  return hexArr.join(``);
}

module.exports = binToDec;
