/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  //create an array like collection
  //allow a push method on it
  this.storage = {};
  this.length = 0;
}
Stack.prototype.push = function(val) {
    this.storage[this.length] = val
    this.length += 1
    return this.storage.length
}

Stack.prototype.pop = function() {
  let temp = this.storage[this.length - 1];
  delete this.storage[this.length -1];
  return temp;
}

Stack.prototype.getMax = function() {
    const storageArr = Object.values(this.storage);
    return Math.max([storageArr]);
}
const stack1  = new Stack;



module.exports = Stack;