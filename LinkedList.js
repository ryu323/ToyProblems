/**
 * Linked List
 *
 * Implement a linked-list
 *
 */

var LinkedList = function(initialValue) {
  this.head = {
    value: initialValue,
    next: null
  };
  this.tail = {
    value: initialValue,
    next: null
  };
};

LinkedList.prototype.addToTail = function(value) {
  var node = {
    value: value,
    next: null
  };
  if (this.head.value === undefined) {
    this.head = node;
    this.tail = node;
  } else if (this.head.next === null) {
    this.head.next = node;
    this.tail = node;
  } else {
    this.tail = node;
  }
}

LinkedList.prototype.removeHead = function() {
  if (this.head.next === null) {
    this.head = null;
    this.tail = null;
  } else {
    var temp = this.head.next;
    this.head = temp;
  }
}

LinkedList.prototype.contains = function(value) {
  var recurse = function(node, val) {
    if (node.value === val) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return recurse(node.next, val);
    }
  };
  return recurse(this.head, value);
}
