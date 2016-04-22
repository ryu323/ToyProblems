/**
 * Balanced Parenthesis
 *
 * Given a string, return true if it contains balanced parenthesis ().
 *
 */

function isBalanced (string) {
  var count = 0;
  var arr = string.split('');
  for (var i = 0; i < arr.length; i++) {
    if (count < 0) {
      return false;
    }
    if (arr[i] === "(") {
      count++;
    }
    if (arr[i] === ")") {
      count--;
    }
  }
  return count === 0;
}

isBalanced("(x + y) - (4)");  // true
isBalanced("(((10 ) ()) ((?)(:)))");  // true
isBalanced("(50)(");  // false
isBalanced("");  // true
