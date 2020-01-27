/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null

A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = b;
// console.log(a);

function hasCycle(node) {
  let pointer1 = node;
  let pointer2 = node;
  // console.log(pointer1 && pointer1.next);
  while (pointer1 && pointer1.next) {
    pointer2 = pointer2.next;
    pointer1 = pointer1.next.next;
    if (pointer1 === pointer2) {
      return true;
    }
  }
  return false;
}
console.log(hasCycle(a));
