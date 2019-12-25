/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (n = 3) {
  // TODO: your solution here
    var choice = ["R", "P", "S"]
    var result = [];
    
        for(var i = 0; i < choice.length; i++) {
            for(var j = 0; j < choice.length; j++) {
                for(var k = 0; k < choice.length; k++) {
                    var first = [];
                    first.push(choice[i], choice[j], choice[k])
                    result.push(first)
                }
                // console.log(result)
            }
        }
        return result;
};
rockPaperScissors()

// for the extra credit

var rockPaperScissors = (n = 3) => {
    var res = [];
    var choices = ['R', 'P', 'S']
    var tup = []
    var recursion = (array, num) => {
        if(num === 0) {
            res.push(array)
        }else{
            for (let i = 0; i < choices.length; i++) {
                // used concat cos push gave an error
                recursion(array.concat(choices[i]), num - 1)
            }
        }
    }
    recursion(tup, n)
    return res
}
rockPaperScissors(4)