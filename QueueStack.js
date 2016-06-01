/**
 * Queue Stack
 *
 * Write a stack. Once you’re done, implement a queue using two stacks.
 * Do not create a storage array for your queue.
 *
 */

var Stack = function() {
  var storage = [];
  var size = 0;

  this.push = function(value){
    if (value !== undefined) {
      storage[end] = value;
      size++;
    }
  };

  this.pop = function(){
    var result;
    if (size > 0) {
      var result = storage[size - 1];
      storage[size - 1] = undefined;
      size--;
      return result;
    }
  };

  this.size = function(){
    return size;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    if (outbox.size === 0) {
      while (inbox.size !== 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
};
