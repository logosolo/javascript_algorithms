function quickSort(start, end, arr) {
	if (Object.prototype.toString.apply(arr) !== '[object Array]') {
		return;
	}
	if (start < end) {
		var q = partion(start, end, arr);
		quickSort(start, q - 1, arr);
		quickSort(q + 1, end, arr);
	}
}
//the divide function 
function partion(s, e, arr) {
	var temp,
		x = arr[s],
		f = e + 1;
	for (var i = e; i > s; i--) {
		if (arr[i] > x) {
			f = f - 1;
			temp = arr[f];
			arr[f] = arr[i];
			arr[i] = temp;
		}
	}
	//when sort program is done 
	//exchange the x with the position f-1 of the arr
	temp = arr[f - 1];
	arr[f - 1] = arr[s];
	arr[s] = temp;
	return f - 1;
}