/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    // this.stack = {};
    var stack = []

  // add an item to the top of the stack
    this.push = function(value) {
      // stack[value] = value
      stack.push(value)
      return stack[stack.length-1]
    };

  // remove an item from the top of the stack
    this.pop = function() {
      stack.pop()
    };

  // return the number of items in the stack
    this.size = function() {
      return stack.length
    };
    // return the minimum value in the stack
    this.min = function() {
      stack.sort((a, b) =>{
        return a-b;
      })
      return stack[0]
    };
  };

  

  var example = new Stack()
  example.push(4)
  example.push(3)
  example.min()
  example.push(3)
  example.push(2)
  example.push(2)
  example.min()