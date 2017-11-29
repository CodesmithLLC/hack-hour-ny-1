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
 * CCXLIII- 243
 * 
 */

function romanNumeral(n, place = 10) {
  let map = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
  }
  // get each individual place of the number
  // let strN = n.toString();
  // let arr = [];
  // let divisor = 1; 
  // for (let i = 0; i < strN.length; i += 1) {
    
  // }
  
  let num = n;
  singleNum = num % place;
  // figure out : singleNum = num % val

  romanNumeral(num - singleNum, place *= 10);
  

}

module.exports = romanNumeral;
