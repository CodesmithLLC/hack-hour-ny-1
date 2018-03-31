/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	console.log(l1, l2);
	let temp=new Node();
	/*while(  ){
		console.log();
	}*/

};

//module.exports = {Node: Node, zip: zip};


let n1=new Node(1);
let n2=new Node(2);
let n3=new Node(3);
let n4=new Node(4);
let n5=new Node(5);
let n6=new Node(6);
let n7=new Node(7);


n1.next=n2

n2.next=n3

n3.next=n4

n4.next=n5

n5.next=n6

n6.next=n7
n7.next=null;

let n10=new Node(10);
let n20=new Node(20);
let n30=new Node(30);
let n40=new Node(40);
let n50=new Node(50);
let n60=new Node(60);
let n70=new Node(70);


n10.next=n20

n20.next=n30

n30.next=n40

n40.next=n50

n50.next=n60

n60.next=n70
n70.next=null;
//console.log( n1 )
//console.log( n10 )

zip(n1, n2 )
