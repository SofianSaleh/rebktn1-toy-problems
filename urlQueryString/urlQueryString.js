/*
    URL Query String
    Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    var array = []
    var str = ''
    var str2 = ''
    count = 0
    if (url.indexOf('?') !== -1) {

        for (var i = 0; i < url.length; i++) {
            if (url[i] === '?') {
                url = url.slice(i + 1)
            }
        }
////////////////////////////////////////////////////////
        for (var j = 0; j < url.length; j++) {
            // if(url[l] !== '&' || url[l] !== '%'){
            //     for(var l = j ; l <url.length;l++){
            //         if(url[l]=== '=') {
            //             break;
            //         }
            //         str2 += url[l]
            //         console.log(str2)
            //     }
            // }
            
            count=0
            if (url[j] !== '=' && url[j] !== '%' && url[j] !== '&') {
                for (var k = j + 2; k < url.length; k++) {
                    if (url[k] === '%' || url[k] === '&'){
                        break
                    }
                    if (url[k] !== '=' || url[k] !== '%' || url[k] !== '&') {
                        str += url[k]
                        count++
                        // console.log(count)
                        
                    }
                
                }
                if (url[j] !== '=' && url[j] !== '%' && url[j] !== '&') {
                    
                    array.push([str2, str])
                    
                    str = ''
                    str2=''
                }
                j+=count+1
            }
        }
        return array
    } else {
        return undefined;
    }
}
parseQueryString("http://example.com?a=hello&b=99")
