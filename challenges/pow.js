/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base,power){
    if(power === 2) return base * base;
    else if(power === 1) return base;
    else if(power === 0) return 1;
    else return base * pow(base, power - 1);
    // return base ? 1 : base * power(base, power - 1);
  }
  
  // 2^0= 1, 2^1 = 2, 2^2 = 4, 2^3 = 8
  // 8/2 = 4
  // 4/2 = 2
  // 2/2 = 1


  function power(base, exp) {
    var result = 1;
    while(exp--) {
      result *= base;
    }
    return result;
  }
  
  function pow(base,power){
    if(power === 0) return 1;
    let answer = base;
    for(let i = power; i > 1; i--){
      answer *= base;
    }
    return answer;
  }

module.exports = pow;
