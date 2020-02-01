// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//             6

/*
 *Definition for a binary tree node.
 *
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
a = new TreeNode(1);
b = new TreeNode(2);
c = new TreeNode(3);
d = new TreeNode(4);
e = new TreeNode(5);
f = new TreeNode(6);

a.right = e;
e.right = f;
a.left = b;
b.left = c;
b.right = d;
// console.log(a);
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
  debugger;
  if (!root) return null;

  var leftLast = flatten(root.left);
  var rightLast = flatten(root.right);

  if (root.left) {
    leftLast.right = root.right;
    root.right = root.left;
  }

  root.left = null;
  console.log(root);
  return rightLast || leftLast || root;
};
flatten(a);
