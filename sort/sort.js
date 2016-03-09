function sort(arr, func) {
	var ar = arr,
		temp, result;

	for (var x = 0, len = ar.length; x < len; x++) {
		for (var y = x + 1; y < len; y++) {
			result = func(ar[x], ar[y]);			
			if (result > 0) {
			    exchange(ar, x, y);
			}
		}
	}

	function exchange(arr, x, y) {
		temp = arr[x];
		arr[x] = arr[y];
		arr[y] = temp;
	}

	return ar;
}