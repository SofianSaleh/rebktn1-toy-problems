/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

var characterFrequency = (string)=> {
	var counter = 0;
	var array = [];
	var splitted = string.split('')
	var obj = {}
	var letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

	for(var i = 0; i < string.length; i++) {
		for (var j = 0; j < string.length; j++) {
			if(string[i] === string[j])
				counter++
		}
		obj[string[i]] = counter;
		counter = 0
	}

	for(var key in obj) {
		array.push([key, obj[key]])
	}

	for(var k = 0; k < array.length-1; k++) {
		if(array[k][1] < array[k+1][1]){
			var temp = array [k]
			array[k] = array[k+1]
			array[k+1] = temp
			// [array[k],array[k+1]] = [array[k+1],array[k]]
		}
	}
	// for(var n = 0; n < array.length - 1; n++){
	// 	if(array[n][1] === array[n+1][1]) {
	// 		for(var l = 0; l < letters.length; l++) {
				
	// 				console.log(array[m+1][0])
	// 			if(array[n][0] === letters[l] && array[n+1][0] !== letters[l] ||
	// 				array[n][0] !== letters[l] && array[n+1][0] === letters[l] ){
	// 				var temp1 = array [n]
	// 				array[n] = array[n+1]
	// 				array[n+1] = temp1
	// 			}
				
	// 		}
	// 	}

	return array
}

//its not the best practice.
characterFrequency("mississippi")