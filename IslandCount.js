/**
 * Island Count
 *
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot.
 * Two land spaces are considered connected if they are adjacent (but not diagonal).
 *
 * NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read.
 * In other words, when you see a break, it's actually a '\n' character.
 *
 */

function countIslands(mapStr) {
  var islandArray = mapStr.split('\n');
  for (var i = 0; i < islandArray.length; i++) {
    islandArray[i] = islandArray[i].split('');
  }
  var islandHeight = islandArray.length;
  var islandLength = islandArray[0].length;
  var islandCount = 0;

  for (var row = 0; row < islandHeight; row++) {
    for (var col = 0; col < islandLength; col++) {
      if (islandArray[row][col] === '0') {
        islandCount++;
        recurse(row, col);
      }
    }
  }
  return islandCount;

  //helper functions
  function recurse(row, col) {
    if (islandArray[row][col] === '0') {
      islandArray[row][col] = '.';
      if (inBounds(row, col -1)) {
        recurse(row, col-1);
      }
      if (inBounds(row, col+1)) {
        recurse(row, col+1);
      }
      if (inBounds(row-1, col)) {
        recurse(row-1, col);
      }
      if (inBounds(row+1, col)) {
        recurse(row+1, col);
      }
    }
  }
  function inBounds(row, col) {
    if (row >= 0 && row < islandHeight) {
      if (col >= 0 && col < islandLength) {
        return true;
      }
    }
    return false;
  }
}

countIslands(
.0...
.00..
....0);  // 2
countIslands(
..000.
..000.
..000.
.0....
..000.);  // 3
countIslands(
..000.
..0...
..0.0.
..0...
..000.);  // 2
countIslands(
0...0
..0..
0...0);  // 5
