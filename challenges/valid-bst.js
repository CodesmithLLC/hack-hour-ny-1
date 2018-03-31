/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function checkTree(tree) {
	const arr = [];

	function depthFirstIn(tree) {
		if (!tree) return;
		depthFirstIn(tree.left);
		arr.push(tree.value);
		depthFirstIn(tree.right);
	};

	depthFirstIn(tree)

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= arr[i + 1]) return false;
	}

	return true;

}

//using a tiny cache without a helper
function validBST(tree, buffer = { last: null, result: true }) {
	if (!tree) return;

	validBST(tree.left, buffer);

	if (buffer.last) {
		if (buffer.last >= tree.value) {
			buffer.result = false
		}
	}
	buffer.last = tree.value

	validBST(tree.right, buffer);

	return buffer.result
};

module.exports = {BinaryTree: BinaryTree, validBST: validBST};


// function validBST(tree) {
// 	// keep track of the last seen value which should 
// 	// always be less than the next value. initialize
// 	// to the smallest number
// 	let lastVal = Number.NEGATIVE_INFINITY;
// 	// at any particular observation we can prove the
// 	// tree not to be valid and switch this flag to 
// 	// false. if we never reach such an observation, 
// 	// the tree is valid and the flag will never be 
// 	// switched
// 	let isValid = true;
	
// 	// recursive function to compare depth-first, 
// 	// inorder each value with the value at the node 
// 	// that should immediately precede it (stored as 
// 	// lastVal)
// 	function compare(node) {
// 		// short circuit the recursive calls if we 
// 		// already know the tree is invalid
// 		if (!isValid || !node) return;
		
// 		// get to the left-most node first
// 		if (node.left) compare(node.left);
		
// 		// the meat of the function. if current node 
// 		// is out of place with respect to previous 
// 		// node, switch the flag. otherwise, update 
// 		// the last seen value
// 		if (node.val < lastVal) isValid = false;
// 		else lastVal = node.val;
		
// 		// go to the right after checking all left
// 		// nodes and self
// 		if (node.right) compare(node.right);
// 	}
	
// 	compare(tree);
// 	return isValid;
// }
