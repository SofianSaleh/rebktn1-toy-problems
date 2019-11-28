
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]


var removNb = (n)=>{
    var array = [];
    var range = []
    var resultOfMult = 1;
    var resultOfSum = 0;

    if (n <= 0) {
        return 'Invalid number'
    }
    for (var i = 1; i <= n; i++) {
        range.push(i)
    }

    for (var j = 0; j < range.length; j++) {
        for (var k = 1; k < range.length; k++) {
            var x = range[j];
            var y = range[k]

            resultOfMult = x * y
            for (var l = 0; l < range.length; l++) {
                if (range[l] !== x) {
                    if (range[l] !== y) {

                        resultOfSum += range[l]
                    }
                }
            }

            if (resultOfSum === resultOfMult) {
                array.push({x,y},{y,x})
                return array
            }
            resultOfSum = 0;
        }
    }
    return 'nill'
}
removNb(26)
