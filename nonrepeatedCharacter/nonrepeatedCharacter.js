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
  	
  for ( var i = 0; i < string.length; i++ ) {
  	for ( var j = 0; j < 	string.length; j++ ) {

  			if( string[j] === string[i] ) {
  				count++

  			}
  	}
  	if( count === 1 ) {
  		return string[i]
  	}
  	count = 0
  }
};





var firstNonRepeatedCharacter = function( string ) {
  // TODO: your solution here
  var count = 0
  var i = 0
  var arr = string.split( '' )

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
