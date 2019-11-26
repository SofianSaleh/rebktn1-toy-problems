/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 */

var blackjack = function(arrOfStr) {
    var score = {
        'A': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 10,
        'Q': 10,
        'K': 10
    }

    var sum = 0;
    var arr = [];
    var count = 0;

    for (var j = 0; j < arrOfStr.length; j++) {
        if (arrOfStr[j] === 'A') {
            count++
        }

    }
    for (var key in score) {
        for (var i = 0; i < arrOfStr.length; i++) {

            if (key === arrOfStr[i] && key !== 'A') {

                sum = sum + score[key];
                console.log(sum)
            }
        }
    }

    if (sum <= 21) {

        sum += count * 11
        if (sum > 21) {
            sum -= count * 10
        }
        return sum;
    } else if (sum > 21) {
        sum += count * 1
        return sum
    }
}

blackjack(["5", "4", "3", "2", "A", "K"])
