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

function romanNumerals(input){
  const map = [
    1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
    40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'
  ];
  
  let numeral = ``;
  //iterate through our map, as long as i less length of map && input > 0, increment by 2
  for(let i = 0; i < map.length && n > 0; i += 2){
    //while input is larger than the number value
    while(map[i] <= n){
      //add roman numberal value .e.g 'M' by [i+1] because roman numeral are always in second from the numbers
      numeral += map[i + 1];
      //subtract map[i] ('number') from input
      n -= map[i];
    };
  };
  return numeral
};

module.exports = romanNumeral;
