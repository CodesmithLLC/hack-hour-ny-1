//  CS-HackHours-Stack

/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor () {
    this.maxVal;
    this.stack = [];
  }
  
  length () {
    return this.stack.length;
  }
  
  push (newVal) {
    this.stack.push(newVal);
    if (this.maxVal) { 
      (newVal > this.maxVal) ? this.maxVal = newVal : null;
    } 
    else this.maxVal = newVal;
    
    return this.stack.length;
  }
  
  newMax() {
    if (this.stack.length >= 1) {
      this.maxVal = this.stack[0];
      for (let i = 1; i <= this.stack.length - 1; i += 1)
        if (this.stack[i] > this.maxVal) this.maxVal = this.stack[i];
        
    }
    else this.maxVal = undefined;
  }
  
  pop () {
    let returnVal;
    if (this.stack.length > 0) {
      returnVal = this.stack.pop();
      if (returnVal === this.maxVal) this.newMax();
    }
    return returnVal;
  }
  
  getMax () {
    return this.maxVal;
  }
}


const myStack = new Stack();

console.log(myStack.push(13));
console.log("myStack.getMax () === ", myStack.getMax ());
console.log(myStack.push(69));
console.log("myStack.getMax () === ", myStack.getMax ());
console.log(myStack.push(42));
console.log("myStack.getMax () === ", myStack.getMax ());

console.log(myStack.pop());
console.log("myStack.getMax () === ", myStack.getMax ());
console.log(myStack.pop());
console.log("myStack.getMax () === ", myStack.getMax ());
console.log(myStack.pop());
console.log("myStack.getMax () === ", myStack.getMax ());
console.log(myStack.pop());





module.exports = Stack;