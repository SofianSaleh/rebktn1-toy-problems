/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function (apple, orange) {
  if(apple === orange) {
    return true
  } 

  else if ((typeof apple == 'object' && apple !== null) && (typeof orange == "object" && orange !== null)) {
    if (Object.keys(apple).length !== Object.keys(orange).length) {
      return false;
    }
    for (var key in apple) {
      if (orange[key]) {
         if(!deepEquals(apple[key], orange[key])){
           return false;
         }
      }
    }
    return true;
  }
  else 
    return false;
};
