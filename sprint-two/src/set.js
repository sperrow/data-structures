var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage.insert(item, item);

	// *original solution*
	// var index = this._storage.indexOf(item);
	// if(index < 0){
	// 	this._storage.push(item);
	// }
};

setPrototype.contains = function(item){
	if(this._storage.retrieve(item)) {
		return true;
	}
	return false;

	// *original solution*
	// if (this._storage.indexOf(item) >= 0){
	// 	return true;
	// }
	// return false;
};

setPrototype.remove = function(item){
	this._storage.remove(item);

	// *original solution*
	// var index = this._storage.indexOf(item);
	// if(index >=0){
	// 	this._storage.splice(index, 1);
	// }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
