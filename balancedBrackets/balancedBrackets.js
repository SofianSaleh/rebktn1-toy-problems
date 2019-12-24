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
    var beginings = {
        '(': '(',
        '[': '[',
        '{': '{'
    }

    var endings = {
        ')': ')',
        ']': ']',
        '}': '}'
    }

        for(var i = 0; i < str.length; i ++) {
            if(beginings[str[i]]) {
                stack.push(str[i])
                size++
            }else if(endings[str[i]]) {
                console.log()
                if(stack.length === 0) {
                    return false;
                }
                if(str[i] === ')'){
                    var char = '('
                }
                if(str[i] === ']'){
                    var char = '['
                }
                if(str[i] === '}'){
                    var char = '{'
                }



                if(stack[size - 1] === beginings[char]){
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
