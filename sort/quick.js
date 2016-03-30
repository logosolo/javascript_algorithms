function quickSort(start, end, arr) {

	if (Object.prototype.toString.apply(arr) !== '[object Array]') {
		return;
	}
	if (!(start < end)) {
		return;
	}

	var q = partion(start, end, arr);
	quickSort(start, q - 1, arr);
	quickSort(q + 1, end, arr);

}

function partion(s, e, arr) {
	var temp,
		x = arr[e],
		f = s - 1;

	for (var i = s; i < e; i++) {
		if (arr[i] <= x) {
			f = f + 1;
			temp = arr[f];
			arr[f] = arr[i];
			arr[i] = temp;
		}
	}

	temp = arr[f + 1];
	arr[f + 1] = arr[e];
	arr[e] = temp;

	return f + 1;
}