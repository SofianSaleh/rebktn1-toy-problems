'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */




var asyncMap = function(tasks, callback) {
    
    // make a counter to keep track of how many functions had been done.
    // make a results array to store the results of the functions. 
    // loop through the tasks array.
    // send the task a callback to excute.
    // apply the function one after anoter and checking if the counter equal the array.length.
    // if it equals the length of the array apply the callback.

    var taskCounter = 0;
    var tasksDone = [];

    tasks.forEach((task, i) => {
        task(function(one) {
            tasksDone[i] = one;
            taskCounter++;
            if(taskCounter === tasks.length) {
                callback(tasksDone);
            }
        })
    });
};

//TESTING//

// asyncMap([
//      function(cb){
//        setTimeout(function(){
//          cb('one');
//    }, 200);
//  },
//  function(cb){
//        setTimeout(function(){
//          cb('two');
//    }, 100);
//  }
// ],
//  function(results){
//        // the results array will equal ['one','two'] even though
//    // the second function had a shorter timeout.
//    console.log(results); // ['one', 'two']
// });