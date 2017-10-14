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
//  filter out nonbracket characters from the input
//  Open brackets have to come first
//  Counter for both opening and closing brackets
// if the open and close counter are even, return true
let open = 0;
let close = 0;

for(var i = 0; i < input.length; i += 1) {
    //if a closing bracket is found first, return false
    if(input[i] === ')') return false;
    //if an opening bracket, continue
    if(input[i] === '(' || '{' || '[') {
    //any opening brackets increase by 1
    if(input[i] === '(' || '{' || '[') open += 1;
    //any closing brackets increase by 1
    if(input[i] === ')' || '{' || '[') close += 1;
        }
    }
    //if the opening and closing increase equals
    if(close === open) return true;
    
}

module.exports = balancedParens;
