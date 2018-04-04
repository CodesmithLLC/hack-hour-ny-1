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
  if n<=0{
      return 'no such thing'
  }else{
    let str = '';
    const map = {
      1:'I',
      4:'IV',
      5:'V',
      9:'IX',
      10:'X',
      40:'XL',
      50:'L',
      90:'XC',
      100:'C',
      400:'CD',
      500:'D',
      900:'CM',
      1000:'M'
    }
     if(n in map){
       return map[n];
     }else{
       let returnStr='';
       let loopCount=0;
       let mapNum = 0;
      //find closest number in map subtract closest number and add appropriate digits
      for(var key in map){
        if(n>key){
          //substract key from n and find the one with the smallest difference
          let diff = 0;
          diff = n-key;
          if(n-key<diff){
            diff = n-key;
          }
        }
        mapNum = key;
        loopCount = diff;
      }
      returnStr = mapNum;
      for(let i = 0; i<loopCount; i++){
        
      }
     }
  }
}

module.exports = romanNumeral;
