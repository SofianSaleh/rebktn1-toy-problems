/*
Write a function that rotates a NxN matrix 90 degrees clockwise. A matrix, also called a 2-D array, is simply an array of arrays of values.
2x2 MATRIX EXAMPLE:
[ 
  [1, 2], 
  [3, 4] 
]
Rotated:
[ 
  [3, 1], 
  [4, 2] 
]
4x4 MATRIX EXAMPLE:
[ 
  [ 1, 2, 3, 4], 
  [ 5, 6, 7, 8], 
  [ 9, "A","B","C"], 
  ["D","E","F","G"] 
]
Rotated:
[ 
  ["D", 9, 5, 1], 
  ["E", "A", 6, 2], 
  ["F","B", 7, 3], 
  ["G","C", 8, 4] 
]
EXTRA CREDIT
  • Make your function operate on rectangular matrices (MxN rather than NxN).
  • Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
Important note: In mathematics, and generally in CS, matrices are identified as m-by-n, where m is the number of rows and n is the number of columns. 
So an [i][j] address in a matrix will be i places down, and j places over. 
This usually matches the way arrays are addressed in code, but keep in mind that it differs from use in geometry and computer graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
*/

function rotateMatrix(matrix, direction) {
  // your code here...

  let len = matrix[0].length
  let clockwise = []
  let arr = []
  console.log(direction !== 1, direction !== -1)
  if (direction !== 1 && direction !== -1) {
    return ` Worng direction`
  } else if (direction === 1) {

    for (let j = 0; j < matrix.length; j++) {
      for (let i = len - 1; i >= 0; i--) {

        if (arr.length !== len) {
          arr.push(matrix[i][j])

        }

      }
      clockwise.push(arr)
      arr = []
    }
  } else if (direction === -1) {
    console.log(`hih`)
    for (let j = len - 1; j >= 0; j--) {
      for (let i = 0; i < matrix.length; i++) {
        if (arr.length !== len) {
          arr.push(matrix[i][j])

        }

      }
      clockwise.push(arr)
      arr = []

    }
  }
  return clockwise
}

console.log(rotateMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, "A", "B", "C"],
  ["D", "E", "F", "G"]
], -1))


/**
 * 
 * @param {Array} matrix 
 * @param {Number} direction 
 * extra credits
 */


function rotateMatrix(matrix, direction) {
  // your code here...

  let len = matrix[0].length
  let clockwise = []
  let arr = []
  let count = 0
  console.log(direction !== 1, direction !== -1)
  if (direction !== 1 && direction !== -1) {
    return ` Worng direction`
  } else if (direction === 1) {

    for (let j = 0; j < matrix.length; j++) {
      for (let i = len - 1; i >= 0; i--) {

        if (arr.length !== len) {
          if (count !== len) {
            count++
            if (matrix[i][j] !== undefined) {
              arr.push(matrix[i][j])
            }
          }
        }
      }
      clockwise.push(arr)
      arr = []
      count = 0
    }
  } else if (direction === -1) {
    console.log(`hih`)
    for (let j = len - 1; j >= 0; j--) {
      for (let i = 0; i < matrix.length; i++) {
        if (count !== len) {
          count++
          if (matrix[i][j] !== undefined) {
            arr.push(matrix[i][j])

          }

        }

      }

      clockwise.push(arr)
      arr = []
      count = 0

    }
  }
  return clockwise
}

console.log(rotateMatrix([
  [1, 2, 3, 4],
  [5, 6, 8],
  [9, "A", "B", "C"],
  ["D", "E", "F",]
], 1))