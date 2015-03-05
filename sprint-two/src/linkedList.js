var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (this.tail){
      this.tail.next = node;
    }
    this.tail = node;
    if (this.head === null){
      this.head = this.tail;
    }
  };

  list.removeHead = function(){
    if (this.head){
      var result = this.head;
      this.head = result.next;
      return result.value;
    }
  };

  list.contains = function(target){
    var current = this.head;
    while(current) {
      if(current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
