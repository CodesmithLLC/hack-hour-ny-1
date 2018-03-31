/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 //https://articles.leetcode.com/determine-if-binary-tree-is-binary/
 //has a good solution

function leaf(val){
	this.value=null;
	this.left=null;
	this.right=null;
} 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}
BinaryTree.prototype.addLeaf=function( leaf ){

	if(leaf.value <this.value ){
		this.left= new leaf(leaf.value);
	}else{
		this.right=new leaf(leaf.value);
	}

};

function validBST(tree) {

}


let t= BinaryTree(42);


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
