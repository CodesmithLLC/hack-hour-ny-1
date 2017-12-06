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

//using a cache and helper function
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
//using a cache and helper function
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
// function validBST(tree, buffer = { last: null, result: true }) {
// 	if (!tree) return;

// 	validBST(tree.left, buffer);

// 	if (buffer.last) {
// 		if (buffer.last >= tree.value) {
// 			buffer.result = false
// 		}
// 	}
// 	buffer.last = tree.value

// 	validBST(tree.right, buffer);

// 	return buffer.result
// };

// ✗ returns false when leaf is valid to its parent but not to grandparent (right - left case) 7 ms
// ✗ returns false when leaf is valid to its parent but not to grandparent (left - right case) 0 m

module.exports = {BinaryTree: BinaryTree, validBST: validBST};



// ✔ returns true for tree with single node 12 ms
// ✔ returns true for valid tree with height of 1 3 ms
// ✔ returns false for invalid right tree with height of 1 1 ms
// ✔ returns false for invalid left tree with height of 1 0 ms
// ✔ returns true for deeper valid BST 1 ms

// ✗ returns false for deeper left leaning invalid BST 6 ms
// ✗ returns false for deeper right leaning invalid BST 1 ms

// ✗ returns false when left right child < left child 1 ms
// ✗ returns false when right left child > right child 1 ms
