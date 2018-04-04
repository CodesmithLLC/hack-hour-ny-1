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
// I know this is recursion! But not sure how to implement it

function balancedParens(input){
    //check to see if each character matches ascii code
    let tracker = 0;
    for(let i = 0; i<input.length; i++){
        let str=input.charCodeAt(i);
        if(str===40){
            tracker++;
        }else if(str===41){
            tracker++;
        }else if(str===123){
            tracker++;
        }else if(str===125){
            tracker++;
        }else if(str===91){
            tracker++
        }else if(str===93){
            tracker++;
        }
    }
    return tracker%2 === 0;
}

module.exports = balancedParens;
