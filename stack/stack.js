function stack() {
	this.top = 0;
	this.length = 0;
}

stack.prototype = {
	get: function(index) {
		return this[index];
	},

	push: function(item) {
		var len = this.length;
		this[len] = item;
		this.length++;
		return this;
	},

	pop: function() {
		var len = this.length,
			item = this[len - 1];

		delete this[--this.length];
		return item;
	},

	shift: function() {
		var start = this.top + 1,
			len = this.length,
			item = this[this.top];

		delete this[this.top];
      
		while (start < len) {
			this[start - 1] = this[start];
			start++;
		}

		delete this[--this.length];
		return item;
	}
}