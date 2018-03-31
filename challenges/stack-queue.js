/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = {};
    this.length = 0;
  }
  Stack.prototype.push = function(val) {
    // store value in storage and increment length
    this.storage[this.length++] = val;
    return this.length;
  }
  Stack.prototype.pop = function() {
    // store last value that will be 'popped'
    const val = this.storage[this.length - 1];
    // delete value from storage
    delete this.storage[this.length - 1];
    // decrement length
    this.length -= 1;
    // return stored val
    return val;
  }
  
  
  /**
  * Queue Class
  */
  
  
  function Queue() {
    this.in = new Stack();
    this.out = new Stack();
  }
  
  Queue.prototype.enqueue = function(val) {
    // push all enqueued values into IN Stack
    this.in.push(val);
  }
  
  Queue.prototype.dequeue = function() {
    
    // check if OUT Stack is empty
    let poppedOut = this.out.pop();
    // if OUT Stack IS empty : return last value
    if (poppedOut) {
      return poppedOut;
    }
    // if OUT Stack is NOT empty : 
    // check if IN Stack is empty
    let poppedIn = this.in.pop();
    // if IN Stack IS empty : return undefined
    if (!poppedIn) return undefined;
    // if IN Stack is NOT empty : move all values from IN Stack to OUT Stack
    while (poppedIn) {
      this.out.push(poppedIn);
      poppedIn = this.in.pop();
    } 
    // return last value from OUT Stack
    return this.out.pop();
  }

module.exports = {Stack: Stack, Queue: Queue};
