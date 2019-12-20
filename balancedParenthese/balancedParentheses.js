/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
    var count1 = 0;
    var count2 = 0;

    if(str[0] === ')') return false
    
    for (var i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            count1++
        }
        if(str[i] === ')') {
            count2++
        }
        if(count1-count2 === 0 && str[i+1] === ')'){
            return false
        }
    }
    return count1 === count2
};
