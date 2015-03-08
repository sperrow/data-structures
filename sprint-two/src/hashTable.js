var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._items = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //  create bucket
  var bucket = [];
  //  if a bucket exists at index, set bucket to that
  if(this._storage.get(i)) {
  	bucket = this._storage.get(i);
  }
  // check if k is in any subArray in bucket
  var found = false;
  for(var j = 0; j < bucket.length; j++) {
    //  check if key is found in bucket
    if(bucket[j][0] === k) {
      //  if so, replace key and value
      bucket[j] = [k, v];
      found = true;
      break;
    }
  }
  //  if key is found, set bucket at storage index
  if (found) {
    this._storage.set(i, bucket);
  } //  else if key is not found in bucket, add new sub-array with k and v
  else {
    bucket.push([k, v]);
    this._items++;
    //  set bucket at storage index
    this._storage.set(i, bucket);
    // check new size ratio
    if (this.sizeCheck() === 'double') {
      this.resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket){
  	for (var j = 0 ; j<bucket.length ; j++){
  		if (bucket[j][0] === k){
  			return bucket[j][1];
  		}
  	}
  }
  return null;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var bucket = this._storage.get(i);
	if(bucket){
		for (var j = 0 ; j<bucket.length ; j++){
  		if (bucket[j][0] === k){
        // remove item at bucket[i]
  			bucket.splice(j,1);
        this._items--;
        // check new size ratio
        if (this.sizeCheck() === 'halve'){
          this.resize(this._limit / 2);
        }
        break;
  		}
  	}
	}
};

HashTable.prototype.sizeCheck = function() {
  var ratio = Math.floor(this._items / this._limit * 100);
  if(ratio < 25) {
    return 'halve';
  } else if(ratio > 75) {
    return 'double';
  } else {
    return 'ok';
  }
};

HashTable.prototype.resize = function(limit) {
  this._items = 0;
  //  store old storage object
  var oldStorage = this._storage;
  this._storage = LimitedArray(limit);
  this._limit = limit;
  var context = this;
  oldStorage.each(function(bucket){
    if (bucket && bucket.length > 0){
      for (var i = 0 ; i < bucket.length ; i++){
        context.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
