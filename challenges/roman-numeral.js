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

// function romanNumeral(n) {
//   const romano = {
//     1: 'I',
//     4: 'IV',
//     5: 'V',
//     9: 'IX',
//     10: 'X',
//     40: 'XL',
//     50: 'L',
//     90: 'XC',
//     100: 'C',
//     400: 'CD',
//     500: 'D',
//     900: 'CM',
//     1000: 'M',
//   }

//   // if 4 or 9, --> 4:IV or 9:IX
//   // if 40 or 90 --> 40:XL or 90: XC
//   // if 400 or 900 --> 400:CD or 900:CM

//   // first check if n === any of the given numbers
//   if (n in romano) return romano[n];
//   // //
//   // n = n.toString();
//   // for (var i = 0; i < n.length; i++) {
//   //   if (n[0] < 5) {}
//   // }
// }

function romanNumerals(n) {
  const map = [
    1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
    40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'
  ];

  let numeral = ``;
  //iterate through our map, as long as i less length of map && n > 0, increment by 2
  for (let i = 0; i < map.length && n > 0; i += 2) {
    //while value at curr index > n
    while (map[i] <= n) {
      //add roman numberal value to numeral
      numeral += map[i + 1];
      //subtract map[i + 1] from n
      n -= map[i];
    };
  };
  return numeral
};



module.exports = romanNumeral;
