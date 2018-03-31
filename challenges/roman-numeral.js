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
let dec=[1,4,5,9,10,40,50,90,100,400,500,900,1000];	
let rom= ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]
let result="";
for (var i = 0; i < dec.length; i++) {

	 if( num%dec[i] <= num )
	 	{result=+rom[i]; num=num-dec[i];}

}

return result

}

module.exports = romanNumeral;
