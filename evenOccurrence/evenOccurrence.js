/*
Even Occurrence
Find the first item that occurs an even number of times in an array. 
Remember to handle multiple even-occurrence items and return the first one. 
Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

//check the type if its an object use stringify for deep equality
//loop through and find the equal values
//return the first occurance or null if there aren't any even values.

var evenOccurrence = (array) => {
    var count = 0
    var arr = []

    for(var i = 0; i < array.length; i++) {
        arr[i] = JSON.stringify(array[i]);
    }
    
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            if(arr[j] === arr[k]) {
                count++;
            }
        }
        if(count % 2 === 0) {
            return JSON.parse(arr[j]);
        }
        count = 0;
    }
    return null
}

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}