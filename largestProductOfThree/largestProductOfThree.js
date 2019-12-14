/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {

    var one = 0;
    var two = 0;
    // sort the array to make the biggest numbers at the end    
    array.sort((a, b) => a - b);
    // Multiply the last three numbers
    one = array[array.length - 3] * array[array.length - 2] * array[array.length - 1];
    // in the case that we have two negative numbers for example
    // [-5,-3, 1 ,2 ,7 ] in this case we know from looking at it that the biggest numbers is 105
    // so we take the first two multiply them together and the n multiply the last number to them

    two = array[0] * array[1] * array[array.length - 1];
    // we return the biggest number
    if (one > two) return one;
    if (two > one) return two;
    // or use Math.max

}
largestProductOfThree([2, 1, 3, 7])

