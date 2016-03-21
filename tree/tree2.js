function tree(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}

function BST() {
	this.root = null;
	this.current = null;
}

BST.prototype = {
	insert: function(data) {
		var nt = new tree(data, null, null);
		if (this.root == null) {
			this.root = nt;
			tre = nt;
		} else {
			var parent,
				current = this.root;
			while (true) {
				parent = current;
				if (data < current.data) {
					current = current.left;
					if (current == null) {
						parent.left = nt;
						break;
					}
				} else {
					current = current.right;
					if (current == null) {
						parent.right = nt;
						break;
					}

				}
			}

		}
	},

	show: function() {
		return this.data;
	}
}