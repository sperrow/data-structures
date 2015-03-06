var BinarySearchTree = function(value){
	var newTree = {};

	newTree.value = value;
	newTree.left;
	newTree.right;

	newTree.insert = function(value) {
		if(!this.value) {
			this.value = value;
		} else if(value < this.value) {
			if(this.left) {
				this.left.insert(value);
			} else {
				this.left = BinarySearchTree(value);
			}
		} else if(value > this.value) {
			if(this.right) {
				this.right.insert(value);
			} else {
				this.right = BinarySearchTree(value);
			}
		}
	};

	newTree.contains = function(value) {
		if(value === this.value) {
			return true;
		} else if(value < this.value) {
			if(this.left) {
				if(this.left.contains(value)) {
					return true;
				}
			}
		} else if(value > this.value) {
			if(this.right) {
				if(this.right.contains(value)) {
					return true;
				}
			}
		}
		return false;
	};

	newTree.depthFirstLog = function(cb) {
		if(this.value) {
			cb(value);
		}
		if(this.left) {
			this.left.depthFirstLog(cb);
		}
		if(this.right) {
			this.right.depthFirstLog(cb);
		}
	};

	return newTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
