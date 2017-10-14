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

function romanNumeral(n) {
    //symbol appears after a larger or equal symbol, it is added
    //symbol appears before a larger symbol, it is substracted
    //Don't use same symbol more than 3x in a row
    if(n < 1) return false
    
    const romans = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    
    }
    
    romanStr ='',
    k = undefined;
    for(k in romans) {
      while( n >= romans[k]) {
          console.log(romans[k])
        romanStr += k
        n -= romans[k]
      }
    }
    return romanStr
    
    }

module.exports = romanNumeral;
