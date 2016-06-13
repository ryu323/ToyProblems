/**
 * Non-repeated Character
 *
 * Given an arbitrary input string, return the first non-repeating character.
 * For strings with all repeats, return 'sorry'.
 *
 */

function firstNonRepeatedCharacter(string) {
  // Write your code here, and
  // return your final answer.
  var array = string.split('');
  result = 'sorry';
  for (var i = 0; i < array.length; i++) {
    var arr = string.split('');
    var x = arr[i];
    arr.splice(i, 1);
    if (arr.indexOf(x) < 0) {
      result = x;
      break;
    }
  }
  return result;
}

firstNonRepeatedCharacter("ABCDBIRDUP");  // "A"
firstNonRepeatedCharacter("XXXXXXX");  // "sorry"
firstNonRepeatedCharacter("ALAMABA");  // "L"
firstNonRepeatedCharacter("BABA");  // "sorry"
