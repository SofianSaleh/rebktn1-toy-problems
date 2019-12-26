/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
   var array = [];
  var str = ''
   var anagrams = (letter, word) => {
     debugger
     if(letter.length === string.length) {
      array.push(letter);
     }else{
       for (let i = 0; i < word.length; i++) {
         var anagram = letter + word[i]
         var rest = word.slice(0, i) + (word.slice(i+1))
         anagrams(anagram , rest)
      }
     }
   }
   anagrams(str, string)
   return array;
};
var anagrams = allAnagrams('abc');
console.log(anagrams)