// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

// "testcase"), "tabtbvba"
// vowelBack("codewars"), "bnaafvab"
// vowelBack("exampletesthere"), "agvvyuatabtqaaa"
// && string[i] !== 'e' && string[i] !== 'c'
// var vowelBack = (string) => {
// 	var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
// 	var str = '';
// 	var len = alphabets.length - 1
// 	var counter = 0;

// 	for(var i = 0; i < string.length; i++) {
// 		for(var j = 0; j < alphabets.length; j++) {

// 			counter++
// 			if(string[i] === alphabets[j]){
// 			if(string[i] !== alphabets[14] && string[i] !== alphabets[8] && string[i] !== alphabets[0] && string[i] !== alphabets[20] ) {
// 				if(alphabets[j+9] !== undefined && alphabets[j+9] !== 'e' && alphabets[j+9] !== 'c' && alphabets[j+9] !== 'o') {
// 					str += alphabets[j+9]
// 					break;
// 				}
// 				var temp = Math.abs(counter - len)
// 				if(alphabets[j+9] === undefined ) {
// 					if(alphabets[9 - temp] !== 'e' && alphabets[9 - temp] !== 'c' && alphabets[9 - temp] !== 'o'){
// 					str += alphabets[len - temp]
// 					}
// 				break;
// 				}

// 				if(alphabets[j+9] === 'e' || alphabets[j+9] === 'c' || alphabets[j+9] === 'o') {
// 				console.log(string[i])
// 					str += string[i]
// 					break;
// 				}
// 			}
// 		}
// 	}
// 		counter = 0
// 	}
// 	return str
// }
	// 		if(string[i] === alphabets[14] || string[i] === alphabets[8] || string[i] === alphabets[0] || string[i] === alphabets[20]) {
	// 			if(alphabets[j-5] !== undefined) {
	// console.log(string[i], alphabets[j-5], j)
	// 				str += alphabets[j-5]
	// 				break;
	// 			}else if(alphabets[j-5] !== undefined) {
	// 				var temp = Math.abs(counter - 5)
	// 				str += alphabets[temp]
	// 			break;
	// 			}

	// 		}





	var vowelBack = (string) => {
	var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var str = '';
	var len = alphabets.length - 1
	var counter = 0;

	for(var i = 0; i < string.length; i++) {
		for(var j = 0; j < alphabets.length; j++) {

			counter++
			if(string[i] === alphabets[j]){
			if(string[i] !== alphabets[14] && string[i] !== alphabets[8] && string[i] !== alphabets[0] && string[i] !== alphabets[20] ) {
				if(alphabets[j+9] !== undefined){
					if(alphabets[j+9] !== 'e' && alphabets[j+9] !== 'c' && alphabets[j+9] !== 'o' && string[i] !== 'c'
					 && string[i] !== 'o' && string[i] !== 'e') {
					str += alphabets[j+9]
					break;
				}
				if(alphabets[j+9] === 'e' || alphabets[j+9] === 'c' || alphabets[j+9] === 'o') {
					str += string[i]
					break;
					}
				}
			
				if(alphabets[j+9] === undefined ) {
			var temp = Math.abs(counter - len - 2)
					console.log(alphabets[9 - temp] ,temp,counter,len)
					if(alphabets[9 - temp] !== 'e' && alphabets[9 - temp] !== 'c' && alphabets[9 - temp] !== 'o' && string[i] !== 'c'
					 && string[i] !== 'o' && string[i] !== 'e'){
					str += alphabets[9 - temp]
					break
					}
					if(alphabets[9 - temp] !== 'e' && alphabets[9 - temp] !== 'c' && alphabets[9 - temp] !== 'o') {
					str += string[i]
				break;
				}
		}

				
	}
}
	}
		counter = 0
}
	return str
}