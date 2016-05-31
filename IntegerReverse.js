/**
 * Integer Reverse
 *
 * Given a positive integer n, return its digits reversed.
 * DO NOT CONVERT n INTO A STRING OR ARRAY.
 * Only use integers and math in your solution.
 *
 */

function reverseInteger(n) {
  if (n < 10) {
    return n;
  }

  n = deleteZeroes(n);
  var multiplier = getMultiplier(n);
  var result = 0;

  while(multiplier >= 10) {
    var x = n % 10;
    result += (multiplier * x);
    multiplier /= 10;
    n = Math.floor(n/10);
  }
  result += n;

  return result;
}

function deleteZeroes(n) {
  while(n%10 === 0) {
    n /= 10;
  }
  return n;
}

function getMultiplier(n) {
  var x = 1;
  while(n/x >= 10) {
    x *= 10;
  }
  return x;
}

reverseInteger(1234);  // 4321
reverseInteger(100);  // 1
reverseInteger(150);  // 51
