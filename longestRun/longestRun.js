/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

//loop through twice
//check the first with the one after if if it equals loop if it doesn't go to the next one
// save the index and increment the counter 

function longestRun(string) {
    var streak = 1;
    var longestStreak = 1;
    var start = 0;
    var result = [0, 0];
    var letter;

    if (string === '') {
        return result
    }

    for (let i = 0; i < string.length; i++) {
        console.log(streak, string[i], string[i + 1])
        if (string[i] === letter) {
            streak++
            if (i === string.length - 1) {
                if (streak > longestStreak) {
                    result = [start, i]
                }
            }
        } else {
            if (streak > longestStreak) {
                longestStreak = streak
                result = [start, i - 1]
                console.log(result)
            }
            start = i
            streak = 1
            letter = string[i]
        }
    }
    return result


}

