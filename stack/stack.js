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
		this.length ++;
	},

	pop: function(){
	    var len = this.length;
	    delete this[len];
	    this.length --;	
	},

	shift: function() {
		var start, len,
			suffix = this.top,
			item = this[suffix];

		delete this[suffix];
		len = this.length -= 1;
		start = this.top + 1;

		while (start < len - 1) {
			this[start - 1] = this[start];
			start ++;
		}

		return item;
	}
}