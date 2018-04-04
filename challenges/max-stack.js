/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let theArr = [arguments];
  let this = {};
  this.push = function (num){
    arguments.length[arguments.length]=num;
  }
  this.pop = function(){
    let firstEl = theArr[0];
    theArr.slice(1);
    return firstEl;
  }
  this.getMax = function(){
    return Math.max(...theArr);
  }
}

module.exports = Stack;