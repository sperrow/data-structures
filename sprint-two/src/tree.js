var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
	var tree = Tree(value);
	tree.parent = this;
	this.children.push(tree);
};

treeMethods.contains = function(target){
	var result = false;

	var recurse = function(tree, target) {
		if(tree.value === target) {
			result = true;
		} else if(tree.children.length > 0) {
			for(var i = 0; i < tree.children.length; i++) {
				recurse(tree.children[i], target);
			}
		}
	};

	recurse(this, target);

	return result;
};

treeMethods.removeFromParent = function() {
	if(this.parent) {
		var index = this.parent.children.indexOf(this);
		this.parent.children.splice(index, 1);
		this.parent = null;
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
