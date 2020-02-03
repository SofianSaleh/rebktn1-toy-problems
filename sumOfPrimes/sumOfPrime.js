/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
  // your code here...
  var result = 0;
  for (let i = n; i >= 0; i--) {
    if (primeTester(i)) {
      result += i;
    }
  }
  return result;
}

function primeTester(n) {
  debugger;
  if (n <= 1 || typeof n !== "number") {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(sumOfPrimes(5));
