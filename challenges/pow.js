/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0)
      return 1;
    else if (power === 1)
      return base;
    else if (power > 1)
      return base * pow(base, power - 1);
}

// let currBase;
// let currPower;
// currBase = 2;
// currPower = 0;
// console.log("pow(" + currBase + ", " + currPower + ") === " + pow(currBase, currPower++));
// console.log("pow(" + currBase + ", " + currPower + ") === " + pow(currBase, currPower++));
// console.log("pow(" + currBase + ", " + currPower + ") === " + pow(currBase, currPower++));
// console.log("pow(" + currBase + ", " + currPower + ") === " + pow(currBase, currPower++));
// console.log("pow(" + currBase + ", " + currPower + ") === " + pow(currBase, currPower++));



module.exports = pow;
