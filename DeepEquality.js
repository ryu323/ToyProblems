/**
 * Deep Equality
 *
 * Write a function that, given two objects, returns whether or not the two are deeply equivalent –
 * meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.
 * DO NOT use JSON.stringify
 *
 */

deepEquals = function(a, b) {
  var equals = true;

  function recurseObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      equals = false;
      return;
    }
    for (var key in obj1) {
      if (typeof obj1[key] === "number" || typeof obj1[key] === "string") {
        if (obj1[key] !== obj2[key]) {
          equals = false;
          return;
        }
      }
      if (Array.isArray(obj1[key])) {
        equals = recurseArray(obj1[key], obj2[key]);
      }
      if (typeof obj1[key] === "object") {
        recurseObject(obj1[key], obj2[key]);
      }
    }
  }

  function recurseArray(arr1, arr2){
    var match = true;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        match = false;
      }
    }
    return match;
  }

  recurseObject(a, b);
  return equals;
};

