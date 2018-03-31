/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
	let temp = head
	let seen = {};
	let out = [];
	let j = -1;
	let ll = "";
	console.log(temp)
	while(temp.next != null){

		if( seen[temp.value] !== 1 ){
			seen[temp.value] = 1;
			out[j++] = temp.value;
			ll.next =  new node(temp.value)
			
		} 
		temp = temp.next;


	}
	//console.log(out)
return ll;
}

function node( value ){
	this.value = value;
	this.next = null;
}

let head  = new node(4);
let a = new node(3);    
let b = new node(5);  
let c = new node(17); 
let d =  new node(0);
let e = new node(17);
let f = new node(5); 
head.next = a;
a.next = b
b.next = c;
c.next = d;
d.next = e;
e.next = f;

//console.log(head);
console.log(deleteDups(head));

module.exports = deleteDups;
