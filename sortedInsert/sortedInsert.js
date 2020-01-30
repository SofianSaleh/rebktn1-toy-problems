/*
Sorted Insert

Given a sorted stack of integers (smallest integer at the top) and an element to insert, write a function – sortedInsert(stack, element) – which inserts the element into the correct position of the stack.

sortedInsert should manipulate the original stack and return the original stack.

The stack will have the methods:
  • isEmpty
  • peek
  • push
  • pop. 
  
You can also use count to view how many elements are in the stack. 
The stack implementation is available to view below.
*/

// the stack class is exposed here for reference, you may or may not utilize additional stacks in your algorithm.

var Stack = function(initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function() {
  return !this.count;
};

Stack.prototype.peek = function() {
  return this.store[this.count];
};

Stack.prototype.push = function(val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    var tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};

function sortedInsert(stack, element) {
  // your code here...
  var arr = [];
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] < element) {
      arr.push(stack.pop());
    } else {
      stack.push(element);
    }
  }
  for (var j = arr.length; j <= 0; j--) {
    stack.push(arr[j]);
  }
}

function sortedInsert(stack, element) {
  var sortedArray = [];
  var arr = [];
  var count = 0;

  for (var i = stack.count; i >= 1; i--) {
    var elem = stack.store[String(i)];
    if (elem < element) {
      arr.push(elem);
      stack.pop();
    } else if (elem > element && count === 0) {
      stack.push(element);
      count++;
    }
  }

  // console.log(arr);
  for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[j]);
    stack.push(arr[j]);
  }
  return stack;
}

var x = new Stack(20);

x.push(19);
x.push(18);
x.push(15);
x.push(13);
x.push(10);
x.push(9);
x.push(8);
x.push(5);
x.push(2);
x.push(1);
console.log(sortedInsert(x, 6));
