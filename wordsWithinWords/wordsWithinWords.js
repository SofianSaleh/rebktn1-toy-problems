/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

function nestedWordCount(words) {
  // your code here...
  let wordsObj = {}
  let numberOfWords = 0
  let max = 0
  let name;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[i].includes(words[j])) {
        numberOfWords++
      }

    }
    wordsObj[words[i]] = numberOfWords
    numberOfWords = 0
  }

  for (const key in wordsObj) {
    if (wordsObj[key] > max) {
      max = wordsObj[key]
      name = key
    }
    // console.log(wordsObj[key], max)
  }
  return name
}
console.log(nestedWordCount(["gray", "grays", "ray", "rays", "strays"]))