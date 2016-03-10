function stack() {
	this.top = 0;
	this.length = 0;
}

stack.prototype = {
	get: function(index) {
		return this[index];
	},

	push: function(item) {
		var length = this.length;
		this[length] = item;
		this.length++;
	},

	pop: function() {
		var len = this.length,
		    item = this[len - 1];

		delete this[len - 1];
		
		this.length--;

		return item;
	},

	shift: function() {
		var start, len,
			suffix = this.top,
			item = this[suffix];

		delete this[suffix];

		len = this.length -= 1;
		start = this.top + 1;

		while (start < len + 1) {
			this[start - 1] = this[start];
			start++;
		}

		delete this[len];

		return item;
	}
}