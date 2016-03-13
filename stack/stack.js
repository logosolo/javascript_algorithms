//初始化栈
function stack() {
	this.base = 0;
	this.top = -1;
	this.length = 0;
}

stack.prototype = {
	get: function(index) {
		return this[index];
	},

	push: function(item) {
		this[++this.top] = item;
		this.length++;

		return this;
	},
    //出栈
	pop: function() {
		//stack is empty
		if (this.top == -1) {
			return;
		}
		var len = this.length,
			item = this[len - 1];

		delete this[--this.length];
		this.top--;
		return item;
	},
    
	shift: function() {
		//stack is empty
		if (this.top == -1) {
			return;
		}
		var start = this.base + 1,
			len = this.length,
			item = this[this.base];

		delete this[this.base];

		while (start < len) {
			this[start - 1] = this[start];
			start++;
		}

		delete this[--this.length];
		this.top--;
		return item;
	}
}