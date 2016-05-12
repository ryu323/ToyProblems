/**
 * Even Occurrence
 *
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 *
 */

function evenOccurrence(arr) {
  var obj = {};

  for(var i = 0; i < arr.length; i++){
    if(obj[arr[i]] === undefined){
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  for(var i = 0; i < arr.length; i++) {
    if(obj[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }

  return null;
}

evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5]);  // 2
evenOccurrence(["cat", "dog", "dig", "cat"]);  // "cat"
