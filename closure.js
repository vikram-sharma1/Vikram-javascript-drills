function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

      let count = 0

      return {
        increment : () => count++ ,
        decrement : () => count--
      }



  }
  
  function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

    let Count = 0;
      return (...args) => {
        if (Count === n){
          return null
        } 
        Count++;
        return cb(...args);
      };
  }
  
  function cacheFunction(cb) {
    // Should return a funciton that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.

    const cache = {}

    return (args) => {
      if(Object.prototype.hasOwnProperty.call(cache, args)){
        return cache[args]
      }

      cache[args] = cb(args)

      return(cache[args])
    }

  }