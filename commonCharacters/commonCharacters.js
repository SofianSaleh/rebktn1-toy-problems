/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already enoccurrenceered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already enoccurrenceered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var common = {};
  var occurrence = 0;
  var commonLetters = '';
  var arrayOfCommons = [];
// Looping through to find the common letters
  for (var i = 0; i < string1.length; i++) {
      for (var j = 0; j < string2.length; j++) {
          if (string1[i] === string2[j]) {
              occurrence++;
          }
      }
      // Assigining the common letters in an object to avoid conflict
      common[string1[i]] = occurrence;
      occurrence = 0;
  }
  // Looping through the object and adding the keys with the value of more then ZERO to an array
  for (var key in common) {
      if (common[key] > 0) {
          arrayOfCommons.push(key);
      }
  }
  
 return arrayOfCommons.join('')
};

commonCharacters('aaaaa', 'aaaaabu');
