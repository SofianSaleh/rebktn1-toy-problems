/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

// var binarySearch = function (array, target) {
// 	var i = arguments[2] || 0;
// 	var count = arguments[3] || 0

// 	count++
// 	if(array[i] === target) {

// 		return i;
// 	}
// 	if (count === array.length ) {

// 		return null;
// 	} 
// 	return binarySearch(array, target, ++i , count)
// };
// binarySearch([1, 2, 3, 4, 5], 8)



var binarySearch = function (array, target) {
	// The mid takes the value of the middle value middleIndex: is the index for the middle, index: is the index where we are at
	var mid = 0
	var middleIndex = arguments[2] || 0
	//Checks if the array is even or odd
	if(array.length % 2 === 0) {

		mid = array[Math.floor(array.length / 2)] 
		middleIndex += Math.floor(array.length / 2);
		 
	}else {

	mid = array[Math.floor(array.length / 2)] 
	middleIndex += Math.floor(array.length / 2);
	
	}
	//if the target is bigger than the middle go right and slice the right part only to work with
	if( target > mid) {
		
		return binarySearch(array.slice(array[Math.ceil(array.length / 2) - 1]) , target) 
	}
	//if the target is less than the middle go left and slice the left part only to work with	
	if( target < mid) {
		
		console.log(array.slice(0,array[Math.ceil(array.length / 2)] -1))
		return binarySearch(array.slice(0,array[Math.ceil(array.length / 2)]-1 ), target) 
	}

	if(target === mid) {
		for(var i = 0; i < array.length; i++) {
			if(array[i] === target){

		return i, mid
			}
		}
	}else {

		return null
	}
};
binarySearch([1, 2, 3, 4, 5, 10, 18], 2)

