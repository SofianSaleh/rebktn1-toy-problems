/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */


 // declare a variable counter and set it to zero.
 // loop through the array twice and compare
 // return when the count has the value of 1



var firstNonRepeatedCharacter = function( string ) {
  // TODO: your solution here
  var count = 0
  	var string1 =string.toUpperCase()
  	console.log(x)
  for ( var i = 0; i < string1.length; i++ ) {
  	for ( var j = 0; j < 	string1.length; j++ ) {

  			if( string1[j] === string1[i] ) {
  				count++

  			}
  	}
  	if( count === 1 ) {
  		return string1[i]
  	}
  	count = 0
  }
};

	// big O(n^2)



var firstNonRepeatedCharacter = function( string ) {
  // TODO: your solution here
  var count = 0
  var arr = string.split( '' )

  string.toUpperCase()

  for (var i = 0; i < string.length; i++ ) {

  	arr.forEach( str => {
  			if( string[i] === str ) {
  				count++

  			}
  	})
  	if( count === 1 ) {

  		return string[i]
  	}

  	count = 0
  }
};

firstNonRepeatedCharacter('ABA')
