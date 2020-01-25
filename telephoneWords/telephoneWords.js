/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

var phoneDigitsToLetters = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ"
};

function telephoneWords(digitString) {
  // your code here...
  var arr = [];

  var first = phoneDigitsToLetters[Number(digitString.charAt(0))];
  var second = phoneDigitsToLetters[Number(digitString.charAt(1))];
  var third = phoneDigitsToLetters[Number(digitString.charAt(2))];
  var fourth = phoneDigitsToLetters[Number(digitString.charAt(3))];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (var k = 0; k < 4; k++) {
        for (var l = 0; l < 4; l++) {
          var tel =
            first.charAt(i) +
            second.charAt(j) +
            third.charAt(k) +
            fourth.charAt(l);
          if (tel.length === 4) {
            arr.push(tel);
          }
        }
      }
    }
  }
  return arr;
}

console.log(telephoneWords("1123"));
