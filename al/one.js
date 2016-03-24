function a(num) {
	var result = 0;
	for (var i = 1; i <= num; i++) {
		var j = i;
		while ((j / 5 > 0) && (j % 5 == 0)) {
			j = j / 5;
			result++;
		}
	}
	return result;
}

function b(num) {
	var i = 5;
	var result = 0;
	var c = (num - num % i) / i;

	while (c) {
		i *= 5;
		result += c;
		c = (num - num % i) / i;
	}

	return result;
}

function c(num) {
	var result = 0;

	while (num) {
		num = (num - num % 5) / 5;
		result += num;
	}

	return result;
}