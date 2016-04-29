/**
 * Character Frequency
 *
 * Write a function that takes as its input a string and returns an array of arrays as
 * shown below sorted in descending order by frequency and then by ascending order by character.
 *
 */

function characterFrequency(string) {
  var arr = string.split("");
  var holder = {};
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    holder[arr[i]] = (holder[arr[i]] + 1) || 1;
  }
  for (var key in holder) {
    result.push([key, holder[key]])
  }
  for (var x = 0; x < result.length; x++) {
    for (var y = 0; y < x; y++) {
      if (result[x][1] > result[y][1]) {
        var temp = result[x];
        result[x] = result[y];
        result[y] = temp;
      }
      if (result[x][1] === result[y][1]) {
        if (result[x][0] < result[y][0]) {
          var temp = result[x];
          result[x] = result[y];
          result[y] = temp;
        }
      }
    }

  }
  return result;
}

characterFrequency("aaabbc");  // [["a", 3], ["b", 2], ["c", 1]]
characterFrequency("mississippi");  // [["i", 4], ["s", 4], ["p", 2], ["m", 1]]
characterFrequency("");  // []
