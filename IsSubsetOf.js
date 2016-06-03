/**
 * Is Subset Of
 *
 * Make an array method that can return whether or not a context array is a subset of an input array.
 * To simplify the problem, you can assume that both arrays will contain only strings.
 *
 */

Array.prototype.isSubsetOf = function(target) {
  var obj = {};
  var arr = this;
  for (var i = 0; i < target.length; i++) {
    obj[target[i]] = true;
  }
  for (var j = 0; j < arr.length; j++) {
    if (!obj[arr[j]]) {
      return false;
    }
  }
  return true;
};
