//CS-HackHours-balancedParens

/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
String.prototype.count=function(strToFind) { 
    return (this.length - this.replace(new RegExp(strToFind, "g"), '').length);// / strToFind.length;
}

function getClosingChar(openingChar) {
  switch (openingChar) {
    case "[":
      return "]";
    case "(":
      return ")";
    case "{":
      return "}";
  }
}

function balancedParens(input){
  // console.log("original input === " + input);
  input = input.replace(/[^(){}\[\]]/g, '');
  console.log("stripped input === " + input);
  
  let blnBalanced = true;
  if (input.length < 2) {
    blnBalanced = false;
  } else {
    let blnKeepChecking = true;
    let rhs = input.split("");
    let lhs = []; // rhs.shift();
    while (blnKeepChecking && blnBalanced) {
      if (lhs.length === 0 && (rhs[0] === ")" || rhs[0] === "]" || rhs[0] === "}")) {
        blnBalanced = blnKeepChecking = false;
      } else if (rhs[0] === "(" || rhs[0] === "[" || rhs[0] === "{") {
        lhs.push( rhs.shift() );
      } else if (getClosingChar(lhs[lhs.length - 1]) === rhs[0]) {
        // remove the match
        lhs.pop();
        rhs.shift();
      } else {
        blnBalanced = blnKeepChecking = false;
      }
      
      switch (lhs.length + rhs.length) {
        case 0:
          blnKeepChecking = false;
          break;
        case 1:
          blnBalanced = blnKeepChecking = false;
          break;
      }
      // console.log("lhs === " + lhs);
      // console.log("rhs === " + rhs);
    }
  }
  console.log("blnBalanced === " + blnBalanced);
  return blnBalanced;
}

  
  
  
  // let chrToMatch = input.shift();
  // let closingChar = getClosingChar(chrToMatch);
  // let nxtClosingChar = input.find()

let testString = "";
let testArray = "";
testString = "asdf()[asdf]{}123123123()";


console.log(testString.count("a"));
console.log(testString.toLocaleLowerCase().count("A"));
console.log(testString.count("2"));
console.log(testString.count("{"));
console.log(testString.count("}"));
console.log(testString.count("\\("));
console.log(testString.count("\\)"));
console.log(testString.count("\\["));
console.log(testString.count("\\]"));


//string = string.replace(/[^a-zA-Z]/g, '').toLocaleLowerCase();
testRegExStrip = testString.replace(/[^(){}\]\[]/g, '').toLocaleLowerCase();
testArray = testString.split("");
console.log("testString === " + testString);
console.log("testRegExStrip === " + testRegExStrip);
console.log("testArray === " + testArray);



console.log("balancedParens(testString) === " + balancedParens(testString));



balancedParens('(');  // false
balancedParens('()'); // true
balancedParens(')(');  // false
balancedParens('(())');  // true
balancedParens('[](){}'); // true
balancedParens('[({})]');   // true
balancedParens('[(]{)}'); // false

balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
balancedParens(' var hubble = function() { telescopes.awesome();'); // false


module.exports = balancedParens;