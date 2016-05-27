/**
 * Function Bind
 *
 * Implement the function ‘bind’, which accepts a function and a context as arguments.
 * The context argument should override an existing context that the function is defined in.
 * Your bind function should return the passed in function.
 * Once you have finished that, implement the function ‘bind’ as a method of the Function.prototype object.
 * DO NOT use the native bind() function in your solutions. You may use the functions call() and apply().
 *
 */

var bind = function(func, context){
  var args1 = Array.prototype.slice.call(arguments, 2);
  return function(){
    var args2 = Array.prototype.slice.call(arguments);
    var args = args1.concat(args2);
    return func.apply(context, args);
  }
};

Function.prototype.bind = function(context) {
  var args1 = Array.prototype.slice.call(arguments, 1);
  var that = this;
  return function(){
    var args2 = Array.prototype.slice.call(arguments);
    var args = args1.concat(args2);
    return that.apply(context, args);
  }
};
