/**
 * Binary Search Array
 *
 * Given a sorted array of integers, find the index of a target value using a binary search algorithm.
 * Note: Your function should return -1 for target values not in the array.
 * Do NOT use Array.prototype.indexOf in your solution.
 *
 */

function binarySearch (array, target) {
  if (target < array[0] || target > array[array.length-1]) {
    return -1;
  }
  var result = 0;
  function recurse(array, start, end) {
    var mid = Math.floor((start + end)/2);
    if (array[mid] === target) {
      result = mid;
      return;
    }
    if (target < array[mid]) {
      recurse(array, start, mid);
    }
    if (target > array[mid]) {
      recurse(array, mid, end);
    }
  }
  recurse(array, 0, array.length);
  return result;
}


binarySearch([5], 4);  // -1
binarySearch([11, 12, 13, 14, 15], 12);  // 1
binarySearch([11, 12, 13, 14, 15], 15);  // 4
binarySearch([11, 12, 13, 14, 15], 16);  // -1
