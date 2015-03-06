

var Graph = function(){
};

Graph.prototype.addNode = function(node){
	this[node] = {
		value: node,
		edges: []
	};
};

Graph.prototype.contains = function(node){
	if(this[node]) {
		return true;
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	if(this[node]) {
		delete this[node];
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	if(this[fromNode] && this[toNode]) {
		if(this[fromNode].edges.indexOf(toNode) >= 0) {
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if(this[fromNode] && this[toNode]) {
		this[fromNode].edges.push(toNode);
		this[toNode].edges.push(fromNode);
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if(this[fromNode] && this[toNode]) {
		if(this[fromNode].edges.indexOf(toNode) >= 0) {
			var index1 = this[fromNode].edges.indexOf(toNode);
			this[fromNode].edges.splice(index1, 1);
			var index2 = this[toNode].edges.indexOf(fromNode);
			this[toNode].edges.splice(index2, 1);
		}
	}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this, function(item) {
		cb(item.value);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



