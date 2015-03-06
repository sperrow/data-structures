var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = [];
  if(this._storage.get(i)) {
  	list = this._storage.get(i);
  }
  list.push([k, v]);
  this._storage.set(i, list);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i);
  if(list){
  	for (var j = 0 ; j<list.length ; j++){
  		if (list[j][0] === k){
  			return list[j][1];;
  		}
  	}
  }
  return null;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var list = this._storage.get(i);
	if(list){
		for (var j = 0 ; j<list.length ; j++){
  		if (list[j][0] === k){
  			list.splice(j,1);
  		}
  	}
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
