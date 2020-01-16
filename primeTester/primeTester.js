/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/

function primeTester(n) {
  debugger;
  if (n <= 1 || typeof n !== "number") {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    console.log(Math.sqrt(n), n % i, n, i);
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeTester(1));
console.log(primeTester(2));
console.log(primeTester(10));
console.log(primeTester(15));
console.log(primeTester(7));
console.log(primeTester(4));
console.log(primeTester(234236354635645));
console.log(primeTester(23456));
console.log(primeTester(98765));
console.log(primeTester(09876543));
console.log(primeTester(0));
console.log(primeTester(5));
console.log(primeTester(2345676543));
