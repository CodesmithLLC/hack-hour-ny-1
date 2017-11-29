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

function balancedParens(input){
  let pure = input.replace(/[^\{\(\[\]\)\}]/gi, "");
  const ends = {
    "}" : "{", 
    "]" : "[",
    ")" : "("
  };
  if (pure.length === 1) {
    return false;
  }
  let value = true;
  const seen = [];
  for (let i = 0; i < pure.length; i += 1) {
    if (!ends.hasOwnProperty(pure.charAt(i))) {
      seen.push(pure.charAt(i));
    } else {
      if (!(seen.pop() === ends[pure.charAt(i)])) value = false;
    }
  }
  return value;
}

module.exports = balancedParens;
