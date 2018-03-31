/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

	this.stack = new Array();
	this.pop =function(){return this.stack.pop();};
	this.push =  function(item){this.stack.push(item)};
}


/**
* Queue Class
*/


function Queue() {
	this.stackPush = new Stack();
	this.stackPop = new Stack();
	this.enqueue = function(item){
		this.stackPush.push(item);
	};
	this.dequeue = function(){
		let sPush = this.stackPush;
		let sPop = this.stackPop;

		if( sPop.top){
			return sPop.pop();
		}

		while(sPush.top){
			sPop.push( sPush.pop() );
		}
	};

}
/*
let s=new Stack();

s.push(123);
s.push(123);
s.push(123);

console.log(s.stack);
s.pop()
s.pop()
s.pop()

console.log(s);

let q=new Queue();

q.enqueue(123);
q.enqueue(123);
q.enqueue(123);

console.log(q);
q.dequeue()
q.dequeue()
q.dequeue()

console.log(q);*/



module.exports = {Stack: Stack, Queue: Queue};
