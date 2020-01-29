/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  // your code here...
  // split the string
  // use the reverse function on the splitted string
  var str = string.split(" ");
  var arr = [];
  var longetsPal = "";
  for (let i = 0; i < str.length; i++) {
    const splittedString = str[i]
      .split("")
      .reverse()
      .join("");
    if (str[i] === splittedString && str[i].length > longetsPal.length) {
      longetsPal = str[i];
    }
  }
  return longetsPal;
}

console.log(longestPalindrome("My dad is a racecar athlete"));
