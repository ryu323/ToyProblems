/**
 * Compose, Pipe
 *
 * Implement the functions compose and pipe.
 *
 * Compose should return a function that is the composition of a list of functions of arbitrary length.
 * Each function is called on the return value of the function that follows.
 * You can think of compose as moving right to left through its arguments.
 *
 * Pipe composes a series of functions and returns the resulting function.
 * Each function is called on the return value of the preceding function.
 * You can think of pipe as moving left to right through its arguments.
 *
 */

var compose = function(){
  var args = [].slice.call(arguments);
  return args.reduce(function(a,b){
    return function(){
      return a(b.apply(this, arguments));
    };
  });
};

var pipe = function(){
  var args = [].slice.call(arguments);
    return args.reduceRight(function(a,b){
    return function(){
      return a(b.apply(this, arguments));
    };
  });
};
