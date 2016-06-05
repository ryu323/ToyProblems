/**
 * Largest Product Of Three
 *
 * Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
 *
 */

function largestProductOfThree(array) {
  if (array.length < 3) {
    return null;
  }
  var sorted = array.sort(function(a,b) {
    return a - b;
  });
  var highest = sorted[array.length - 1] *
                sorted[array.length - 2] *
                sorted[array.length - 3];
  if (sorted[0] < 0 && sorted[1] < 0) {
    if (sorted[0] * sorted[1] * sorted[array.length - 1] > highest) {
      highest = sorted[0] * sorted[1] * sorted[array.length - 1];
    }
  }
  return highest;
}

largestProductOfThree([2, 1, 3, 7]);  // 42
largestProductOfThree([0, 2, 3]);  // 0
