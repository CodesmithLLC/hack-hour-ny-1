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
  //create map
  const map = { '{':'}','[':']','(':')' };
  //instantiate cache
  const cache = [];
  let val;
  //loop through input
  for(let i = 0; i < input.length; i++){
    //set a var to input[i]
    val = input[i];
    //check if val is in map
    if(val in map) cache.push(val);
      //if yes, push to cache
    //else if val is equal to a right bracket
    else if(val === ']' || val === '}' || val === ')')
      //pop cache, check that val to see if it matches
      //if not, return false
      if(map[cache.pop()] !== val) return false
    }
  //if length cache > 1 return false, else true
  return !cache.length;
}

module.exports = balancedParens;
