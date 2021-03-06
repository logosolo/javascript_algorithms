function bindaryTree(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}

function initTree() {
	this.root = null;
}

initTree.prototype = {
	insert: function(data) {
		var current, parent,
			tree = new bindaryTree(data);
		if (typeof data !== 'number') {
			throw 'data is not number';
		}
		if (!this.root) {
			this.root = tree;
			return;
		}
		current = this.root;
		this._cache = current;
		for (;;) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (!current) {
					parent.left = tree;
					break;
				}
			} else {
				current = current.right;
				if (!current) {
					parent.right = tree;
					break;
				}
			}
		}
	}
};