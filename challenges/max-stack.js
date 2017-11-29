/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  let storage = {};
  let length = 0;
  let max = -1;

  let push = val => {
    if (val > max) max = val;
    storage[length++] = val;
  }

  let pop = () => {
    let val = storage[--length];
    delete storage[length];
    return val;
  }

  let getMax = () => {
    return Math.max(...Object.values(storage));
  }

  return {
    push: push,
    pop: pop,
    getMax: getMax
  } 
}

module.exports = Stack;