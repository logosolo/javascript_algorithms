function tree(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.depth = depth;
}

function BST() {
    this.root = null;                
    this.inOrder = inOrder;
}

BST.prototype = {
    inert: function(data){
        var tree = new new tree(data);         
    }
}


