// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

// You've got Helpers!
// myHelper(x, y)

// Examples
// input: [ 20, -10, -10, 2, 4, 299 ]
// Output:	[ -10, -10, 2, 4, 20, 299 ]


function bubbleSort(input) {
    // Write your code here, and
    // return your final answer.

    var myHelper = (input, i = 0, count = 0) => {
        if (i === input.length - 1) {
            i = 0
            count++
        }
        if (count === input.length - 1) return input
        if (input[i] > input[i + 1]) {
            [input[i], input[i + 1]] = [input[i + 1], input[i]]
        }
        i++
        myHelper(input, i, count)

    }

    myHelper(input)
    return input
}
console.log(bubbleSort([20, 10, -10, 2, 4, 299, 25, 99, 33, 55, 44, 66]))
