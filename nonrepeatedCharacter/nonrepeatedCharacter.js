/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var count = 0
  	
  for (var i = 0; i < string.length; i++) {
  	for (var j = 0; j < 	string.length; j++) {
  			if( string[j] === string[i] ) {
  				count++
  			}
  	}
  	if( count === 0 ) {
  		return str[i]
  	}
  }
};
firstNonRepeatedCharacter('ABA')
