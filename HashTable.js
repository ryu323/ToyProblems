/**
 * Hash Table
 *
 * Finish this implementation of a Hash Table.
 * It should have the methods insert(), retrieve(), and remove().
 * Your hash table need not resize itself, but shall handle collisions.
 *
 */

  var makeHashTable = function() {
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value) {
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      var added = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          added = true;
        }
      }
      if (!added) {
        storage[index].push([key, value]);
      }
    };

    table.retrieve = function(key) {
      var index = getIndexBelowMaxForKey(key, storageLimit);
      if (!storage[index]) {
        return undefined
      }
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          found = true;
          return storage[index][i][1];
        }
      }
    };

    table.remove = function(key) {
      var index = getIndexBelowMaxForKey(key, storageLimit);
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index].splice(i,1);
        }
      }
    }
    return table;
  };
 var getIndexBelowMaxForKey = function(str, max) {
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
