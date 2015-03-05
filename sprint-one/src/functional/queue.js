var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var back = 0;
  var front = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function(){
    if(back > front) {
      var result = storage[front];
      delete storage[front];
      front++;
      return result;
    }
  };

  someInstance.size = function(){
    return back - front;
  };

  return someInstance;
};
