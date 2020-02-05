/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/

// function flatten(arr, i = 0) {
//   // your code here...
//   return arr.flat();
// }

function flatten(arr) {
  var result = [];
  function recurseFunc(element) {
    for (var i = 0; i < element.length; i++) {
      if (Array.isArray(element[i])) {
        recurseFunc(element[i]);
      } else {
        result.push(element[i]);
      }
    }
  }
  recurseFunc(arr);
  return result;
}

console.log(flatten([[1, [1, 2, [4, 5, [6, 7]]]], [[[[4]]]], 3, [3], 4, [6, 7]]));
