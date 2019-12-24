/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
var stack = []
var size = 0;
var starters = {
'(': ')',
'[': ']',
'{': '}'
}

for(var i = 0; i < str.length; i ++) {
    if(starters[str[i]]) {
        stack.push(str[i])
        size++
        console.log(stack)
    }else if(Object.values(starters).indexOf(str[i]) !== -1) {
        console.log(str[i])
        if(stack.length === 0) {
            return false;
        }
        var char = Object.keys(starters)[Object.values(starters).indexOf(str[i])]

        console.log(char)

        if(stack[size - 1] === char){
            stack.pop()
            size --
        }else{
            return false
        }
    }
}
return size === 0;

};
isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
