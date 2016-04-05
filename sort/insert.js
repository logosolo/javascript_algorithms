function insertSort(ar) {
	var s = 0,
		i = s + 1,
		len = ar.length;

	while (i < len) {

		var temp = ar[i],
			j = i - 1;
		
		while (j >= 0 && ar[j] > temp) {
			
			ar[j + 1] = ar[j];
			
			j--;
		
		}
		
		ar[j + 1] = temp;

		i++;
	}
}