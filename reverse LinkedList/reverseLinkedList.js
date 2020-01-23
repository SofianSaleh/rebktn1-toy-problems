/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
​
// Helpers
​
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

// creating a new nodes
var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
//merging them to create a linked list
a.next = b;
b.next = c;
c.next = d;
console.log(a);

function reverseLinkedList(linkedList) {
  let current = linkedList;
  let next = null;
  let previous = null;

  while (current) {

    next = current.next;
    current.next = previous;

    previous = current;
    current = next;
console.log(previous, next)
  }

  return previous;
}

console.log(reverseLinkedList(a));


