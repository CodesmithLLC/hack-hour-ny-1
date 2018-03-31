/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {


//create a new linked list
/*
create a temporary nodeHolder
//get the first node and store in the nodeholder
make the first node point to the null node
loop througth the list
make the new node point to the old node

add the fist node as the last node

*/
let newList= new Node();
let regList=new Node();
let tempNode=new Node();

	tempNode= head;
	regList= head;
		regList.next=null

	while( head.next ){

		newList=tempNode
		//regList=regList.next


	}

}//


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

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
