var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //  create a node with value
    //  check if tail exists
    //    if yes, change current tail's next to new node
    //    also change new node's previous to current tail
    //  change tail to new node
    //  check if head is null
    //    if so, set head to tail
    var node = Node(value);
    if (this.tail){
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    if (this.head === null){
      this.head = this.tail;
    }
  };

  list.removeHead = function(){
    //  check if head exists
    //    if yes, set result to this.head
    //    set this.head to result.next
    //    set this.head.prev to null
    //    return result.value
    if (this.head){
      var result = this.head;
      this.head = result.next;
      if (this.head){
        this.head.prev = null;
      }
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

  list.addToHead = function(value) {
    //  create node with value
    //  check if head exists
    //    if yes, set this.head.prev to node
    //    set node.next to this.head
    //  set this.head to node
    //  check if tail is null
    //    if yes, set tail to node
    var node = Node(value);
    if (this.head){
      this.head.prev = node;
      node.next = this.head;
    }
    this.head = node;
    if (this.tail === null){
      this.tail = this.head;
    }
  };

  list.removeTail = function() {
    //  check if tail exists
    //    if yes, set result to this.tail
    //    set this.tail to this.tail.prev
    //    if this.tail exists
    //      set this.tail.next to null
    //    return result.value
    if (this.tail){
      var result = this.tail;
      this.tail = this.tail.prev;
      if (this.tail){
        this.tail.next = null;
      }
      return result.value;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
