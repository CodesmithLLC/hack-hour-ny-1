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
  const len = binary.length;
  if(len === 1) return +binary;
  let dec = 0;
  const BASE = 2;
  for (let i = 0; i < len; i++){
    dec = dec + binary[i] * Math.pow(BASE,len-1-i);
  }
  return dec;
}

module.exports = binToDec;
