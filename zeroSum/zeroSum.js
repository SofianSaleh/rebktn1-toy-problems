/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

// var zeroSum = (array) => {
//     var arr = []
//     for(var i = 0; i < array.length; i++){
//         if(array[i] < 0){
//             arr.push(array[i]) 
//         }
//     }
//     if(array.includes((-1*arr[0]))){
//         return true
//     }else{
//         return false
//     }
// }


var zeroSum = (array) => {
    var j = 0
    var k =0
    
    for (let i = 0; i <= array.length; i++) {
        if(i === array.length ) {
            j += 1
            i = 0
        }
        if(j === array.length - 1){
            return;
        }
        console.log(i, j)
        
        if((array[j] + array[i]) === 0){
            return true
        }    
    }
    return false
}
console.log(zeroSum([ 1, 3, 2, -3 ]))